import React, { useState, useRef} from "react"

import { useHelper } from "@react-three/drei";

import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/three";

import * as THREE from "three";

import Jacdac_RGBLED from './Jacdac_RGBLED'
import Jacdac_RotaryModule from './Jacdac_RotaryModule'


export default function PF_Module(props: {id: string, name: string, moduleName: string, setIsDragging, setLastClicked, lastClicked: THREE.Object3D, floorPlane: THREE.Vector3, position?: number[], selected?: boolean  }) {
    const { name, moduleName, setIsDragging, setLastClicked, floorPlane, position, selected } = props

    const dragMesh = useRef()

    const objGroup = useRef()

    const [pos, setPos] = useState(position? position : [0, 1, 0]);
    const [sel, setSel] = useState(selected ? selected : false)
    
    const planeIntersectPoint = new THREE.Vector3();

    const [spring, api] = useSpring(() => ({
        // position: [0, 0, 0],
        position: pos,
        scale: 1,
        rotation: [0, 0, 0],
        config: { friction: 10 }
      }));
    
      const bind = useDrag(
        ({ active, movement: /* [x, y] ,*/ timeStamp, event }) => {
          if (active) {
            event.ray.intersectPlane(floorPlane, planeIntersectPoint);
            setPos([planeIntersectPoint.x, 8, planeIntersectPoint.z]);
          }
    
          setIsDragging(active);
          setSel(active)

          // need to fix this
          setLastClicked(objGroup);
    
          api.start({
            position: pos,
          });
          return timeStamp;
        },
        { delay: false }
      );

      useHelper( sel && objGroup, THREE.BoxHelper, "purple")

      const whichModule = (moduleName) => {
        switch(moduleName){
          case 'Rotary':
            return <Jacdac_RotaryModule/>
          case 'RGB LED':
            return <Jacdac_RGBLED />
        }
      }

    
    
    return (
        
          <animated.mesh name={name} ref={dragMesh} userData={{routeMe: true}} {...spring} {...bind()} castShadow>
                <group name={name} ref={objGroup} >
                      {whichModule(moduleName)}
                </group>
            </animated.mesh>
        
    )
}
