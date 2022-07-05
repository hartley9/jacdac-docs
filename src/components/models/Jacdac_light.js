/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/jacdac_light.glb')
  return (
    <group ref={group} {...props} dispose={null}>
            <group name="JD_PWR"  position={[-10, 0, 10]}></group>
      <group name="JD_GND1"  position={[10, 0, 10]}></group>
      <group name="JD_DATA" position={[-10, 0, -10]}></group>
      <group name="JD_GND2" position={[10, 0, -10.05]}></group>
      <mesh name="jacdac_light_sensor" geometry={nodes.jacdac_light_sensor.geometry} material={materials.mat_6} scale={2.5399999619} userData={{ name: 'jacdac_light_sensor' }}>
        <group name="Compound001" position={[-1.6690279245, 0.6348426342, -2.9936890602]} rotation={[0, -1.5705346837, 0]} userData={{ name: 'Compound.001' }}>
          <mesh name="Compound002" geometry={nodes.Compound002.geometry} material={nodes.Compound002.material} userData={{ name: 'Compound.002' }} />
        </group>
        <group name="Compound003" position={[0.0825799629, 0.6348426342, -2.9936890602]} rotation={[0, -1.5705346837, 0]} userData={{ name: 'Compound.003' }}>
          <mesh name="Compound004" geometry={nodes.Compound004.geometry} material={nodes.Compound004.material} userData={{ name: 'Compound.004' }} />
        </group>
        <group name="Compound005" position={[-1.6615145206, 0.6348426342, 2.0843091011]} rotation={[0, -1.5705346837, 0]} userData={{ name: 'Compound.005' }}>
          <mesh name="Compound006" geometry={nodes.Compound006.geometry} material={nodes.Compound006.material} userData={{ name: 'Compound.006' }} />
        </group>
        <group name="Compound007" position={[0.9644696712, 0.6348426342, -3.3913269043]} rotation={[0, -1.5705346837, 0]} userData={{ name: 'Compound.007' }}>
          <mesh name="Compound008" geometry={nodes.Compound008.geometry} material={nodes.Compound008.material} userData={{ name: 'Compound.008' }} />
        </group>
        <group name="Compound009" position={[2.2561688423, 0.6348426342, 1.9039487839]} userData={{ name: 'Compound.009' }}>
          <mesh name="Compound010" geometry={nodes.Compound010.geometry} material={nodes.Compound010.material} userData={{ name: 'Compound.010' }} />
        </group>
        <group name="Compound011" position={[-0.7932468057, 0.6348426342, -3.3913269043]} rotation={[0, 1.5705346837, 0]} userData={{ name: 'Compound.011' }}>
          <mesh name="Compound012" geometry={nodes.Compound012.geometry} material={nodes.Compound012.material} userData={{ name: 'Compound.012' }} />
        </group>
        <group name="Compound013" position={[2.2561688423, 0.6348426342, 2.6839487553]} userData={{ name: 'Compound.013' }}>
          <mesh name="Compound014" geometry={nodes.Compound014.geometry} material={nodes.Compound014.material} userData={{ name: 'Compound.014' }} />
        </group>
        <group name="Compound015" position={[2.2561688423, 0.6348426342, 2.2939488888]} rotation={[Math.PI, -4.64e-8, Math.PI]} userData={{ name: 'Compound.015' }}>
          <mesh name="Compound016" geometry={nodes.Compound016.geometry} material={nodes.Compound016.material} userData={{ name: 'Compound.016' }} />
        </group>
        <group name="Compound017" position={[1.5317596197, 0.6348426342, 0.0023738767]} rotation={[0, 1.5705346837, 0]} userData={{ name: 'Compound.017' }}>
          <mesh name="Compound018" geometry={nodes.Compound018.geometry} material={nodes.Compound018.material} userData={{ name: 'Compound.018' }} />
        </group>
        <group name="Compound019" position={[-2.4485554695, 0.6348426342, 0.08257664]} rotation={[0, -1.5705346837, 0]} userData={{ name: 'Compound.019' }}>
          <mesh name="Compound020" geometry={nodes.Compound020.geometry} material={nodes.Compound020.material} userData={{ name: 'Compound.020' }} />
        </group>
        <group name="Compound021" position={[1.6577438116, 0.6348426342, 3.3488304615]} rotation={[0, 1.5705346837, 0]} userData={{ name: 'Compound.021' }}>
          <mesh name="Compound022" geometry={nodes.Compound022.geometry} material={nodes.Compound022.material} userData={{ name: 'Compound.022' }} />
        </group>
        <group name="Compound023" position={[0.0020287638, 0.6348426342, 0.0747026205]} userData={{ name: 'Compound.023' }}>
          <mesh name="Compound024" geometry={nodes.Compound024.geometry} material={nodes.Compound024.material} userData={{ name: 'Compound.024' }} />
        </group>
        <group name="Compound025" position={[-0.0042704619, 0.6348426342, 2.6433639526]} userData={{ name: 'Compound.025' }}>
          <group name="Compound026" userData={{ name: 'Compound.026' }}>
            <group name="Compound027" userData={{ name: 'Compound.027' }}>
              <group name="Compound028" userData={{ name: 'Compound.028' }}>
                <mesh name="Compound012_1" geometry={nodes.Compound012_1.geometry} material={materials.mat_0} />
                <mesh name="Compound012_2" geometry={nodes.Compound012_2.geometry} material={materials.mat_1} />
                <mesh name="Compound012_3" geometry={nodes.Compound012_3.geometry} material={materials.mat_2} />
              </group>
              <mesh name="Compound029" geometry={nodes.Compound029.geometry} material={materials.mat_0} userData={{ name: 'Compound.029' }} />
              <mesh name="Compound030" geometry={nodes.Compound030.geometry} material={materials.mat_0} userData={{ name: 'Compound.030' }} />
              <mesh name="Compound031" geometry={nodes.Compound031.geometry} material={materials.mat_0} userData={{ name: 'Compound.031' }} />
              <mesh name="Compound032" geometry={nodes.Compound032.geometry} material={materials.mat_0} userData={{ name: 'Compound.032' }} />
              <mesh name="Compound033" geometry={nodes.Compound033.geometry} material={materials.mat_0} userData={{ name: 'Compound.033' }} />
              <mesh name="Compound034" geometry={nodes.Compound034.geometry} material={materials.mat_1} userData={{ name: 'Compound.034' }} />
              <mesh name="Compound035" geometry={nodes.Compound035.geometry} material={materials.mat_0} userData={{ name: 'Compound.035' }} />
              <mesh name="Compound036" geometry={nodes.Compound036.geometry} material={materials.mat_1} userData={{ name: 'Compound.036' }} />
              <mesh name="Compound037" geometry={nodes.Compound037.geometry} material={materials.mat_0} userData={{ name: 'Compound.037' }} />
              <mesh name="Compound038" geometry={nodes.Compound038.geometry} material={materials.mat_0} userData={{ name: 'Compound.038' }} />
              <mesh name="Compound039" geometry={nodes.Compound039.geometry} material={materials.mat_0} userData={{ name: 'Compound.039' }} />
              <mesh name="Compound040" geometry={nodes.Compound040.geometry} material={materials.mat_0} userData={{ name: 'Compound.040' }} />
              <mesh name="Compound041" geometry={nodes.Compound041.geometry} material={materials.mat_0} userData={{ name: 'Compound.041' }} />
              <mesh name="Compound042" geometry={nodes.Compound042.geometry} material={materials.mat_0} userData={{ name: 'Compound.042' }} />
              <mesh name="Compound043" geometry={nodes.Compound043.geometry} material={materials.mat_0} userData={{ name: 'Compound.043' }} />
              <mesh name="Compound044" geometry={nodes.Compound044.geometry} material={materials.mat_1} userData={{ name: 'Compound.044' }} />
              <mesh name="Compound045" geometry={nodes.Compound045.geometry} material={materials.mat_1} userData={{ name: 'Compound.045' }} />
              <mesh name="Compound046" geometry={nodes.Compound046.geometry} material={materials.mat_1} userData={{ name: 'Compound.046' }} />
              <mesh name="Compound047" geometry={nodes.Compound047.geometry} material={materials.mat_1} userData={{ name: 'Compound.047' }} />
              <mesh name="Compound048" geometry={nodes.Compound048.geometry} material={materials.mat_1} userData={{ name: 'Compound.048' }} />
              <mesh name="Compound049" geometry={nodes.Compound049.geometry} material={materials.mat_0} userData={{ name: 'Compound.049' }} />
              <mesh name="Compound050" geometry={nodes.Compound050.geometry} material={materials.mat_1} userData={{ name: 'Compound.050' }} />
              <mesh name="Compound051" geometry={nodes.Compound051.geometry} material={materials.mat_0} userData={{ name: 'Compound.051' }} />
              <mesh name="Compound052" geometry={nodes.Compound052.geometry} material={materials.mat_0} userData={{ name: 'Compound.052' }} />
              <mesh name="Compound053" geometry={nodes.Compound053.geometry} material={materials.mat_1} userData={{ name: 'Compound.053' }} />
              <mesh name="Compound054" geometry={nodes.Compound054.geometry} material={materials.mat_1} userData={{ name: 'Compound.054' }} />
              <mesh name="Compound055" geometry={nodes.Compound055.geometry} material={materials.mat_1} userData={{ name: 'Compound.055' }} />
              <mesh name="Compound056" geometry={nodes.Compound056.geometry} material={materials.mat_1} userData={{ name: 'Compound.056' }} />
              <mesh name="Compound057" geometry={nodes.Compound057.geometry} material={materials.mat_1} userData={{ name: 'Compound.057' }} />
              <mesh name="Compound058" geometry={nodes.Compound058.geometry} material={materials.mat_0} userData={{ name: 'Compound.058' }} />
              <mesh name="Compound059" geometry={nodes.Compound059.geometry} material={materials.mat_1} userData={{ name: 'Compound.059' }} />
              <mesh name="Compound060" geometry={nodes.Compound060.geometry} material={materials.mat_1} userData={{ name: 'Compound.060' }} />
              <mesh name="Compound061" geometry={nodes.Compound061.geometry} material={materials.mat_1} userData={{ name: 'Compound.061' }} />
              <mesh name="Compound062" geometry={nodes.Compound062.geometry} material={materials.mat_1} userData={{ name: 'Compound.062' }} />
              <mesh name="Compound063" geometry={nodes.Compound063.geometry} material={materials.mat_1} userData={{ name: 'Compound.063' }} />
              <mesh name="Compound064" geometry={nodes.Compound064.geometry} material={materials.mat_1} userData={{ name: 'Compound.064' }} />
              <mesh name="Compound065" geometry={nodes.Compound065.geometry} material={materials.mat_0} userData={{ name: 'Compound.065' }} />
              <mesh name="Compound066" geometry={nodes.Compound066.geometry} material={materials.mat_1} userData={{ name: 'Compound.066' }} />
              <mesh name="Compound067" geometry={nodes.Compound067.geometry} material={materials.mat_0} userData={{ name: 'Compound.067' }} />
              <mesh name="Compound068" geometry={nodes.Compound068.geometry} material={materials.mat_0} userData={{ name: 'Compound.068' }} />
              <mesh name="Compound069" geometry={nodes.Compound069.geometry} material={materials.mat_0} userData={{ name: 'Compound.069' }} />
              <mesh name="Compound070" geometry={nodes.Compound070.geometry} material={materials.mat_1} userData={{ name: 'Compound.070' }} />
              <mesh name="Compound071" geometry={nodes.Compound071.geometry} material={materials.mat_0} userData={{ name: 'Compound.071' }} />
              <mesh name="Compound072" geometry={nodes.Compound072.geometry} material={materials.mat_0} userData={{ name: 'Compound.072' }} />
              <mesh name="Compound073" geometry={nodes.Compound073.geometry} material={materials.mat_0} userData={{ name: 'Compound.073' }} />
              <mesh name="Compound074" geometry={nodes.Compound074.geometry} material={materials.mat_0} userData={{ name: 'Compound.074' }} />
              <mesh name="Compound075" geometry={nodes.Compound075.geometry} material={materials.mat_1} userData={{ name: 'Compound.075' }} />
              <mesh name="Compound076" geometry={nodes.Compound076.geometry} material={materials.mat_1} userData={{ name: 'Compound.076' }} />
              <mesh name="Compound077" geometry={nodes.Compound077.geometry} material={materials.mat_1} userData={{ name: 'Compound.077' }} />
              <mesh name="Compound078" geometry={nodes.Compound078.geometry} material={materials.mat_1} userData={{ name: 'Compound.078' }} />
              <mesh name="Compound079" geometry={nodes.Compound079.geometry} material={materials.mat_1} userData={{ name: 'Compound.079' }} />
              <mesh name="Compound080" geometry={nodes.Compound080.geometry} material={materials.mat_1} userData={{ name: 'Compound.080' }} />
              <mesh name="Compound081" geometry={nodes.Compound081.geometry} material={materials.mat_0} userData={{ name: 'Compound.081' }} />
              <mesh name="Compound082" geometry={nodes.Compound082.geometry} material={materials.mat_0} userData={{ name: 'Compound.082' }} />
              <mesh name="Compound083" geometry={nodes.Compound083.geometry} material={materials.mat_0} userData={{ name: 'Compound.083' }} />
              <mesh name="Compound084" geometry={nodes.Compound084.geometry} material={materials.mat_0} userData={{ name: 'Compound.084' }} />
              <mesh name="Compound085" geometry={nodes.Compound085.geometry} material={materials.mat_0} userData={{ name: 'Compound.085' }} />
              <mesh name="Compound086" geometry={nodes.Compound086.geometry} material={materials.mat_0} userData={{ name: 'Compound.086' }} />
              <mesh name="Compound087" geometry={nodes.Compound087.geometry} material={materials.mat_0} userData={{ name: 'Compound.087' }} />
              <mesh name="Compound088" geometry={nodes.Compound088.geometry} material={materials.mat_0} userData={{ name: 'Compound.088' }} />
              <mesh name="Compound089" geometry={nodes.Compound089.geometry} material={materials.mat_0} userData={{ name: 'Compound.089' }} />
              <mesh name="Compound090" geometry={nodes.Compound090.geometry} material={materials.mat_0} userData={{ name: 'Compound.090' }} />
              <mesh name="Compound091" geometry={nodes.Compound091.geometry} material={materials.mat_0} userData={{ name: 'Compound.091' }} />
              <mesh name="Compound092" geometry={nodes.Compound092.geometry} material={materials.mat_1} userData={{ name: 'Compound.092' }} />
              <mesh name="Compound093" geometry={nodes.Compound093.geometry} material={materials.mat_1} userData={{ name: 'Compound.093' }} />
              <mesh name="Compound094" geometry={nodes.Compound094.geometry} material={materials.mat_1} userData={{ name: 'Compound.094' }} />
              <mesh name="Compound095" geometry={nodes.Compound095.geometry} material={materials.mat_1} userData={{ name: 'Compound.095' }} />
              <mesh name="Compound096" geometry={nodes.Compound096.geometry} material={materials.mat_0} userData={{ name: 'Compound.096' }} />
              <mesh name="Compound097" geometry={nodes.Compound097.geometry} material={materials.mat_0} userData={{ name: 'Compound.097' }} />
              <mesh name="Compound098" geometry={nodes.Compound098.geometry} material={materials.mat_1} userData={{ name: 'Compound.098' }} />
              <mesh name="Compound099" geometry={nodes.Compound099.geometry} material={materials.mat_1} userData={{ name: 'Compound.099' }} />
              <mesh name="Compound100" geometry={nodes.Compound100.geometry} material={materials.mat_0} userData={{ name: 'Compound.100' }} />
              <mesh name="Compound101" geometry={nodes.Compound101.geometry} material={materials.mat_0} userData={{ name: 'Compound.101' }} />
              <mesh name="Compound102" geometry={nodes.Compound102.geometry} material={materials.mat_1} userData={{ name: 'Compound.102' }} />
              <mesh name="Compound103" geometry={nodes.Compound103.geometry} material={materials.mat_1} userData={{ name: 'Compound.103' }} />
              <mesh name="Compound104" geometry={nodes.Compound104.geometry} material={materials.mat_1} userData={{ name: 'Compound.104' }} />
              <mesh name="Compound105" geometry={nodes.Compound105.geometry} material={materials.mat_0} userData={{ name: 'Compound.105' }} />
              <mesh name="Compound106" geometry={nodes.Compound106.geometry} material={materials.mat_0} userData={{ name: 'Compound.106' }} />
              <mesh name="Compound107" geometry={nodes.Compound107.geometry} material={materials.mat_0} userData={{ name: 'Compound.107' }} />
              <mesh name="Compound108" geometry={nodes.Compound108.geometry} material={materials.mat_0} userData={{ name: 'Compound.108' }} />
              <mesh name="Compound109" geometry={nodes.Compound109.geometry} material={materials.mat_0} userData={{ name: 'Compound.109' }} />
              <mesh name="Compound110" geometry={nodes.Compound110.geometry} material={materials.mat_0} userData={{ name: 'Compound.110' }} />
              <mesh name="Compound111" geometry={nodes.Compound111.geometry} material={materials.mat_0} userData={{ name: 'Compound.111' }} />
              <mesh name="Compound112" geometry={nodes.Compound112.geometry} material={materials.mat_0} userData={{ name: 'Compound.112' }} />
              <mesh name="Compound113" geometry={nodes.Compound113.geometry} material={materials.mat_0} userData={{ name: 'Compound.113' }} />
              <mesh name="Compound114" geometry={nodes.Compound114.geometry} material={materials.mat_0} userData={{ name: 'Compound.114' }} />
              <mesh name="Compound115" geometry={nodes.Compound115.geometry} material={materials.mat_0} userData={{ name: 'Compound.115' }} />
              <mesh name="Compound116" geometry={nodes.Compound116.geometry} material={materials.mat_0} userData={{ name: 'Compound.116' }} />
              <mesh name="Compound117" geometry={nodes.Compound117.geometry} material={materials.mat_0} userData={{ name: 'Compound.117' }} />
              <mesh name="Compound118" geometry={nodes.Compound118.geometry} material={materials.mat_0} userData={{ name: 'Compound.118' }} />
              <mesh name="Compound119" geometry={nodes.Compound119.geometry} material={materials.mat_0} userData={{ name: 'Compound.119' }} />
              <mesh name="Compound120" geometry={nodes.Compound120.geometry} material={materials.mat_0} userData={{ name: 'Compound.120' }} />
              <mesh name="Compound121" geometry={nodes.Compound121.geometry} material={materials.mat_1} userData={{ name: 'Compound.121' }} />
              <mesh name="Compound122" geometry={nodes.Compound122.geometry} material={materials.mat_1} userData={{ name: 'Compound.122' }} />
              <mesh name="Compound123" geometry={nodes.Compound123.geometry} material={materials.mat_1} userData={{ name: 'Compound.123' }} />
              <mesh name="Compound124" geometry={nodes.Compound124.geometry} material={materials.mat_1} userData={{ name: 'Compound.124' }} />
              <mesh name="Compound125" geometry={nodes.Compound125.geometry} material={materials.mat_1} userData={{ name: 'Compound.125' }} />
              <mesh name="Compound126" geometry={nodes.Compound126.geometry} material={materials.mat_1} userData={{ name: 'Compound.126' }} />
              <mesh name="Compound127" geometry={nodes.Compound127.geometry} material={materials.mat_2} userData={{ name: 'Compound.127' }} />
              <mesh name="Compound128" geometry={nodes.Compound128.geometry} material={materials.mat_1} userData={{ name: 'Compound.128' }} />
              <mesh name="Compound129" geometry={nodes.Compound129.geometry} material={materials.mat_1} userData={{ name: 'Compound.129' }} />
              <mesh name="Compound130" geometry={nodes.Compound130.geometry} material={materials.mat_1} userData={{ name: 'Compound.130' }} />
              <mesh name="Compound131" geometry={nodes.Compound131.geometry} material={materials.mat_0} userData={{ name: 'Compound.131' }} />
              <mesh name="Compound132" geometry={nodes.Compound132.geometry} material={materials.mat_0} userData={{ name: 'Compound.132' }} />
              <mesh name="Compound133" geometry={nodes.Compound133.geometry} material={materials.mat_1} userData={{ name: 'Compound.133' }} />
              <mesh name="Compound134" geometry={nodes.Compound134.geometry} material={materials.mat_0} userData={{ name: 'Compound.134' }} />
              <mesh name="Compound135" geometry={nodes.Compound135.geometry} material={materials.mat_0} userData={{ name: 'Compound.135' }} />
              <mesh name="Compound136" geometry={nodes.Compound136.geometry} material={materials.mat_0} userData={{ name: 'Compound.136' }} />
              <mesh name="Compound137" geometry={nodes.Compound137.geometry} material={materials.mat_0} userData={{ name: 'Compound.137' }} />
              <mesh name="Compound138" geometry={nodes.Compound138.geometry} material={materials.mat_1} userData={{ name: 'Compound.138' }} />
              <mesh name="Compound139" geometry={nodes.Compound139.geometry} material={materials.mat_0} userData={{ name: 'Compound.139' }} />
              <mesh name="Compound140" geometry={nodes.Compound140.geometry} material={materials.mat_0} userData={{ name: 'Compound.140' }} />
              <mesh name="Compound141" geometry={nodes.Compound141.geometry} material={materials.mat_1} userData={{ name: 'Compound.141' }} />
              <mesh name="Compound142" geometry={nodes.Compound142.geometry} material={materials.mat_0} userData={{ name: 'Compound.142' }} />
              <mesh name="Compound143" geometry={nodes.Compound143.geometry} material={materials.mat_0} userData={{ name: 'Compound.143' }} />
              <mesh name="Compound144" geometry={nodes.Compound144.geometry} material={materials.mat_0} userData={{ name: 'Compound.144' }} />
              <mesh name="Compound145" geometry={nodes.Compound145.geometry} material={materials.mat_0} userData={{ name: 'Compound.145' }} />
              <mesh name="Compound146" geometry={nodes.Compound146.geometry} material={materials.mat_1} userData={{ name: 'Compound.146' }} />
              <mesh name="Compound147" geometry={nodes.Compound147.geometry} material={materials.mat_1} userData={{ name: 'Compound.147' }} />
              <mesh name="Compound148" geometry={nodes.Compound148.geometry} material={materials.mat_0} userData={{ name: 'Compound.148' }} />
              <mesh name="Compound149" geometry={nodes.Compound149.geometry} material={materials.mat_0} userData={{ name: 'Compound.149' }} />
              <mesh name="Compound150" geometry={nodes.Compound150.geometry} material={materials.mat_0} userData={{ name: 'Compound.150' }} />
              <mesh name="Compound151" geometry={nodes.Compound151.geometry} material={materials.mat_0} userData={{ name: 'Compound.151' }} />
              <mesh name="Compound152" geometry={nodes.Compound152.geometry} material={materials.mat_2} userData={{ name: 'Compound.152' }} />
              <mesh name="Compound153" geometry={nodes.Compound153.geometry} material={materials.mat_0} userData={{ name: 'Compound.153' }} />
              <mesh name="Compound154" geometry={nodes.Compound154.geometry} material={materials.mat_0} userData={{ name: 'Compound.154' }} />
              <mesh name="Compound155" geometry={nodes.Compound155.geometry} material={materials.mat_0} userData={{ name: 'Compound.155' }} />
              <mesh name="Compound156" geometry={nodes.Compound156.geometry} material={materials.mat_0} userData={{ name: 'Compound.156' }} />
              <mesh name="Compound157" geometry={nodes.Compound157.geometry} material={materials.mat_0} userData={{ name: 'Compound.157' }} />
              <mesh name="Compound158" geometry={nodes.Compound158.geometry} material={materials.mat_0} userData={{ name: 'Compound.158' }} />
              <mesh name="Compound159" geometry={nodes.Compound159.geometry} material={materials.mat_0} userData={{ name: 'Compound.159' }} />
              <mesh name="Compound160" geometry={nodes.Compound160.geometry} material={materials.mat_0} userData={{ name: 'Compound.160' }} />
              <mesh name="Compound161" geometry={nodes.Compound161.geometry} material={materials.mat_0} userData={{ name: 'Compound.161' }} />
              <mesh name="Compound162" geometry={nodes.Compound162.geometry} material={materials.mat_0} userData={{ name: 'Compound.162' }} />
              <mesh name="Compound163" geometry={nodes.Compound163.geometry} material={materials.mat_0} userData={{ name: 'Compound.163' }} />
              <mesh name="Compound164" geometry={nodes.Compound164.geometry} material={materials.mat_0} userData={{ name: 'Compound.164' }} />
              <mesh name="Compound165" geometry={nodes.Compound165.geometry} material={materials.mat_0} userData={{ name: 'Compound.165' }} />
              <mesh name="Compound166" geometry={nodes.Compound166.geometry} material={materials.mat_0} userData={{ name: 'Compound.166' }} />
              <mesh name="Compound167" geometry={nodes.Compound167.geometry} material={materials.mat_0} userData={{ name: 'Compound.167' }} />
              <mesh name="Compound168" geometry={nodes.Compound168.geometry} material={materials.mat_0} userData={{ name: 'Compound.168' }} />
              <mesh name="Compound169" geometry={nodes.Compound169.geometry} material={materials.mat_0} userData={{ name: 'Compound.169' }} />
              <mesh name="Compound170" geometry={nodes.Compound170.geometry} material={materials.mat_0} userData={{ name: 'Compound.170' }} />
              <mesh name="Compound171" geometry={nodes.Compound171.geometry} material={materials.mat_0} userData={{ name: 'Compound.171' }} />
              <mesh name="Compound172" geometry={nodes.Compound172.geometry} material={materials.mat_0} userData={{ name: 'Compound.172' }} />
              <mesh name="Compound173" geometry={nodes.Compound173.geometry} material={materials.mat_0} userData={{ name: 'Compound.173' }} />
              <mesh name="Compound174" geometry={nodes.Compound174.geometry} material={materials.mat_0} userData={{ name: 'Compound.174' }} />
              <mesh name="Compound175" geometry={nodes.Compound175.geometry} material={materials.mat_0} userData={{ name: 'Compound.175' }} />
              <mesh name="Compound176" geometry={nodes.Compound176.geometry} material={materials.mat_0} userData={{ name: 'Compound.176' }} />
              <mesh name="Compound177" geometry={nodes.Compound177.geometry} material={materials.mat_0} userData={{ name: 'Compound.177' }} />
              <mesh name="Compound178" geometry={nodes.Compound178.geometry} material={materials.mat_0} userData={{ name: 'Compound.178' }} />
              <mesh name="Compound179" geometry={nodes.Compound179.geometry} material={materials.mat_0} userData={{ name: 'Compound.179' }} />
              <mesh name="Compound180" geometry={nodes.Compound180.geometry} material={materials.mat_0} userData={{ name: 'Compound.180' }} />
              <mesh name="Compound181" geometry={nodes.Compound181.geometry} material={materials.mat_0} userData={{ name: 'Compound.181' }} />
              <mesh name="Compound182" geometry={nodes.Compound182.geometry} material={materials.mat_0} userData={{ name: 'Compound.182' }} />
              <mesh name="Compound183" geometry={nodes.Compound183.geometry} material={materials.mat_0} userData={{ name: 'Compound.183' }} />
              <mesh name="Compound184" geometry={nodes.Compound184.geometry} material={materials.mat_0} userData={{ name: 'Compound.184' }} />
            </group>
          </group>
        </group>
        <group name="Compound185" position={[-1.6654516459, 0.6348426342, 3.1559171677]} rotation={[0, 1.5705346837, 0]} userData={{ name: 'Compound.185' }}>
          <mesh name="Compound186" geometry={nodes.Compound186.geometry} material={nodes.Compound186.material} userData={{ name: 'Compound.186' }} />
        </group>
        <group name="Compound187" position={[-0.005845245, 0.6348426342, 0.8252085447]} rotation={[Math.PI, -4.64e-8, Math.PI]} userData={{ name: 'Compound.187' }}>
          <mesh name="Compound188" geometry={nodes.Compound188.geometry} material={nodes.Compound188.material} userData={{ name: 'Compound.188' }} />
        </group>
        <group name="Compound189" position={[-0.005845245, 0.6348426342, -0.6787285209]} rotation={[Math.PI, -4.64e-8, Math.PI]} userData={{ name: 'Compound.189' }}>
          <mesh name="Compound190" geometry={nodes.Compound190.geometry} material={nodes.Compound190.material} userData={{ name: 'Compound.190' }} />
        </group>
        <group name="Compound191" position={[2.4350998402, 0.6348426342, 0.0652538091]} rotation={[0, 1.5705346837, 0]} userData={{ name: 'Compound.191' }}>
          <mesh name="Compound192" geometry={nodes.Compound192.geometry} material={nodes.Compound192.material} userData={{ name: 'Compound.192' }} />
        </group>
        <mesh name="Compound193" geometry={nodes.Compound193.geometry} material={materials.mat_3} position={[0.4172256291, 0.3198819458, 0.0016317507]} userData={{ name: 'Compound.193' }} />
        <mesh name="Face" geometry={nodes.Face.geometry} material={materials.mat_4} position={[0.4172256291, 0.3198819458, 0.0016317507]} userData={{ name: 'Face' }} />
        <mesh name="Face001" geometry={nodes.Face001.geometry} material={materials.mat_5} position={[0.4172256291, 0.3198819458, 0.0016317507]} userData={{ name: 'Face.001' }} />
        <mesh name="Face002" geometry={nodes.Face002.geometry} material={materials.mat_6} position={[0.4172256291, 0.3198819458, 0.0016317507]} userData={{ name: 'Face.002' }} />
        <mesh name="Face003" geometry={nodes.Face003.geometry} material={materials.mat_4} position={[0.4172256291, 0.3198819458, 0.0016317507]} userData={{ name: 'Face.003' }} />
        <mesh name="Face005" geometry={nodes.Face005.geometry} material={materials.mat_7} position={[0.4172256291, 0.3198819458, 0.0016317507]} userData={{ name: 'Face.005' }} />
        <mesh name="Face006" geometry={nodes.Face006.geometry} material={materials.mat_7} position={[0.4172256291, 0.3198819458, 0.0016317507]} userData={{ name: 'Face.006' }} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/jacdac_light.glb')
