import React, { Suspense, useEffect, useRef, useState } from "react"

import {CSG} from "three-csg-ts"
import * as THREE from "three"
import { useThree } from "@react-three/fiber"



// Component representing instance of a carrier pcb, upon which module can be mounted
export default function CarrierPCB(props: {
    height: number
    width: number
    rotation: number[]
    position: number[]
    color: string
}) {

    
    const { height, width, rotation, position, color } = props


    position ? position :  [0,0,0]

    const carrierPCB = useRef();
    

    const outer = new THREE.Mesh( 
        new THREE.CylinderGeometry( 2.5, 2.5, 2.1, 62 ),
        new THREE.MeshBasicMaterial( {color: 0xa26b31} )).rotateX((Math.PI / 2) * 2);
    const inner = new THREE.Mesh( 
        new THREE.CylinderGeometry( 1.5, 1.5, 2.1, 62 ),
        new THREE.MeshBasicMaterial( {color: 0xa26b31} )).rotateX((Math.PI / 2) * 2)
    
    outer.updateMatrix();
    inner.updateMatrix();

    const offsetAmt = 2.5;
    const testHoleCoordinates = [
        {x: -(height/2)+offsetAmt, y: 0, z: -(width/2)+offsetAmt},
        {x: -(height/2)+offsetAmt, y: 0, z: (width/2)-offsetAmt},
        {x: (height/2)-offsetAmt, y: 0, z: -(width/2)+offsetAmt},
        {x: (height/2)-offsetAmt, y: 0, z: (width/2)-offsetAmt},
        //{x: -(height/2)+10, y: 0, z: (width/2)+10},
    ]


    const standOffGeos = []
    const ringMeshes = [];

    
    testHoleCoordinates.forEach(coord => {
        const drillHole = new THREE.Mesh( 
            new THREE.CylinderGeometry( 1.5, 1.5, 100, 62 ),
            new THREE.MeshBasicMaterial( {color: 0xffff00} )).rotateX((Math.PI / 2) * 2);
      
        const viaRingMesh = CSG.subtract(outer, inner);
          
        ringMeshes.push( <primitive position={[coord.x, position[1], coord.z]} key={Math.random()} object={viaRingMesh}></primitive>)
        
        drillHole.position.set(coord.x, position[1], coord.z);

        standOffGeos.push(drillHole)
        drillHole.updateMatrix();
    })

    const carrierPCBMesh = new THREE.Mesh( 
        new THREE.BoxBufferGeometry( height, width, 2),
        new THREE.MeshStandardMaterial( {color: 0x013220} )  
        ).rotateX((Math.PI / 2)*3)


    //carrierPCBMesh.rotateX((Math.PI / 2) * 3)
    
    carrierPCBMesh.updateMatrix();
    
    // generate carrier pcb after subtractions
    let meshToReturn = carrierPCBMesh;

    standOffGeos.forEach(standOff => {
        meshToReturn = CSG.subtract(meshToReturn, standOff);
    })

    
    


    return (
        <Suspense>
        <group name={"carrierPCB"} userData={{height: height, width: width}}>
            <primitive ref={carrierPCB} object={meshToReturn} position={position}></primitive>
            
            {ringMeshes}
    
        </group>
        </Suspense>
    )
}
