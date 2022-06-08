import JSZip from "jszip"

import {primitives, transforms, booleans, utils} from '@jscad/modeling';
import { Geom3 } from '@jscad/modeling/src/geometries/types';
import stlDeserializer from "@jscad/stl-deserializer"
import stlSerializer from "@jscad/stl-serializer"

//const { booleans, primitives, transforms, utils } = jscad;
const { union, subtract } = booleans;
const { cylinder, roundedCuboid } = primitives;
const { rotate, rotateX, translate, scale } = transforms;
const { degToRad } = utils;

import {buttonSTL} from '../models/modelExtrusions/button.js'
import {sliderSTL} from '../models/modelExtrusions/slider.js'
import { collectMountingHoleLocations } from './editFunctions';

let xSize = 0;
let ySize = 0;
let zSize = 0;

let myScene;

const standOffHeight = 3;

function whichModuleSTL(moduleName){
    moduleName = moduleName.toLowerCase();
    if (moduleName.includes('button')){
        return buttonSTL;
    } else if (moduleName.includes('slider')){
        
        return sliderSTL;
    }
}

function deserialiseSTL(moduleName)
{

    if (whichModuleSTL(moduleName)){

        const geometry = stlDeserializer.deserialize(
            {
                filename: 'stl',
                addMetaData: true,
                output: 'geometry'
              },
            whichModuleSTL(moduleName)
        )
        
        return geometry
    }
    else {
        return undefined;
    }
    
}

export function moduleStandOffs(scene){
    const mountingHoleData = collectMountingHoleLocations(scene);

    const moduleStandOffGeo = union(
           // subtract(
                cylinder({radius: 2, height: zSize/2}),
                translate([0,0,3], cylinder({radius: 1.5, height: zSize/2}))
            //)
        )


    let standOffGeoToReturn = undefined; 

    mountingHoleData.forEach(mountingHole => {
        

        const position = mountingHole.mountingHolePosition ;

        if (standOffGeoToReturn !== undefined){
            standOffGeoToReturn = union(
                translate([-position.x /* + sizeBuffer */, position.z /* + sizeBuffer */, -zSize/4], moduleStandOffGeo),
                standOffGeoToReturn
            ) 
        } else {
            standOffGeoToReturn = translate([-position.x /* + sizeBuffer */, position.z /* + sizeBuffer */, -zSize/4], moduleStandOffGeo)
        }  
    })

    return standOffGeoToReturn;
}

export function getIntersectingObjects(enclosureLid, scene){
    
}

export function downloadSTLEnclosure(enclosureDimensions, scene?){


    const jszip = new JSZip();
    const enclosureSTLs = jszip.folder("enclosure stls");


   
    myScene = scene;

    const plasticStandOffs = true;

    const enclosureBlobs = getSTLBlob(enclosureDimensions, scene);

    for (const lidOrBase in enclosureBlobs)
    {
        if (lidOrBase === 'lid'){
            enclosureSTLs.file('lid.stl', enclosureBlobs[lidOrBase]);
        } else {
            enclosureSTLs.file('base.stl', enclosureBlobs[lidOrBase]);
        }
    }

    jszip.generateAsync({type: "blob"}).then(function(content){
        downloadBlob(content, 'enclosureStls.zip')    
    })

    
}

export function getSTLBlob(enclosureDimensions, scene?)
{

    const myEnclosure = generate(enclosureDimensions, scene);
 

    const rawLidData = stlSerializer.serialize({binary: true}, myEnclosure.lid)
    const rawBaseData = stlSerializer.serialize({binary: true}, myEnclosure.base)

    //in browser (with browserify etc)
    const lidBlob = new Blob(rawLidData);
    const baseBlob = new Blob(rawBaseData);
    
    return {
        lid: lidBlob, 
        base: baseBlob
    };
}


