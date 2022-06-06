/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef();

  const stlPath = '/models/jacdac_button.stl'
  
  const { nodes, materials } = useGLTF('/models/jacdac_button.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={1000}>

      <group name="JD_PWR"  position={[-0.010096, 0, -0.015102]}>

      
      </group>
      <group name="JD_DATA"  position={[0.010096, 0, -0.015102]}>

      </group>
      <group name="JD_GND1" position={[0.010096, 0, 0.015102]}></group>
      <group name="JD_GND2" position={[-0.010096, 0, 0.015102]}></group>

      <mesh name="jacdac_button" geometry={nodes['jacdac_button'].geometry} material={materials.mat_15} userData={{ name: 'jacdac_button' }}>
        <group name="11" position={[0.007019937, 0.00165, -0.0098728016]} rotation={[-Math.PI, 0, -Math.PI]} userData={{ name: '11' }}>
          <group name="=>0119" userData={{ name: '=>[0:1:1:9]' }}>
            <mesh name="SOLID006" geometry={nodes.SOLID006.geometry} material={materials.mat_0} />
            <mesh name="SOLID006_1" geometry={nodes.SOLID006_1.geometry} material={materials.mat_6} />
          </group>
        </group>
        <group name="12" position={[0.0080242306, 0.00165, 0.0079427958]} userData={{ name: '12' }}>
          <group name="=>0115001" userData={{ name: '=>[0:1:1:5].001' }}>
            <mesh name="SOLID007" geometry={nodes.SOLID007.geometry} material={materials.mat_2} />
            <mesh name="SOLID007_1" geometry={nodes.SOLID007_1.geometry} material={materials.mat_3} />
          </group>
        </group>
        <group name="14" position={[0.0089999288, 0.00165, -0.0088668019]} rotation={[-Math.PI, 0, -Math.PI]} userData={{ name: '14' }}>
          <group name="=>01111" userData={{ name: '=>[0:1:1:11]' }}>
            <mesh name="SOLID008" geometry={nodes.SOLID008.geometry} material={materials.mat_0} />
            <mesh name="SOLID008_1" geometry={nodes.SOLID008_1.geometry} material={materials.mat_7} />
            <mesh name="SOLID008_2" geometry={nodes.SOLID008_2.geometry} material={materials.mat_8} />
          </group>
        </group>
        <group name="15" position={[0.0069999397, 0.00165, -0.0088568032]} rotation={[-Math.PI, 0, -Math.PI]} userData={{ name: '15' }}>
          <group name="=>0113003" userData={{ name: '=>[0:1:1:3].003' }}>
            <mesh name="SOLID009" geometry={nodes.SOLID009.geometry} material={materials.mat_0} />
            <mesh name="SOLID009_1" geometry={nodes.SOLID009_1.geometry} material={materials.mat_1} />
          </group>
        </group>
        <group name="16" position={[0.0030242354, 0.00165, 0.0112048015]} userData={{ name: '16' }}>
          <group name="=>0117002" userData={{ name: '=>[0:1:1:7].002' }}>
            <mesh name="SOLID010" geometry={nodes.SOLID010.geometry} material={materials.mat_4} />
            <mesh name="SOLID010_1" geometry={nodes.SOLID010_1.geometry} material={materials.mat_5} />
          </group>
        </group>
        <group name="17" position={[-0.0029757619, 0.00165, 0.0112048015]} rotation={[-Math.PI, 0, -Math.PI]} userData={{ name: '17' }}>
          <group name="=>0117003" userData={{ name: '=>[0:1:1:7].003' }}>
            <mesh name="SOLID011" geometry={nodes.SOLID011.geometry} material={materials.mat_4} />
            <mesh name="SOLID011_1" geometry={nodes.SOLID011_1.geometry} material={materials.mat_5} />
          </group>
        </group>
        <group name="18" position={[0.0000242293, 0.00165, 0.0096547976]} userData={{ name: '18' }}>
          <group name="=>01111001" userData={{ name: '=>[0:1:1:11].001' }}>
            <mesh name="SOLID012" geometry={nodes.SOLID012.geometry} material={materials.mat_0} />
            <mesh name="SOLID012_1" geometry={nodes.SOLID012_1.geometry} material={materials.mat_7} />
            <mesh name="SOLID012_2" geometry={nodes.SOLID012_2.geometry} material={materials.mat_8} />
          </group>
        </group>
        <group name="19" position={[0.0047798306, 0.00165, 0.0055698007]} rotation={[0, -1.5705346837, 0]} userData={{ name: '19' }}>
          <group name="=>01111002" userData={{ name: '=>[0:1:1:11].002' }}>
            <mesh name="SOLID013" geometry={nodes.SOLID013.geometry} material={materials.mat_0} />
            <mesh name="SOLID013_1" geometry={nodes.SOLID013_1.geometry} material={materials.mat_7} />
            <mesh name="SOLID013_2" geometry={nodes.SOLID013_2.geometry} material={materials.mat_8} />
          </group>
        </group>
        <group name="2" position={[0.0089982301, 0.00165, 0.0053859949]} rotation={[-Math.PI, 0, -Math.PI]} userData={{ name: '2' }}>
          <group name="=>0113" userData={{ name: '=>[0:1:1:3]' }}>
            <mesh name="SOLID" geometry={nodes.SOLID.geometry} material={materials.mat_0} />
            <mesh name="SOLID_1" geometry={nodes.SOLID_1.geometry} material={materials.mat_1} />
          </group>
        </group>
        <group name="20" position={[-0.00582017, 0.00165, 0.0047547966]} rotation={[-Math.PI, 0, -Math.PI]} userData={{ name: '20' }}>
          <group name="=>01111003" userData={{ name: '=>[0:1:1:11].003' }}>
            <mesh name="SOLID014" geometry={nodes.SOLID014.geometry} material={materials.mat_0} />
            <mesh name="SOLID014_1" geometry={nodes.SOLID014_1.geometry} material={materials.mat_7} />
            <mesh name="SOLID014_2" geometry={nodes.SOLID014_2.geometry} material={materials.mat_8} />
          </group>
        </group>
        <group name="22" position={[0.0000442266, 0.00165, -0.0112048015]} userData={{ name: '22' }}>
          <group name="=>01113" userData={{ name: '=>[0:1:1:13]' }}>
            <mesh name="SOLID015" geometry={nodes.SOLID015.geometry} material={materials.mat_7} />
            <mesh name="SOLID015_1" geometry={nodes.SOLID015_1.geometry} material={materials.mat_9} />
            <mesh name="SOLID015_2" geometry={nodes.SOLID015_2.geometry} material={materials.mat_10} />
          </group>
        </group>
        <group name="23" position={[0.0070342273, 0.00165, 0.0053859949]} rotation={[-Math.PI, 0, -Math.PI]} userData={{ name: '23' }}>
          <group name="=>01111004" userData={{ name: '=>[0:1:1:11].004' }}>
            <mesh name="SOLID016" geometry={nodes.SOLID016.geometry} material={materials.mat_0} />
            <mesh name="SOLID016_1" geometry={nodes.SOLID016_1.geometry} material={materials.mat_7} />
            <mesh name="SOLID016_2" geometry={nodes.SOLID016_2.geometry} material={materials.mat_8} />
          </group>
        </group>
        <group name="25" position={[0.0000242293, 0.00165, 0.0056021959]} rotation={[0, 1.5705346837, 0]} userData={{ name: '25' }}>
          <group name="=>01115" userData={{ name: '=>[0:1:1:15]' }}>
            <mesh name="SOLID017" geometry={nodes.SOLID017.geometry} material={materials.mat_11} />
            <mesh name="SOLID017_1" geometry={nodes.SOLID017_1.geometry} material={materials.mat_12} />
            <mesh name="SOLID017_2" geometry={nodes.SOLID017_2.geometry} material={materials.mat_13} />
          </group>
        </group>
        <group name="26" position={[0.0058662295, 0.00165, 0.0000142008]} userData={{ name: '26' }}>
          <group name="=>01115001" userData={{ name: '=>[0:1:1:15].001' }}>
            <mesh name="SOLID018" geometry={nodes.SOLID018.geometry} material={materials.mat_11} />
            <mesh name="SOLID018_1" geometry={nodes.SOLID018_1.geometry} material={materials.mat_12} />
            <mesh name="SOLID018_2" geometry={nodes.SOLID018_2.geometry} material={materials.mat_13} />
          </group>
        </group>
        <group name="28" position={[-0.0094929636, 0.00165, 0.0079719946]} rotation={[0, -1.5705346837, 0]} userData={{ name: '28' }}>
          <group name="=>01117" userData={{ name: '=>[0:1:1:17]' }}>
            <mesh name="SOLID019" geometry={nodes.SOLID019.geometry} material={materials.mat_3} />
            <mesh name="SOLID019_1" geometry={nodes.SOLID019_1.geometry} material={materials.mat_2} />
            <mesh name="SOLID019_2" geometry={nodes.SOLID019_2.geometry} material={materials.mat_14} />
          </group>
        </group>
        <group name="29" position={[0.0000242293, 0.00165, -0.0095000044]} userData={{ name: '29' }}>
          <group name="=>01111005" userData={{ name: '=>[0:1:1:11].005' }}>
            <mesh name="SOLID020" geometry={nodes.SOLID020.geometry} material={materials.mat_0} />
            <mesh name="SOLID020_1" geometry={nodes.SOLID020_1.geometry} material={materials.mat_7} />
            <mesh name="SOLID020_2" geometry={nodes.SOLID020_2.geometry} material={materials.mat_8} />
          </group>
        </group>
        <group name="3" position={[0.0070142299, 0.00165, 0.0101673976]} userData={{ name: '3' }}>
          <group name="=>0113001" userData={{ name: '=>[0:1:1:3].001' }}>
            <mesh name="SOLID001" geometry={nodes.SOLID001.geometry} material={materials.mat_0} />
            <mesh name="SOLID001_1" geometry={nodes.SOLID001_1.geometry} material={materials.mat_1} />
          </group>
        </group>
        <group name="30" position={[0.0000242293, 0.00165, -0.0055738017]} rotation={[0, -1.5705346837, 0]} userData={{ name: '30' }}>
          <group name="=>01115002" userData={{ name: '=>[0:1:1:15].002' }}>
            <mesh name="SOLID021" geometry={nodes.SOLID021.geometry} material={materials.mat_11} />
            <mesh name="SOLID021_1" geometry={nodes.SOLID021_1.geometry} material={materials.mat_12} />
            <mesh name="SOLID021_2" geometry={nodes.SOLID021_2.geometry} material={materials.mat_13} />
          </group>
        </group>
        <group name="31" position={[-0.005817771, 0.00165, 0.0000142008]} userData={{ name: '31' }}>
          <group name="=>01115003" userData={{ name: '=>[0:1:1:15].003' }}>
            <mesh name="SOLID022" geometry={nodes.SOLID022.geometry} material={materials.mat_11} />
            <mesh name="SOLID022_1" geometry={nodes.SOLID022_1.geometry} material={materials.mat_12} />
            <mesh name="SOLID022_2" geometry={nodes.SOLID022_2.geometry} material={materials.mat_13} />
          </group>
        </group>
        <group name="32" position={[0.0000042319, 0.00165, 0.0112048015]} rotation={[-Math.PI, 0, -Math.PI]} userData={{ name: '32' }}>
          <group name="=>01113001" userData={{ name: '=>[0:1:1:13].001' }}>
            <mesh name="SOLID023" geometry={nodes.SOLID023.geometry} material={materials.mat_7} />
            <mesh name="SOLID023_1" geometry={nodes.SOLID023_1.geometry} material={materials.mat_9} />
            <mesh name="SOLID023_2" geometry={nodes.SOLID023_2.geometry} material={materials.mat_10} />
          </group>
        </group>
        <group name="33" position={[-0.0047431737, 0.00165, -0.0054792017]} rotation={[0, 1.5705346837, 0]} userData={{ name: '33' }}>
          <group name="=>01111006" userData={{ name: '=>[0:1:1:11].006' }}>
            <mesh name="SOLID024" geometry={nodes.SOLID024.geometry} material={materials.mat_0} />
            <mesh name="SOLID024_1" geometry={nodes.SOLID024_1.geometry} material={materials.mat_7} />
            <mesh name="SOLID024_2" geometry={nodes.SOLID024_2.geometry} material={materials.mat_8} />
          </group>
        </group>
        <group name="4" position={[-0.0062417686, 0.00165, 0.006244801]} rotation={[0, -1.5705346837, 0]} userData={{ name: '4' }}>
          <group name="=>0113002" userData={{ name: '=>[0:1:1:3].002' }}>
            <mesh name="SOLID002" geometry={nodes.SOLID002.geometry} material={materials.mat_0} />
            <mesh name="SOLID002_1" geometry={nodes.SOLID002_1.geometry} material={materials.mat_1} />
          </group>
        </group>
        <group name="6" position={[0.0080099255, 0.00165, -0.0065708011]} userData={{ name: '6' }}>
          <group name="=>0115" userData={{ name: '=>[0:1:1:5]' }}>
            <mesh name="SOLID003" geometry={nodes.SOLID003.geometry} material={materials.mat_2} />
            <mesh name="SOLID003_1" geometry={nodes.SOLID003_1.geometry} material={materials.mat_3} />
          </group>
        </group>
        <group name="8" position={[0.0030242354, 0.00165, -0.0112048015]} userData={{ name: '8' }}>
          <group name="=>0117" userData={{ name: '=>[0:1:1:7]' }}>
            <mesh name="SOLID004" geometry={nodes.SOLID004.geometry} material={materials.mat_4} />
            <mesh name="SOLID004_1" geometry={nodes.SOLID004_1.geometry} material={materials.mat_5} />
          </group>
        </group>
        <group name="9" position={[-0.0029757619, 0.00165, -0.0112048015]} rotation={[-Math.PI, 0, -Math.PI]} userData={{ name: '9' }}>
          <group name="=>0117001" userData={{ name: '=>[0:1:1:7].001' }}>
            <mesh name="SOLID005" geometry={nodes.SOLID005.geometry} material={materials.mat_4} />
            <mesh name="SOLID005_1" geometry={nodes.SOLID005_1.geometry} material={materials.mat_5} />
          </group>
        </group>
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/jacdac_button.gltf')
