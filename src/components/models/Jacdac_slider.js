/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/jacdac_slider.gltf')
  return (
    <group ref={group} scale={1000} {...props} dispose={null}>
      <mesh name="28" geometry={nodes['28'].geometry} material={materials.mat_14} position={[0.0000535911, 0.0008, 0.0000100956]} userData={{ name: '28' }}>
        <group name="JD_PWR"  position={[-0.025, 0, -0.010]}></group>
        <group name="JD_DATA"  position={[-0.025, 0, 0.010]}></group>
        <group name="JD_GND1" position={[0.025, 0, 0.010]}></group>
        <group name="JD_GND2" position={[0.025, 0, -0.010]}></group>
        <group name="11" position={[0.0173144862, 0.00085, -0.0069229393]} rotation={[0, 1.5705346837, 0]} userData={{ name: '11' }}>
          <group name="=>0119" userData={{ name: '=>[0:1:1:9]' }}>
            <mesh name="SOLID006" geometry={nodes.SOLID006.geometry} material={materials.mat_0} />
            <mesh name="SOLID006_1" geometry={nodes.SOLID006_1.geometry} material={materials.mat_6} />
          </group>
        </group>
        <group name="12" position={[-0.015048109, 0.00085, -0.0079129431]} rotation={[0, 1.5705346837, 0]} userData={{ name: '12' }}>
          <group name="=>0115001" userData={{ name: '=>[0:1:1:5].001' }}>
            <mesh name="SOLID007" geometry={nodes.SOLID007.geometry} material={materials.mat_2} />
            <mesh name="SOLID007_1" geometry={nodes.SOLID007_1.geometry} material={materials.mat_3} />
          </group>
        </group>
        <group name="14" position={[0.0152824894, 0.00085, -0.0069229393]} rotation={[0, -1.5705346837, 0]} userData={{ name: '14' }}>
          <group name="=>01111" userData={{ name: '=>[0:1:1:11]' }}>
            <mesh name="SOLID008" geometry={nodes.SOLID008.geometry} material={materials.mat_0} />
            <mesh name="SOLID008_1" geometry={nodes.SOLID008_1.geometry} material={materials.mat_7} />
            <mesh name="SOLID008_2" geometry={nodes.SOLID008_2.geometry} material={materials.mat_8} />
          </group>
        </group>
        <group name="15" position={[0.0162984803, 0.00085, -0.006902942]} rotation={[0, 1.5705346837, 0]} userData={{ name: '15' }}>
          <group name="=>0113003" userData={{ name: '=>[0:1:1:3].003' }}>
            <mesh name="SOLID009" geometry={nodes.SOLID009.geometry} material={materials.mat_0} />
            <mesh name="SOLID009_1" geometry={nodes.SOLID009_1.geometry} material={materials.mat_1} />
          </group>
        </group>
        <group name="16" position={[0.0211464837, 0.00085, 0.005977659]} rotation={[0, -1.5705346837, 0]} userData={{ name: '16' }}>
          <group name="=>0117002" userData={{ name: '=>[0:1:1:7].002' }}>
            <mesh name="SOLID010" geometry={nodes.SOLID010.geometry} material={materials.mat_4} />
            <mesh name="SOLID010_1" geometry={nodes.SOLID010_1.geometry} material={materials.mat_5} />
          </group>
        </group>
        <group name="17" position={[0.0211464837, 0.00085, -0.0060223429]} rotation={[0, 1.5705346837, 0]} userData={{ name: '17' }}>
          <group name="=>0117003" userData={{ name: '=>[0:1:1:7].003' }}>
            <mesh name="SOLID011" geometry={nodes.SOLID011.geometry} material={materials.mat_4} />
            <mesh name="SOLID011_1" geometry={nodes.SOLID011_1.geometry} material={materials.mat_5} />
          </group>
        </group>
        <group name="18" position={[-0.0212631151, 0.00085, 0.0029776602]} rotation={[0, 1.5705346837, 0]} userData={{ name: '18' }}>
          <group name="=>01111001" userData={{ name: '=>[0:1:1:11].001' }}>
            <mesh name="SOLID012" geometry={nodes.SOLID012.geometry} material={materials.mat_0} />
            <mesh name="SOLID012_1" geometry={nodes.SOLID012_1.geometry} material={materials.mat_7} />
            <mesh name="SOLID012_2" geometry={nodes.SOLID012_2.geometry} material={materials.mat_8} />
          </group>
        </group>
        <group name="2" position={[-0.0173555091, 0.00085, -0.006902942]} rotation={[0, -1.5705346837, 0]} userData={{ name: '2' }}>
          <group name="=>0113" userData={{ name: '=>[0:1:1:3]' }}>
            <mesh name="SOLID" geometry={nodes.SOLID.geometry} material={materials.mat_0} />
            <mesh name="SOLID_1" geometry={nodes.SOLID_1.geometry} material={materials.mat_1} />
          </group>
        </group>
        <group name="20" position={[-0.0000481232, 0.00085, 0.0000460579]} rotation={[Math.PI, 0, Math.PI]} userData={{ name: '20' }}>
          <group name="=>01113" userData={{ name: '=>[0:1:1:13]' }}>
            <mesh name="SOLID013" geometry={nodes.SOLID013.geometry} material={materials.mat_5} />
            <mesh name="SOLID013_1" geometry={nodes.SOLID013_1.geometry} material={materials.mat_9} />
            <mesh name="SOLID013_2" geometry={nodes.SOLID013_2.geometry} material={materials.mat_10} />
          </group>
        </group>
        <group name="22" position={[0.0211464837, 0.00085, -0.0000423433]} rotation={[0, 1.5705346837, 0]} userData={{ name: '22' }}>
          <group name="=>01115" userData={{ name: '=>[0:1:1:15]' }}>
            <mesh name="SOLID014" geometry={nodes.SOLID014.geometry} material={materials.mat_7} />
            <mesh name="SOLID014_1" geometry={nodes.SOLID014_1.geometry} material={materials.mat_11} />
            <mesh name="SOLID014_2" geometry={nodes.SOLID014_2.geometry} material={materials.mat_12} />
          </group>
        </group>
        <group name="24" position={[-0.0000441148, 0.00085, 0.0080470573]} userData={{ name: '24' }}>
          <group name="=>01117" userData={{ name: '=>[0:1:1:17]' }}>
            <mesh name="SOLID015" geometry={nodes.SOLID015.geometry} material={materials.mat_3} />
            <mesh name="SOLID015_1" geometry={nodes.SOLID015_1.geometry} material={materials.mat_2} />
            <mesh name="SOLID015_2" geometry={nodes.SOLID015_2.geometry} material={materials.mat_13} />
          </group>
        </group>
        <group name="25" position={[0.0211464837, 0.00085, -0.0030223371]} rotation={[0, 1.5705346837, 0]} userData={{ name: '25' }}>
          <group name="=>01111002" userData={{ name: '=>[0:1:1:11].002' }}>
            <mesh name="SOLID016" geometry={nodes.SOLID016.geometry} material={materials.mat_0} />
            <mesh name="SOLID016_1" geometry={nodes.SOLID016_1.geometry} material={materials.mat_7} />
            <mesh name="SOLID016_2" geometry={nodes.SOLID016_2.geometry} material={materials.mat_8} />
          </group>
        </group>
        <group name="26" position={[-0.004735522, 0.00085, 0.0099420603]} rotation={[-Math.PI, 0, -Math.PI]} userData={{ name: '26' }}>
          <group name="=>01111003" userData={{ name: '=>[0:1:1:11].003' }}>
            <mesh name="SOLID017" geometry={nodes.SOLID017.geometry} material={materials.mat_0} />
            <mesh name="SOLID017_1" geometry={nodes.SOLID017_1.geometry} material={materials.mat_7} />
            <mesh name="SOLID017_2" geometry={nodes.SOLID017_2.geometry} material={materials.mat_8} />
          </group>
        </group>
        <group name="27" position={[-0.0212631151, 0.00085, -0.0000023411]} rotation={[0, -1.5705346837, 0]} userData={{ name: '27' }}>
          <group name="=>01115001" userData={{ name: '=>[0:1:1:15].001' }}>
            <mesh name="SOLID018" geometry={nodes.SOLID018.geometry} material={materials.mat_7} />
            <mesh name="SOLID018_1" geometry={nodes.SOLID018_1.geometry} material={materials.mat_11} />
            <mesh name="SOLID018_2" geometry={nodes.SOLID018_2.geometry} material={materials.mat_12} />
          </group>
        </group>
        <group name="3" position={[-0.0127835199, 0.00085, -0.006902942]} rotation={[0, -1.5705346837, 0]} userData={{ name: '3' }}>
          <group name="=>0113001" userData={{ name: '=>[0:1:1:3].001' }}>
            <mesh name="SOLID001" geometry={nodes.SOLID001.geometry} material={materials.mat_0} />
            <mesh name="SOLID001_1" geometry={nodes.SOLID001_1.geometry} material={materials.mat_1} />
          </group>
        </group>
        <group name="4" position={[-0.004735522, 0.00085, 0.0061420561]} rotation={[-Math.PI, 0, -Math.PI]} userData={{ name: '4' }}>
          <group name="=>0113002" userData={{ name: '=>[0:1:1:3].002' }}>
            <mesh name="SOLID002" geometry={nodes.SOLID002.geometry} material={materials.mat_0} />
            <mesh name="SOLID002_1" geometry={nodes.SOLID002_1.geometry} material={materials.mat_1} />
          </group>
        </group>
        <group name="6" position={[0.0129518881, 0.00085, -0.0079129431]} rotation={[0, 1.5705346837, 0]} userData={{ name: '6' }}>
          <group name="=>0115" userData={{ name: '=>[0:1:1:5]' }}>
            <mesh name="SOLID003" geometry={nodes.SOLID003.geometry} material={materials.mat_2} />
            <mesh name="SOLID003_1" geometry={nodes.SOLID003_1.geometry} material={materials.mat_3} />
          </group>
        </group>
        <group name="8" position={[-0.0212631151, 0.00085, 0.005977659]} rotation={[0, -1.5705346837, 0]} userData={{ name: '8' }}>
          <group name="=>0117" userData={{ name: '=>[0:1:1:7]' }}>
            <mesh name="SOLID004" geometry={nodes.SOLID004.geometry} material={materials.mat_4} />
            <mesh name="SOLID004_1" geometry={nodes.SOLID004_1.geometry} material={materials.mat_5} />
          </group>
        </group>
        <group name="9" position={[-0.0212631151, 0.00085, -0.0060223429]} rotation={[0, 1.5705346837, 0]} userData={{ name: '9' }}>
          <group name="=>0117001" userData={{ name: '=>[0:1:1:7].001' }}>
            <mesh name="SOLID005" geometry={nodes.SOLID005.geometry} material={materials.mat_4} />
            <mesh name="SOLID005_1" geometry={nodes.SOLID005_1.geometry} material={materials.mat_5} />
          </group>
        </group>
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/jacdac_slider.gltf')
