import React from "react"
import { useLoader } from "@react-three/fiber"
import { STLLoader } from "three/examples/jsm/loaders/STLLoader"
import Suspense from "../ui/Suspense"

export default function STLModel(props: { url: string; color?: string }) {
    const { url, color } = props
    const obj = useLoader(STLLoader, url)
    return (
        <Suspense>
            <mesh>
                <primitive object={obj} attach="geometry" />
                <meshStandardMaterial color={color || "green"} />
            </mesh>
        </Suspense>
    )
}
