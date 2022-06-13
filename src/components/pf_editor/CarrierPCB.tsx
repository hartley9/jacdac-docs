import React, { useRef } from "react"

// Component representing instance of a carrier pcb, upon which module can be mounted
export default function CarrierPCB(props: {
    height: number
    width: number
    rotation: number[]
    position: number[]
    color: string
}) {
    const { height, color, width, position, rotation } = props

    const carrierPCB = useRef()

    return (
        <group name={"carrierPCB"}>
            <mesh ref={carrierPCB} position={position} rotation={rotation}>
                <boxBufferGeometry args={[width, height, 2]} />
                <meshStandardMaterial color={color} emissiveIntensity={0} />
            </mesh>
        </group>
    )
}