export function downloadBlob(blob, name = 'file.txt') {


    // For other browsers:
    // Create a link pointing to the ObjectURL containing the blob.
    const data = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = data;
    link.download = name;

    // this is necessary as link.click() does not work on the latest firefox
    link.dispatchEvent(
      new MouseEvent('click', { 
        bubbles: true, 
        cancelable: true, 
        view: window 
      })
    );

    setTimeout(() => {
      // For Firefox it is necessary to delay revoking the ObjectURL
      window.URL.revokeObjectURL(data);
      link.remove();
    }, 100);
}


const sizeBuffer = 30


export const generate = (enclosureDimensions?, scene?) =>
{
    
    xSize = enclosureDimensions.width + sizeBuffer;
    ySize = enclosureDimensions.height + sizeBuffer;
    zSize = enclosureDimensions.depth; //+ sizeBuffer;
    
   // return mounts(xSize, ySize)
    return {
        lid: rotateX(degToRad(0), union(
            translate([0, -ySize*1.1, 0], rotateX(degToRad(180), enclosureTop(scene))),
           // enclosureBottom(scene), 
            )), 
        base: rotateX(degToRad(0), union(
           // translate([0, -ySize*1.1, 0], rotateX(degToRad(180), enclosureTop(scene))),
            enclosureBottom(scene), 
            ))
    }
    
}

const mounts = (x, y) => {
    return union(
            standOff(x/2, y/2),
            standOff(x/2, -y/2),
            standOff(-x/2, y/2),
            standOff(-x/2, -y/2),
        );
}; 

const standOff = (x,y, d?) => 
{

    const standOffRadius = d ? d : 2;

    return translate([x,y,-(zSize/4)], subtract(
         cylinder({radius: standOffRadius, height: standOffHeight}),
        
        cylinder({radius: 1.3, height: standOffHeight+(zSize/10)})
        ));
        
}

const enclosureShape = () => 
{
  return roundedCuboid({size: [xSize, ySize, zSize], roundRadius: 5})
}


const enclosureBottom = (scene): Geom3 => {
   // let e = enclosure();
    const cutFraction = 0.25
    const chopper = 
        translate(
            [-xSize, -ySize, zSize*cutFraction]
        , roundedCuboid({size: [xSize*2, ySize*2, zSize*2], center: [(xSize*2)/2, (ySize*2)/2, (zSize*2)/2], roundRadius:5}));
    const outer =  subtract(
        enclosure(), 
        chopper
        );

   const standOffs = moduleStandOffs(scene)

    const inner = subtract(
        enclosure(0.95), 
        translate([0,0,3], chopper)
        );

    return union(
        outer,
        inner,
        standOffs
        );
}


const enclosure = (wallThickness?): Geom3 => {
 wallThickness = wallThickness || 0.9;
  const e = enclosureShape(); 
  
  const cavity = scale([wallThickness, wallThickness, wallThickness], e);
  
  return subtract(
      e, 
      cavity
      );
}

// top is 
const enclosureTop = (scene): Geom3 => {
    const enclosureTop = subtract(
        enclosure(), 
        enclosureBottom(scene));
        return addComponentApertures(myScene, enclosureTop);
}


const addComponentApertures = (scene, enclosureTop): Geom3 => {
    const componentLocations = [];
    
    scene.traverse(obj => {
       
       if (obj.userData.isModule){

            const moduleName = obj.userData.name;
            

           const position = obj.parent.position;
           const rotation = obj.rotation;

           componentLocations.push(
                {
                    position: JSON.parse(JSON.stringify(position)),
                    rotation: JSON.parse(JSON.stringify(rotation)),
                    moduleName: moduleName
                }   
           )
       }
    })

    let geomToReturn = enclosureTop;

    componentLocations.forEach(component => {

        if (deserialiseSTL(component.moduleName))
        geomToReturn = subtract(
            geomToReturn,
            translate([-component.position.x,component.position.z,15], rotate([ component.rotation._x, component.rotation._z, component.rotation._y], scale([1000,1000,1000], deserialiseSTL(component.moduleName))))
            )
    })

    return geomToReturn;
}

