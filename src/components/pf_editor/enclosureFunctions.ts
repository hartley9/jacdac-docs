import JSZip from "jszip"

import {
    primitives,
    transforms,
    booleans,
    utils,
    extrusions,
    modifiers,
} from "@jscad/modeling"
import { Geom3 } from "@jscad/modeling/src/geometries/types"
import stlDeserializer from "@jscad/stl-deserializer"
import stlSerializer from "@jscad/stl-serializer"
import svgSerializer from "@jscad/svg-serializer"

//const { booleans, primitives, transforms, utils } = jscad;
const { union, subtract } = booleans
const { cylinder, roundedCuboid } = primitives
const { rotate, rotateX, translate, scale } = transforms
const { degToRad } = utils
const { project } = extrusions
const { generalize } = modifiers

import { buttonSTL } from "../models/modelExtrusions/button.js"
import {keyswitchSTL} from "../models/modelExtrusions/keyswitch.js"
import { sliderSTL } from "../models/modelExtrusions/slider.js"
import {rgbledringSTL} from "../models/modelExtrusions/rgbledring.js"
import {rotarySTL} from "../models/modelExtrusions/rotary.js"
import {adapterSTL} from "../models/modelExtrusions/adapter.js"
import { collectMountingHoleLocations } from "./editFunctions"
import { rotateZ } from "@jscad/modeling/src/operations/transforms"
import { getModulesFromScene } from "./utilFuncs"
import cuboid from "@jscad/modeling/src/primitives/cuboid.js"

let xSize = 0
let ySize = 0
let zSize = 0

let myScene;

const standOffHeight = 3

function whichModuleSTL(moduleName) {
    moduleName = moduleName.toLowerCase()
    if (moduleName.includes("button")) {
        return buttonSTL
    } else if (moduleName.includes("slider")) {
        return sliderSTL
    } else if (moduleName.includes("rgb led ring")){
        return rgbledringSTL
    } else if (moduleName.includes("adapter")){
        return adapterSTL
    } else if (moduleName.includes("key switch")){
        console.log('found keyswitch')
        return keyswitchSTL
    } else if (moduleName.includes("rotary")){
        return rotarySTL
    }
}

function deserialiseSTL(moduleName) {
    if (whichModuleSTL(moduleName)) {
        const geometry = stlDeserializer.deserialize(
            {
                filename: "stl",
                addMetaData: true,
                output: "geometry",
            },
            whichModuleSTL(moduleName)
        )
        return geometry
    } else {
        return undefined
    }
}

export function moduleStandOffs(scene) {
    const mountingHoleData = collectMountingHoleLocations(scene)
    const moduleStandOffGeo = union(
        cylinder({ radius: 4, height: zSize / 4 }),
        translate([0, 0, 3], cylinder({ radius: 1.5, height: zSize / 4 }))
    )

    let standOffGeoToReturn = undefined

    mountingHoleData.forEach(mountingHole => {
        const position = mountingHole.mountingHolePosition

        if (standOffGeoToReturn !== undefined) {
            standOffGeoToReturn = union(
                translate(
                    [
                        -position.x,
                        position.z,
                        -zSize / 4,
                    ], 
                    moduleStandOffGeo
                ),
                standOffGeoToReturn
            )
        } else {
            standOffGeoToReturn = translate(
                [
                    -position.x /* + sizeBuffer */,
                    position.z /* + sizeBuffer */,
                    -zSize / 4,
                ],
                moduleStandOffGeo
            )
        }
    })

    return standOffGeoToReturn
}

export function getIntersectingObjects(enclosureLid, scene) {}

export async function downloadSTLEnclosure(enclosureDimensions, scene?, genCarrierPCB?) {
    const jszip = new JSZip()
    const enclosureSTLs = jszip.folder("enclosure stls")

    myScene = scene

    const plasticStandOffs = true

    const enclosureBlobs = await getSTLBlob(enclosureDimensions, scene);

    console.log('ENCLOSURE BLOBS');
    console.log(enclosureBlobs)

    for (const lidOrBase in enclosureBlobs) {
        if (lidOrBase === "lid") {
            enclosureSTLs.file("lid.svg", enclosureBlobs[lidOrBase])
        } else {
            enclosureSTLs.file("base.stl", enclosureBlobs[lidOrBase])
        }
    }

    jszip.generateAsync({ type: "blob" }).then(function (content) {
        downloadBlob(content, "enclosureStls.zip")
    })
}

export async function getSTLBlob(enclosureDimensions, scene?, enclosureOptions?) {
    
    const myEnclosure = generate(enclosureDimensions, scene)
    let rawLidData, rawBaseData;
    if (!enclosureOptions){
        
        rawLidData = svgSerializer.serialize(
            { unit: 'mm' },
            generalize(
                { snap: true, simplify: true, triangulate: true },
                project({axis: [0,0,1]}, myEnclosure.lid))
        )
         rawBaseData = stlSerializer.serialize(
            { binary: true },
            myEnclosure.base
        )

        console.log('raw base data: ', rawBaseData)
        console.log('raw lid data: ', rawLidData)
    } else {

        console.log('my enclosure');
        console.log(myEnclosure)
        const exportOptions = enclosureOptions.exportOptions;
        
        const format = exportOptions.format;

        console.log('heres my format in here');
        console.log(format);
        console.log('lid, ', format.lid.toLowerCase());

        console.log('does format lid include stl: ', format.lid.includes('stl'))
        
        if (format.lid.toLowerCase().includes('stl')){
           // console.log('im in here in the lid serializer ');
            
            rawLidData = stlSerializer.serialize(
               {binary: false},
                myEnclosure.lid
            )
        } else if (format.lid.toLowerCase().includes('svg')){
            rawLidData = svgSerializer.serialize(
                { unit: 'mm' },
                generalize(
                    { snap: true, simplify: true, triangulate: true },
                    project({axis: [0,0,1]}, myEnclosure.base))
            )
        }
        

        if (format.base.toLowerCase().includes('stl')){
            rawBaseData = await stlSerializer.serialize(
                { binary: false },
                myEnclosure.base
            )
            console.log('got to stl, heres raw base data')
            console.log(rawBaseData);
        } else if (format.base.toLowerCase().includes('svg')){
            rawBaseData = await svgSerializer.serialize(
                { unit: 'mm' },
                generalize(
                    { snap: true, simplify: true, triangulate: true },
                    project({axis: [0,0,1]}, myEnclosure.base)))
            
        }

        

    } 

    //in browser (with browserify etc)
    const lidBlob = new Blob(rawLidData);
    const baseBlob = new Blob(rawBaseData);

    return {
        lid: lidBlob,
        base: baseBlob,
    }
}

