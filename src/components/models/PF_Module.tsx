import React, { useState, useRef, Suspense } from "react"
import { useHelper } from "@react-three/drei"

import { useDrag } from "@use-gesture/react"
import { animated, useSpring } from "@react-spring/three"

import * as THREE from "three"

import { roundBy } from "../pf_editor/editFunctions"
import Jacdac_adapter from "./Jacdac_adapter"
import Jacdac_RGBLED from "./Jacdac_RGBLED"
import Jacdac_rotary_new from "./Jacdac_rotary_new"
import Jacdac_button from "./Jacdac_button"

import Jacdac_mech_keyswitch from "./Jacdac_mech_keyswitch"
import Jacdac_slider from "./Jacdac_slider"

import Jacdac_rgbledring from "./Jacdac_rgbledring"
import Jacdac_slider_new from "./Jacdac_slider_new"

import Jacdac_magnet from "./Jacdac_magnet"
import Jacdac_light from "./Jacdac_light"

export default function PF_Module(props: {
    id: string
    name: string
    moduleName: string
    setIsDragging
    setLastClicked
    lastClicked: THREE.Object3D
    floorPlane: THREE.Vector3
    position?: number[]
    selected?: boolean
}) {
    const {
        name,
        moduleName,
        setIsDragging,
        setLastClicked,
        floorPlane,
        position,
        selected,
    } = props

    const [sel, setSel] = useState(selected ? selected : false)

    const dragMesh = useRef()

    const objGroup = useRef()

    // BOUNDING BOX FOR MODULE
    const helper = useHelper(sel && objGroup, THREE.BoxHelper, "purple")

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [boundingBox, setBoundingBox] = useState(null)

    const [pos, setPos] = useState(position ? position : [0, 1, 0])

    const planeIntersectPoint = new THREE.Vector3()

    const [spring, api] = useSpring(() => ({
        // position: [0, 0, 0],
        position: [Math.round(pos[0]), Math.round(pos[1]), Math.round(pos[2])],
        scale: 1,
        rotation: [0, 0, 0],
        config: { friction: 10 },
    }))

    const bind = useDrag(
        ({ active, movement: timeStamp, event }) => {
            if (active) {
                event.ray.intersectPlane(floorPlane, planeIntersectPoint)
                setPos([roundBy(planeIntersectPoint.x), 8, roundBy(planeIntersectPoint.z)])
            }

            setIsDragging(active);
            setSel(active);

            // need to fix this
            setLastClicked(objGroup);

            // if a useHelper has been defined, then compute bounding box on move
            if (helper.current) {
                helper.current.geometry.computeBoundingBox();

                if (helper.current.geometry.boundingBox) {
                    setBoundingBox(helper.current.geometry.bouningBox);
                }
            }

            api.start({
                position: pos,
            })
            return timeStamp;
        },
        { delay: false }
    )

    const whichModule = moduleName => {
        switch (moduleName.toLowerCase()) {
            case "microbit adapter":
                return <Jacdac_adapter />
            case "rotary":
                return <Jacdac_rotary_new />
            case "rgb led":
                return <Jacdac_RGBLED />
            case "button":
                return <Jacdac_button />
            case "rgb led ring":
                return <Jacdac_rgbledring />
            case "key switch":
                return <Jacdac_mech_keyswitch />
            case "slider":
                return <Jacdac_slider_new />
            case "light sensor":
                return <Jacdac_light />
            case "magnet sensor":
                return <Jacdac_magnet />
        }
    }

    return (
        <>
            <Suspense fallback={null}>
                <animated.mesh
                    name={name}
                    ref={dragMesh}
                    userData={{ routeMe: true }}
                    {...spring}
                    {...bind()}
                    castShadow
                >
                    <group
                        name={name}
                        ref={objGroup}
                        userData={{ name: moduleName, isModule: true }}
                        rotation={[0, -1.5708, 0]}
                    >
                        {whichModule(moduleName)}
                    </group>
                </animated.mesh>
            </Suspense>
        </>
    )
}
