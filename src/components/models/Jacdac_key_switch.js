/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/jacdac_key_switch.gltf')
  return (
    <group ref={group} scale={1000} {...props} dispose={null}>

      <group name="JD_PWR"  position={[-0.01506, 0, 0.01000]}></group>
      <group name="JD_DATA"  position={[-0.01506, 0, -0.01000]}></group>
      <group name="JD_GND1" position={[0.01506, 0, -0.01000]}></group>
      <group name="JD_GND2" position={[0.01506, 0, 0.01000]}></group>

      <mesh name="jacdac_key_switch" geometry={nodes['jacdac_key_switch'].geometry} material={materials.mat_15} userData={{ name: 'jacdac_key_switch' }}>
        <group name="11" position={[-0.0085948864, 0.000850004, -0.0080123302]} rotation={[0, -1.5705346837, 0]} userData={{ name: '11' }}>
          <group name="=>0119" userData={{ name: '=>[0:1:1:9]' }}>
            <mesh name="SOLID006" geometry={nodes.SOLID006.geometry} material={materials.mat_0} />
            <mesh name="SOLID006_1" geometry={nodes.SOLID006_1.geometry} material={materials.mat_6} />
          </group>
        </group>
        <group name="12" position={[0.0053125164, 0.000850004, -0.0089923274]} rotation={[0, 1.5705346837, 0]} userData={{ name: '12' }}>
          <group name="=>0115001" userData={{ name: '=>[0:1:1:5].001' }}>
            <mesh name="SOLID007" geometry={nodes.SOLID007.geometry} material={materials.mat_2} />
            <mesh name="SOLID007_1" geometry={nodes.SOLID007_1.geometry} material={materials.mat_3} />
          </group>
        </group>
        <group name="14" position={[-0.0075888792, 0.000850004, -0.0099923294]} rotation={[0, -1.5705346837, 0]} userData={{ name: '14' }}>
          <group name="=>01111" userData={{ name: '=>[0:1:1:11]' }}>
            <mesh name="SOLID008" geometry={nodes.SOLID008.geometry} material={materials.mat_0} />
            <mesh name="SOLID008_1" geometry={nodes.SOLID008_1.geometry} material={materials.mat_7} />
            <mesh name="SOLID008_2" geometry={nodes.SOLID008_2.geometry} material={materials.mat_8} />
          </group>
        </group>
        <group name="15" position={[-0.0075788805, 0.000850004, -0.0079923328]} rotation={[0, -1.5705346837, 0]} userData={{ name: '15' }}>
          <group name="=>0113003" userData={{ name: '=>[0:1:1:3].003' }}>
            <mesh name="SOLID009" geometry={nodes.SOLID009.geometry} material={materials.mat_0} />
            <mesh name="SOLID009_1" geometry={nodes.SOLID009_1.geometry} material={materials.mat_1} />
          </group>
        </group>
        <group name="16" position={[0.011197119, 0.000850004, 0.0029832742]} rotation={[0, 1.5705346837, 0]} userData={{ name: '16' }}>
          <group name="=>0117002" userData={{ name: '=>[0:1:1:7].002' }}>
            <mesh name="SOLID010" geometry={nodes.SOLID010.geometry} material={materials.mat_4} />
            <mesh name="SOLID010_1" geometry={nodes.SOLID010_1.geometry} material={materials.mat_5} />
          </group>
        </group>
        <group name="17" position={[0.011197119, 0.000850004, -0.0030167305]} rotation={[0, -1.5705346837, 0]} userData={{ name: '17' }}>
          <group name="=>0117003" userData={{ name: '=>[0:1:1:7].003' }}>
            <mesh name="SOLID011" geometry={nodes.SOLID011.geometry} material={materials.mat_4} />
            <mesh name="SOLID011_1" geometry={nodes.SOLID011_1.geometry} material={materials.mat_5} />
          </group>
        </group>
        <group name="18" position={[-0.0074228803, 0.000850004, 0.0086376686]} rotation={[0, 1.5705346837, 0]} userData={{ name: '18' }}>
          <group name="=>01111001" userData={{ name: '=>[0:1:1:11].001' }}>
            <mesh name="SOLID012" geometry={nodes.SOLID012.geometry} material={materials.mat_0} />
            <mesh name="SOLID012_1" geometry={nodes.SOLID012_1.geometry} material={materials.mat_7} />
            <mesh name="SOLID012_2" geometry={nodes.SOLID012_2.geometry} material={materials.mat_8} />
          </group>
        </group>
        <group name="19" position={[0.0076121232, 0.000850004, 0.0045976737]} rotation={[0, -1.5705346837, 0]} userData={{ name: '19' }}>
          <group name="=>01111002" userData={{ name: '=>[0:1:1:11].002' }}>
            <mesh name="SOLID013" geometry={nodes.SOLID013.geometry} material={materials.mat_0} />
            <mesh name="SOLID013_1" geometry={nodes.SOLID013_1.geometry} material={materials.mat_7} />
            <mesh name="SOLID013_2" geometry={nodes.SOLID013_2.geometry} material={materials.mat_8} />
          </group>
        </group>
        <group name="2" position={[0.0031425199, 0.000850004, -0.007972328]} rotation={[0, -1.5705346837, 0]} userData={{ name: '2' }}>
          <group name="=>0113" userData={{ name: '=>[0:1:1:3]' }}>
            <mesh name="SOLID" geometry={nodes.SOLID.geometry} material={materials.mat_0} />
            <mesh name="SOLID_1" geometry={nodes.SOLID_1.geometry} material={materials.mat_1} />
          </group>
        </group>
        <group name="21" position={[-0.011212484, 0.000850004, -0.0000367292]} rotation={[0, -1.5705346837, 0]} userData={{ name: '21' }}>
          <group name="=>01113" userData={{ name: '=>[0:1:1:13]' }}>
            <mesh name="SOLID014" geometry={nodes.SOLID014.geometry} material={materials.mat_7} />
            <mesh name="SOLID014_1" geometry={nodes.SOLID014_1.geometry} material={materials.mat_9} />
            <mesh name="SOLID014_2" geometry={nodes.SOLID014_2.geometry} material={materials.mat_10} />
          </group>
        </group>
        <group name="23" position={[-0.0034728805, 0.0063500041, -0.0003167295]} rotation={[Math.PI, 0, 0]} userData={{ name: '23' }}>
          <group name="=>01115" userData={{ name: '=>[0:1:1:15]' }}>
            <mesh name="COMPOUND" geometry={nodes.COMPOUND.geometry} material={materials.mat_11} />
            <mesh name="COMPOUND_1" geometry={nodes.COMPOUND_1.geometry} material={materials.mat_12} />
            <mesh name="COMPOUND_2" geometry={nodes.COMPOUND_2.geometry} material={materials.mat_13} />
          </group>
        </group>
        <group name="24" position={[-0.0084428797, 0.000850004, 0.0086376686]} rotation={[0, 1.5705346837, 0]} userData={{ name: '24' }}>
          <group name="=>01111003" userData={{ name: '=>[0:1:1:11].003' }}>
            <mesh name="SOLID015" geometry={nodes.SOLID015.geometry} material={materials.mat_0} />
            <mesh name="SOLID015_1" geometry={nodes.SOLID015_1.geometry} material={materials.mat_7} />
            <mesh name="SOLID015_2" geometry={nodes.SOLID015_2.geometry} material={materials.mat_8} />
          </group>
        </group>
        <group name="26" position={[0.0069771251, 0.000850004, -0.0000167318]} rotation={[0, 1.5705346837, 0]} userData={{ name: '26' }}>
          <group name="=>01117" userData={{ name: '=>[0:1:1:17]' }}>
            <mesh name="SOLID016" geometry={nodes.SOLID016.geometry} material={materials.mat_3} />
            <mesh name="SOLID016_1" geometry={nodes.SOLID016_1.geometry} material={materials.mat_2} />
            <mesh name="SOLID016_2" geometry={nodes.SOLID016_2.geometry} material={materials.mat_14} />
          </group>
        </group>
        <group name="27" position={[-0.0048628757, 0.000850004, 0.0087276716]} rotation={[0, 1.5705346837, 0]} userData={{ name: '27' }}>
          <group name="=>01111004" userData={{ name: '=>[0:1:1:11].004' }}>
            <mesh name="SOLID017" geometry={nodes.SOLID017.geometry} material={materials.mat_0} />
            <mesh name="SOLID017_1" geometry={nodes.SOLID017_1.geometry} material={materials.mat_7} />
            <mesh name="SOLID017_2" geometry={nodes.SOLID017_2.geometry} material={materials.mat_8} />
          </group>
        </group>
        <group name="28" position={[-0.0094428817, 0.000850004, 0.0086376686]} rotation={[0, 1.5705346837, 0]} userData={{ name: '28' }}>
          <group name="=>0113004" userData={{ name: '=>[0:1:1:3].004' }}>
            <mesh name="SOLID018" geometry={nodes.SOLID018.geometry} material={materials.mat_0} />
            <mesh name="SOLID018_1" geometry={nodes.SOLID018_1.geometry} material={materials.mat_1} />
          </group>
        </group>
        <group name="29" position={[0.011197119, 0.000850004, 0.000003273]} rotation={[0, 1.5705346837, 0]} userData={{ name: '29' }}>
          <group name="=>01113001" userData={{ name: '=>[0:1:1:13].001' }}>
            <mesh name="SOLID019" geometry={nodes.SOLID019.geometry} material={materials.mat_7} />
            <mesh name="SOLID019_1" geometry={nodes.SOLID019_1.geometry} material={materials.mat_9} />
            <mesh name="SOLID019_2" geometry={nodes.SOLID019_2.geometry} material={materials.mat_10} />
          </group>
        </group>
        <group name="3" position={[0.0075371256, 0.000850004, -0.0079823267]} rotation={[0, 1.5705346837, 0]} userData={{ name: '3' }}>
          <group name="=>0113001" userData={{ name: '=>[0:1:1:3].001' }}>
            <mesh name="SOLID001" geometry={nodes.SOLID001.geometry} material={materials.mat_0} />
            <mesh name="SOLID001_1" geometry={nodes.SOLID001_1.geometry} material={materials.mat_1} />
          </group>
        </group>
        <group name="4" position={[0.0050721159, 0.000850004, 0.0045776688]} rotation={[0, -1.5705346837, 0]} userData={{ name: '4' }}>
          <group name="=>0113002" userData={{ name: '=>[0:1:1:3].002' }}>
            <mesh name="SOLID002" geometry={nodes.SOLID002.geometry} material={materials.mat_0} />
            <mesh name="SOLID002_1" geometry={nodes.SOLID002_1.geometry} material={materials.mat_1} />
          </group>
        </group>
        <group name="6" position={[-0.0052928785, 0.000850004, -0.0090023261]} rotation={[0, 1.5705346837, 0]} userData={{ name: '6' }}>
          <group name="=>0115" userData={{ name: '=>[0:1:1:5]' }}>
            <mesh name="SOLID003" geometry={nodes.SOLID003.geometry} material={materials.mat_2} />
            <mesh name="SOLID003_1" geometry={nodes.SOLID003_1.geometry} material={materials.mat_3} />
          </group>
        </group>
        <group name="8" position={[-0.011212484, 0.000850004, 0.0029832742]} rotation={[0, 1.5705346837, 0]} userData={{ name: '8' }}>
          <group name="=>0117" userData={{ name: '=>[0:1:1:7]' }}>
            <mesh name="SOLID004" geometry={nodes.SOLID004.geometry} material={materials.mat_4} />
            <mesh name="SOLID004_1" geometry={nodes.SOLID004_1.geometry} material={materials.mat_5} />
          </group>
        </group>
        <group name="9" position={[-0.011212484, 0.000850004, -0.0030167305]} rotation={[0, -1.5705346837, 0]} userData={{ name: '9' }}>
          <group name="=>0117001" userData={{ name: '=>[0:1:1:7].001' }}>
            <mesh name="SOLID005" geometry={nodes.SOLID005.geometry} material={materials.mat_4} />
            <mesh name="SOLID005_1" geometry={nodes.SOLID005_1.geometry} material={materials.mat_5} />
          </group>
        </group>
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/jacdac_key_switch.gltf')