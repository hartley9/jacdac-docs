import {primitives, transforms, booleans, utils} from '@jscad/modeling';
import { Geom3 } from '@jscad/modeling/src/geometries/types';
import stlDeserializer from "@jscad/stl-deserializer"
import stlSerializer from "@jscad/stl-serializer"

const BinPacking2D = require('binpackingjs').BP2D;
const { Bin, Box, Packer } = BinPacking2D;

const bin_1 = new Bin(100, 50);
const bin_2 = new Bin(50, 50);
const boxes = [
  new Box(15, 10), // Should be added last (smaller)
  new Box(50, 45), // Fits in bin_2 better than in bin_1
  new Box(40, 40),
  new Box(200, 200), // Too large to fit
];
const packer = new Packer([bin_1, bin_2]);
const packed_boxes = packer.pack(boxes);

//const { booleans, primitives, transforms, utils } = jscad;
const { union, subtract } = booleans;
const { cylinder, roundedCuboid } = primitives;
const { rotate, rotateX, translate, scale } = transforms;
const { degToRad } = utils;

import {buttonSTL} from '../models/modelExtrusions/button.js'
import {sliderSTL} from '../models/modelExtrusions/slider.js'
import { collectMountingHoleLocations } from './editFunctions';


let xSize = 60;
let ySize = 40;
let zSize = 20;

let myScene;

const path = '/models/test.txt'
const standOffHeight = 4;

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
            subtract(
                cylinder({radius: 4, height: zSize/2}),
                translate([0,0,3], cylinder({radius: 3, height: zSize/2}))
            )
        )


    let standOffGeoToReturn = undefined; 
    const models: Geom3[] = [];

    mountingHoleData.forEach(mountingHole => {
        

        const position = mountingHole.mountingHolePosition;

       // models.push( translate([position.x, position.z, 0], cylinder({radius: 3, height: 10})) );

        if (standOffGeoToReturn !== undefined){
            standOffGeoToReturn = union(
                translate([position.x, position.z, -zSize/4], moduleStandOffGeo),
                standOffGeoToReturn
            ) 
        } else {
            standOffGeoToReturn = translate([position.x, position.z, -zSize/4], moduleStandOffGeo)
        }  
    })



    return standOffGeoToReturn;
}

export function getIntersectingObjects(enclosureLid, scene){
    
}

export function downloadSTLEnclosure(enclosureDimensions, scene?){

    myScene = scene;

    const plasticStandOffs = true;

    const enclosureBlob = getSTLBlob(enclosureDimensions, scene);

    downloadBlob(enclosureBlob, 'enclosure.stl')
}

export function getSTLBlob(enclosureDimensions, scene?)
{

    const myEnclosure = generate(enclosureDimensions, scene);
 
    const rawData = stlSerializer.serialize({binary: true}, myEnclosure)

    //in browser (with browserify etc)
    const blob = new Blob(rawData);
    
    return blob;
}


function downloadBlob(blob, name = 'file.txt') {
/*     if (
      window.navigator && 
      window.navigator.msSaveOrOpenBlob
    ) return window.navigator.msSaveOrOpenBlob(blob); */

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



export const generate = (enclosureDimensions?, scene?) =>
{

    
    xSize = enclosureDimensions.depth + 15;
    ySize = enclosureDimensions.height + 15;
    zSize = enclosureDimensions.width + 15;

    

    
   // return mounts(xSize, ySize)
    return rotateX(degToRad(0), union(
        translate([0, -ySize*1.1, 0], rotateX(degToRad(180), enclosureTop(scene))),
        enclosureBottom(scene), 
        ));
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

    const standOffRadius = d ? d : 3;

    return translate([x,y,-(zSize/4)], subtract(
         cylinder({radius: standOffRadius, height: standOffHeight}),
        
        cylinder({radius: 1.3, height: standOffHeight+(zSize/10)})
        ));
        
}

const enclosureShape = () => 
{
  return roundedCuboid({size: [xSize, ySize, zSize], roundRadius: 5})
}


const enclosureBottom = (scene) => {
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

    //const module = scale([1000,1000,1000], deserialiseSTL());
        
   // outer = union(outer, translate([0,30,0], scale([1000,1000,1000], deserialiseSTL())))

   //outer = subtract(outer, module)

   const standOffs = moduleStandOffs(scene)

    const inner = subtract(
        enclosure(0.95), 
        translate([0,0,3], chopper)
        );
    return union(
        outer,
        inner,
     //   translate([0,0,-standOffHeight], mounts(xSize-12, ySize-12)),
        standOffs
        
        )
        
    

}



const enclosure = (wallThickness?) => {
 wallThickness = wallThickness || 0.9;
  const e = enclosureShape(); 
  
  const cavity = scale([wallThickness, wallThickness, wallThickness], e);

   
        
        //translate([0,30,0], scale([1000,1000,1000], deserialiseSTL())))
  
  return subtract(
      e, 
      cavity
      );
}

// top is 
const enclosureTop = (scene) => {
    const enclosureTop = subtract(
        enclosure(), 
        enclosureBottom(scene));

        
        return addComponentApertures(myScene, enclosureTop);
    
    /* return subtract(
        enclosureTop,
        translate([0,0,15], scale([1000,1000,1000], deserialiseSTL()))
    ); */
}


const addComponentApertures = (scene, enclosureTop) => {
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

