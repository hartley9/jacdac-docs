import React, { useState, Suspense, useEffect, useRef,  } from "react";
import { Canvas } from "@react-three/fiber";
// import GLBModel from "../../components/models/GLBModel"
import { OrthographicCamera, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Box, Grid } from "@mui/material";
import CarrierPCB from "../../components/pf_editor/CarrierPCB";

import PF_Toolbar from "../../components/pf_editor/PF_Toolbar";
import AddModule from "../../components/pf_editor/AddModule";

import PF_ToolPanel from "../../components/pf_editor/PF_ToolPanel";
import PF_Module from "../../components/models/PF_Module";




export default function Page() {

  const canvasRef = useRef();
  
  // array to hold all jacdac module objects
  const [objects, setObjects] = useState([]);

  // stores current state of threejs scene 
  const [editorScene, setEditorScene] = useState(null)

  // object selected in 3js canvas
  const [selectedObject, setSelectedObject] = useState(null);

  // module or object selected or 'lastClicked' by the user
  const [lastClicked, setLastClicked] = useState(null);

  const [carrierPCBDimensions, setCarrierPCBDimensions] = useState({height: 100, width: 100})

  useEffect(() =>{
    console.log('sel obj');
    console.log(selectedObject)
  }, [selectedObject])

  // Object dragging state used to toggle orbit
  const [isDragging, setIsDragging] = useState(false);
  const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  
  const addModule = (moduleName) => {

    const topLevelUUID = crypto.randomUUID() 
    
    setObjects([...objects,
      <PF_Module name={topLevelUUID} moduleName={moduleName} key={Math.random()} id={crypto.randomUUID()}  setIsDragging={setIsDragging} setLastClicked={setLastClicked} lastClicked={lastClicked} floorPlane={floorPlane} position={[0,8,0]} />
    ]);
  }


  const route = () => {
      editorScene.traverse((obj) => {
        if (obj.name.includes('JD_PWR')){
          console.log('found power');
          const worldPos = new THREE.Vector3();
          obj.getWorldPosition(worldPos)
          console.log(worldPos)

        }
      })
  }

  
  return (
      
    <>
          <h1>Power Fabricate - Editor</h1>
         
      
          <Grid container spacing={1} columns={16} direction="row" alignItems="stretch" height={"100%"}>
          <Grid item xs={3}>
            <AddModule addModule={addModule}></AddModule>
          </Grid>
            <Grid item xs={13}>
              
              <PF_Toolbar 
                lastClicked={lastClicked? lastClicked : undefined}
                objectRefs={objects}
              ></PF_Toolbar>
               
              
              <PF_ToolPanel
                lastClicked={lastClicked? lastClicked : undefined}
                objectRefs={objects}
                addModule={addModule}
                carrierPCBDimensions={carrierPCBDimensions}
                setCarrierPCBDimensions={setCarrierPCBDimensions}
              ></PF_ToolPanel>
            
            </Grid>
           
            
            <Grid item xs={16} direction="column" alignItems="stretch" style={{position: "relative", overflow: "hidden", height: "100vh" }}>
              <Box textAlign="center" height={"100%"}/* item xs={14} direction="column" alignItems="stretch" style={{overflow: "visible", height: "75%" }} */>
                
                <Canvas  onCreated={({ scene }) => {setEditorScene(scene)}} onClick={({ object }) => {console.log('object clicked'); console.log(object)}}
                
                  ref={canvasRef}
                  style={{position: "relative", height: "75%", overflow: "visible"}} shadows onPointerMissed = {function(){setSelectedObject(null);}} >
                  <ambientLight intensity={1} />
                  <directionalLight
                    intensity={1}
                    castShadow
                    shadow-mapSize-height={1512}
                    shadow-mapSize-width={1512}
                  /> 
                  <color attach="background" args={["lightblue"]}></color>

                  <gridHelper args={[100, 10,  new THREE.Color(0xFFFFFF), new THREE.Color(0xFFFFFF)]} position={[0, 2, 0]} rotation={[0, 0, 0]} />
                  
                  
                  <CarrierPCB width={carrierPCBDimensions.width} height={carrierPCBDimensions.height} rotation={[(Math.PI / 2) * 3, 0, 0]} position={[0,0,0]} color={"lightgray"}/>

                  <Suspense fallback={null}>
                    <Objects objects={objects}></Objects>
                  </Suspense>
                  
                  
                  {/* Ignore missing attributes error in OrthographicCamera component */}
                  <OrthographicCamera makeDefault zoom={5} position={[0, 40, 0]} near={-1000} far={10000} />

                <OrbitControls minZoom={-10} maxZoom={50} enabled={!isDragging} /> 
                </Canvas>
                
              </Box>
            </Grid>
          </Grid>
    </>
    
  );
}


// eslint-disable-next-line react/prop-types
function Objects({ objects }) {
  
  return <React.Fragment>
      {objects}
  </React.Fragment>;
}