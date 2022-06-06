import React, { useState, useRef} from "react"

import STLExporter from "three"
import { useHelper } from "@react-three/drei";

import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/three";

import * as THREE from "three";

import Jacdac_RGBLED from './Jacdac_RGBLED'
import Jacdac_RotaryModule from './Jacdac_RotaryModule'
import Jacdac_button from './Jacdac_button'
import Jacdac_rgbledring from './Jacdac_rgbledring'
import Jacdac_key_switch from './Jacdac_key_switch'
import Jacdac_slider from './Jacdac_slider'


export default function PF_Module(props: {id: string, name: string, moduleName: string, setIsDragging, setLastClicked, lastClicked: THREE.Object3D, floorPlane: THREE.Vector3, position?: number[], selected?: boolean  }) {
    const { name, moduleName, setIsDragging, setLastClicked, floorPlane, position, selected } = props

    const [sel, setSel] = useState(selected ? selected : false)

    const dragMesh = useRef()

    const objGroup = useRef();

    // BOUNDING BOX FOR MODULE
    const helper = useHelper( sel && objGroup, THREE.BoxHelper, "purple");

    const  [setBoundingBox] = useState(null);
      
    const [pos, setPos] = useState(position? position : [0, 1, 0]);
    
    const planeIntersectPoint = new THREE.Vector3();

    const [spring, api] = useSpring(() => ({
        // position: [0, 0, 0],
        position: [Math.round(pos[0]), Math.round(pos[1]), Math.round(pos[2])],
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
          
          // if a useHelper has been defined, then compute bounding box on move
          if (helper.current){
            helper.current.geometry.computeBoundingBox();
            
            if (helper.current.geometry.boundingBox){
              setBoundingBox(helper.current.geometry.bouningBox)
            }
          }

          api.start({
            position: pos,
          });
          return timeStamp;
        },
        { delay: false }
      );

      
      
      const whichModule = (moduleName) => {
        switch(moduleName){
          case 'Rotary':
            return <Jacdac_RotaryModule/>
          case 'RGB LED':
            return <Jacdac_RGBLED />
          case 'Button':
            return <Jacdac_button />
          case 'RGB LED Ring':
            return <Jacdac_rgbledring />
          case 'Key Switch': 
            return <Jacdac_key_switch />
          case 'Slider':
            return <Jacdac_slider />
        }
      }


      //const exporter = new STLExporter();

      
    
    return (
          <>
            <animated.mesh name={name} ref={dragMesh} userData={{routeMe: true}} {...spring} {...bind()} castShadow>
                  <group name={name} ref={objGroup} userData={{name: moduleName, isModule: true}}>
                        {whichModule(moduleName)}
                  </group>                  
              </animated.mesh>
          </>
        
    )
}