export function downloadBlob(blob, name = "file.txt") {
    // For other browsers:
    // Create a link pointing to the ObjectURL containing the blob.
    const data = window.URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = data
    link.download = name

    // this is necessary as link.click() does not work on the latest firefox
    link.dispatchEvent(
        new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window,
        })
    )

    setTimeout(() => {
        // For Firefox it is necessary to delay revoking the ObjectURL
        window.URL.revokeObjectURL(data)
        link.remove()
    }, 100)
}

const sizeBuffer = 20

export const generate = (enclosureDimensions?, scene?) => {
    xSize = enclosureDimensions.height + sizeBuffer
    ySize = enclosureDimensions.width + sizeBuffer
    zSize = enclosureDimensions.depth //+ sizeBuffer;

    return {
        //generalize(
          //  { snap: true, simplify: true, triangulate: true },
         //   project(
              //  { axis: [0, 0, 1] },
               lid: rotateZ(
                    degToRad(90),
                    union(
                        translate(
                            [0, -ySize * 1.1, 0],
                            rotateX(degToRad(180), 
                           // addComponentApertures(scene, enclosureTop(scene) ))
                           enclosureTop(scene))
                        )
                        // enclosureBottom(scene),
                    )
                ),
         //   )
       // ),
        base: rotateZ(
            degToRad(90),
            union(
                // translate([0, -ySize*1.1, 0], rotateX(degToRad(180), enclosureTop(scene))),
                //addComponentApertures(scene, enclosureBottom(scene))
              //  addComponentApertures(scene, enclosureBottom(scene))
              enclosureBottom(scene)
            )
        ),
    }
}

const mounts = (x, y) => {
    return union(
        standOff(x / 2, y / 2),
        standOff(x / 2, -y / 2),
        standOff(-x / 2, y / 2),
        standOff(-x / 2, -y / 2)
    )
}

const standOff = (x, y, d?) => {
    const standOffRadius = d ? d : 2

    return translate(
        [x, y, -(zSize / 4)],
        subtract(
            cylinder({ radius: standOffRadius, height: standOffHeight }),

            cylinder({ radius: 1.3, height: standOffHeight + zSize / 10 })
        )
    )
}

const enclosureShape = () => {
    return roundedCuboid({ size: [xSize, ySize, zSize], roundRadius: 3 })
}

const enclosureBottom = (scene): Geom3 => {
    // let e = enclosure();
    const cutFraction = 0.25
    const chopper = translate(
        [-xSize, -ySize, zSize * cutFraction],
        cuboid({
            size: [xSize * 2, ySize * 2, zSize * 2],
            center: [(xSize * 2) / 2, (ySize * 2) / 2, (zSize * 2) / 2],
            //roundRadius: 5,
        })
    )
    const outer = subtract(enclosure(), chopper)

    const standOffs = moduleStandOffs(scene)

    const inner = subtract(enclosure(0.95), translate([0, 0, 3], chopper))

    const enclosureBottom = union(outer, inner, mounts(xSize, ySize))
    //return enclosureBottom; 
    return addComponentApertures(scene, enclosureBottom);
}

const enclosure = (wallThickness?): Geom3 => {
    wallThickness = wallThickness || 0.9
    const e = enclosureShape()

    const cavity = scale([wallThickness, wallThickness, wallThickness], e)

    return subtract(e, cavity)
}

// top is
const enclosureTop = (scene): Geom3 => {
    const enclosureTop = subtract(enclosure(), enclosureBottom(scene))
    return addComponentApertures(scene, enclosureTop)
   //return enclosureTop
}

const addComponentApertures = (scene, enclosureTop): Geom3 => {
    const componentLocations = getModulesFromScene(scene)//[]

    scene.traverse(obj => {
        if (obj.userData.isModule) {
            const moduleName = obj.userData.name

            const position = obj.parent.position
            const rotation = obj.rotation

            componentLocations.push({
                position: JSON.parse(JSON.stringify(position)),
                rotation: JSON.parse(JSON.stringify(rotation)),
                moduleName: moduleName,
            })
        }
    }) 

    let geomToReturn = enclosureTop

    //if (componentLocations.length> 0){

    componentLocations.forEach(component => {
        if (deserialiseSTL(component.moduleName)){
            geomToReturn = subtract( //subtract
                geomToReturn,
                translate(
                    [-component.position.x, component.position.z,standOffHeight-component.position.y],
                    rotate(
                         [
                            component.rotation._z,
                            component.rotation._x,
                            component.rotation._y-1.5708*2,
                        ], 
                       // scale(
                         //   [1000, 1000, 1000],
                            deserialiseSTL(component.moduleName)
                     //   )
                    )
                )
            )}
    })

    return geomToReturn
}
