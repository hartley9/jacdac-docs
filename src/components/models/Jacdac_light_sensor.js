/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/jacdac_light_sensor.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={1000}>

      <group name="JD_PWR"  position={[-0.00995, 0, 0.01005]}></group>
      <group name="JD_DATA"  position={[0.00995, 0, 0.01005]}></group>
      <group name="JD_GND1" position={[-0.00995, 0, -0.01005]}></group>
      <group name="JD_GND2" position={[0.00995, 0, -0.01005]}></group>


      <mesh name="jacdac-light-sensor" geometry={nodes['jacdac-light-sensor'].geometry} material={materials.mat_12} userData={{ name: 'jacdac-light-sensor' }}>
        <group name="11" position={[0.0057158172, 0.0008499999, 0.0045898408]} userData={{ name: '11' }}>
          <group name="=>0119" userData={{ name: '=>[0:1:1:9]' }}>
            <mesh name="SOLID006" geometry={nodes.SOLID006.geometry} material={materials.mat_0} />
            <mesh name="SOLID006_1" geometry={nodes.SOLID006_1.geometry} material={materials.mat_6} />
          </group>
        </group>
        <group name="12" position={[-0.0020297021, 0.0008499999, -0.0088601634]} rotation={[0, 1.5705346837, 0]} userData={{ name: '12' }}>
          <group name="=>0115001" userData={{ name: '=>[0:1:1:5].001' }}>
            <mesh name="SOLID007" geometry={nodes.SOLID007.geometry} material={materials.mat_2} />
            <mesh name="SOLID007_1" geometry={nodes.SOLID007_1.geometry} material={materials.mat_3} />
          </group>
        </group>
        <group name="14" position={[0.0057158172, 0.0008499999, 0.0065710396]} userData={{ name: '14' }}>
          <group name="=>01111" userData={{ name: '=>[0:1:1:11]' }}>
            <mesh name="SOLID008" geometry={nodes.SOLID008.geometry} material={materials.mat_0} />
            <mesh name="SOLID008_1" geometry={nodes.SOLID008_1.geometry} material={materials.mat_7} />
            <mesh name="SOLID008_2" geometry={nodes.SOLID008_2.geometry} material={materials.mat_8} />
          </group>
        </group>
        <group name="15" position={[0.0057158172, 0.0008499999, 0.0055804402]} rotation={[-Math.PI, 0, -Math.PI]} userData={{ name: '15' }}>
          <group name="=>0113003" userData={{ name: '=>[0:1:1:3].003' }}>
            <mesh name="SOLID009" geometry={nodes.SOLID009.geometry} material={materials.mat_0} />
            <mesh name="SOLID009_1" geometry={nodes.SOLID009_1.geometry} material={materials.mat_1} />
          </group>
        </group>
        <group name="16" position={[0.0061702877, 0.0008499999, 0.0029395521]} rotation={[0, 1.5705346837, 0]} userData={{ name: '16' }}>
          <group name="=>0117002" userData={{ name: '=>[0:1:1:7].002' }}>
            <mesh name="SOLID010" geometry={nodes.SOLID010.geometry} material={materials.mat_4} />
            <mesh name="SOLID010_1" geometry={nodes.SOLID010_1.geometry} material={materials.mat_5} />
          </group>
        </group>
        <group name="17" position={[0.0061702877, 0.0008499999, -0.0030604452]} rotation={[0, -1.5705346837, 0]} userData={{ name: '17' }}>
          <group name="=>0117003" userData={{ name: '=>[0:1:1:7].003' }}>
            <mesh name="SOLID011" geometry={nodes.SOLID011.geometry} material={materials.mat_4} />
            <mesh name="SOLID011_1" geometry={nodes.SOLID011_1.geometry} material={materials.mat_5} />
          </group>
        </group>
        <group name="18" position={[0.0038758069, 0.0008499999, -0.000240162]} rotation={[0, 1.5705346837, 0]} userData={{ name: '18' }}>
          <group name="=>01111001" userData={{ name: '=>[0:1:1:11].001' }}>
            <mesh name="SOLID012" geometry={nodes.SOLID012.geometry} material={materials.mat_0} />
            <mesh name="SOLID012_1" geometry={nodes.SOLID012_1.geometry} material={materials.mat_7} />
            <mesh name="SOLID012_2" geometry={nodes.SOLID012_2.geometry} material={materials.mat_8} />
          </group>
        </group>
        <group name="2" position={[-0.0042541921, 0.0008499999, -0.0078501627]} rotation={[0, -1.5705346837, 0]} userData={{ name: '2' }}>
          <group name="=>0113" userData={{ name: '=>[0:1:1:3]' }}>
            <mesh name="SOLID" geometry={nodes.SOLID.geometry} material={materials.mat_0} />
            <mesh name="SOLID_1" geometry={nodes.SOLID_1.geometry} material={materials.mat_1} />
          </group>
        </group>
        <group name="20" position={[-0.0062341839, 0.0008499999, -0.0000364482]} rotation={[0, -1.5705346837, 0]} userData={{ name: '20' }}>
          <group name="=>01113" userData={{ name: '=>[0:1:1:13]' }}>
            <mesh name="SOLID013" geometry={nodes.SOLID013.geometry} material={materials.mat_7} />
            <mesh name="SOLID013_1" geometry={nodes.SOLID013_1.geometry} material={materials.mat_9} />
            <mesh name="SOLID013_2" geometry={nodes.SOLID013_2.geometry} material={materials.mat_10} />
          </group>
        </group>
        <group name="21" position={[0.0041958094, 0.0008499999, 0.0082598403]} rotation={[0, 1.5705346837, 0]} userData={{ name: '21' }}>
          <group name="=>0113004" userData={{ name: '=>[0:1:1:3].004' }}>
            <mesh name="SOLID014" geometry={nodes.SOLID014.geometry} material={materials.mat_0} />
            <mesh name="SOLID014_1" geometry={nodes.SOLID014_1.geometry} material={materials.mat_1} />
          </group>
        </group>
        <group name="23" position={[-0.0000097007, 0.0008499999, -0.0000564456]} userData={{ name: '23' }}>
          <group name="=>01115" userData={{ name: '=>[0:1:1:15]' }}>
            <mesh name="SOLID015" geometry={nodes.SOLID015.geometry} material={materials.mat_7} />
            <mesh name="SOLID015_1" geometry={nodes.SOLID015_1.geometry} material={materials.mat_9} />
            <mesh name="SOLID015_2" geometry={nodes.SOLID015_2.geometry} material={materials.mat_10} />
          </group>
        </group>
        <group name="25" position={[-0.0000257045, 0.0008499999, 0.0064679533]} userData={{ name: '25' }}>
          <group name="=>01117" userData={{ name: '=>[0:1:1:17]' }}>
            <mesh name="SOLID016" geometry={nodes.SOLID016.geometry} material={materials.mat_3} />
            <mesh name="SOLID016_1" geometry={nodes.SOLID016_1.geometry} material={materials.mat_2} />
            <mesh name="SOLID016_2" geometry={nodes.SOLID016_2.geometry} material={materials.mat_11} />
          </group>
        </group>
        <group name="26" position={[-0.0042451024, 0.0008499999, 0.007769838]} rotation={[0, 1.5705346837, 0]} userData={{ name: '26' }}>
          <group name="=>01111002" userData={{ name: '=>[0:1:1:11].002' }}>
            <mesh name="SOLID017" geometry={nodes.SOLID017.geometry} material={materials.mat_0} />
            <mesh name="SOLID017_1" geometry={nodes.SOLID017_1.geometry} material={materials.mat_7} />
            <mesh name="SOLID017_2" geometry={nodes.SOLID017_2.geometry} material={materials.mat_8} />
          </group>
        </group>
        <group name="27" position={[-0.000029698, 0.0008499999, 0.0018498376]} rotation={[-Math.PI, 0, -Math.PI]} userData={{ name: '27' }}>
          <group name="=>01111003" userData={{ name: '=>[0:1:1:11].003' }}>
            <mesh name="SOLID018" geometry={nodes.SOLID018.geometry} material={materials.mat_0} />
            <mesh name="SOLID018_1" geometry={nodes.SOLID018_1.geometry} material={materials.mat_7} />
            <mesh name="SOLID018_2" geometry={nodes.SOLID018_2.geometry} material={materials.mat_8} />
          </group>
        </group>
        <group name="28" position={[-0.000029698, 0.0008499999, -0.001970157]} rotation={[-Math.PI, 0, -Math.PI]} userData={{ name: '28' }}>
          <group name="=>01111004" userData={{ name: '=>[0:1:1:11].004' }}>
            <mesh name="SOLID019" geometry={nodes.SOLID019.geometry} material={materials.mat_0} />
            <mesh name="SOLID019_1" geometry={nodes.SOLID019_1.geometry} material={materials.mat_7} />
            <mesh name="SOLID019_2" geometry={nodes.SOLID019_2.geometry} material={materials.mat_8} />
          </group>
        </group>
        <group name="29" position={[0.0061702877, 0.0008499999, -0.0000804439]} rotation={[0, 1.5705346837, 0]} userData={{ name: '29' }}>
          <group name="=>01113001" userData={{ name: '=>[0:1:1:13].001' }}>
            <mesh name="SOLID020" geometry={nodes.SOLID020.geometry} material={materials.mat_7} />
            <mesh name="SOLID020_1" geometry={nodes.SOLID020_1.geometry} material={materials.mat_9} />
            <mesh name="SOLID020_2" geometry={nodes.SOLID020_2.geometry} material={materials.mat_10} />
          </group>
        </group>
        <group name="3" position={[0.0001948923, 0.0008499999, -0.0078501627]} rotation={[0, -1.5705346837, 0]} userData={{ name: '3' }}>
          <group name="=>0113001" userData={{ name: '=>[0:1:1:3].001' }}>
            <mesh name="SOLID001" geometry={nodes.SOLID001.geometry} material={materials.mat_0} />
            <mesh name="SOLID001_1" geometry={nodes.SOLID001_1.geometry} material={materials.mat_1} />
          </group>
        </group>
        <group name="4" position={[-0.0042351037, 0.0008499999, 0.0050479546]} rotation={[0, -1.5705346837, 0]} userData={{ name: '4' }}>
          <group name="=>0113002" userData={{ name: '=>[0:1:1:3].002' }}>
            <mesh name="SOLID002" geometry={nodes.SOLID002.geometry} material={materials.mat_0} />
            <mesh name="SOLID002_1" geometry={nodes.SOLID002_1.geometry} material={materials.mat_1} />
          </group>
        </group>
        <group name="6" position={[0.0024348944, 0.0008499999, -0.0088601634]} rotation={[0, -1.5705346837, 0]} userData={{ name: '6' }}>
          <group name="=>0115" userData={{ name: '=>[0:1:1:5]' }}>
            <mesh name="SOLID003" geometry={nodes.SOLID003.geometry} material={materials.mat_2} />
            <mesh name="SOLID003_1" geometry={nodes.SOLID003_1.geometry} material={materials.mat_3} />
          </group>
        </group>
        <group name="8" position={[-0.0062341839, 0.0008499999, 0.002943553]} rotation={[0, 1.5705346837, 0]} userData={{ name: '8' }}>
          <group name="=>0117" userData={{ name: '=>[0:1:1:7]' }}>
            <mesh name="SOLID004" geometry={nodes.SOLID004.geometry} material={materials.mat_4} />
            <mesh name="SOLID004_1" geometry={nodes.SOLID004_1.geometry} material={materials.mat_5} />
          </group>
        </group>
        <group name="9" position={[-0.0062341839, 0.0008499999, -0.0030564442]} rotation={[0, -1.5705346837, 0]} userData={{ name: '9' }}>
          <group name="=>0117001" userData={{ name: '=>[0:1:1:7].001' }}>
            <mesh name="SOLID005" geometry={nodes.SOLID005.geometry} material={materials.mat_4} />
            <mesh name="SOLID005_1" geometry={nodes.SOLID005_1.geometry} material={materials.mat_5} />
          </group>
        </group>
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/jacdac_light_sensor.gltf')
