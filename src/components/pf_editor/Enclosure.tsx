
import React, { useRef } from "react";

export default function Enclosure(props: {height, width, depth}){
    
    const {height, width, depth} = props;

    const wallThickness = 2;

    const enclosure = useRef();

    return (
        <group ref={enclosure} name={'enclosure'}>
            <mesh position={[0,0,0]}>
                <boxBufferGeometry args={[height, width-wallThickness, depth]} />
                <meshStandardMaterial color={'white'} emissiveIntensity={0} opacity={0.5} transparent={true}/>
            </mesh>


            <mesh position={[0,width/2,0]}>
                <boxBufferGeometry args={[height, 2, depth]} />
                <meshStandardMaterial color={'purple'} emissiveIntensity={0} opacity={0.5} transparent={true}/>
            </mesh>
        </group>
    )


}