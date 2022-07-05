import React from "react"
import { useLoader } from "@react-three/fiber"
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader"
import Suspense from "../ui/Suspense"

export default function SVGModel(props: { url: string; color?: string }) {
    const { url, color } = props
    const obj = useLoader(SVGLoader, url)
    return (
        <Suspense>
            <mesh>
                <primitive object={obj} attach="geometry" />
                <meshStandardMaterial color={color || "green"} />
            </mesh>
        </Suspense>
    )
}
