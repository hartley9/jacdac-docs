import React, { useState, Suspense, useEffect, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import PaperBox from "../../components/ui/PaperBox"
// import GLBModel from "../../components/models/GLBModel"
import { OrthographicCamera, OrbitControls } from "@react-three/drei"
import * as THREE from "three"
import { Box, Grid } from "@mui/material"
import CarrierPCB from "../../components/pf_editor/CarrierPCB"

import PFToolbar from "../../components/pf_editor/PFToolbar"
import AddModule from "../../components/pf_editor/AddModule"

import PFToolPanel from "../../components/pf_editor/PFToolPanel"
import PF_Module from "../../components/models/PF_Module"

import Enclosure from "../../components/pf_editor/Enclosure"

import useDevices from "../../components/hooks/useDevices"
import useBus from "../../jacdac/useBus"
import AddConnectedModule from "../../components/pf_editor/AddConnectedModule"

export default function Page() {
    // connected jacdac devices
    const devices = useDevices({
        physical: true,
        announced: true,
        ignoreInfrastructure: true,
        productIdentifier: true,
    })

    const bus = useBus()

    // Canvas
    const canvasRef = useRef()

    // carrier pcb
    const [carrierPCBDimensions, setCarrierPCBDimensions] = useState({
        height: 100,
        width: 100,
    })

    // enclosure
    const [enclosureDimensions, setEnclosureDimensions] = useState({
        height: 20,
        width: 20,
        depth: 20,
    })

    // enclosure visible
    const [enclosureVisible, setEnclosureVisible] = useState(false)

    //array to hold all jacdac module objects
    const [objects, setObjects] = useState([])

    // stores current state of threejs scene
    const [editorScene, setEditorScene] = useState(null)

    // module or object selected or 'lastClicked' by the user
    const [lastClicked, setLastClicked] = useState(null)

    // aabb box to get size and location of module
    const box3 = useRef()
    useEffect(() => {
        console.log("heres my box")
        console.log(box3)

        if (objects.length > 0) {
            if (box3.current) box3.current.setFromObject(objects[0].current)
        }
    }, [box3])

    // Object dragging state used to toggle orbit
    const [isDragging, setIsDragging] = useState(false)
    const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0)

    const addModule = moduleName => {
        console.log(editorScene)

        const topLevelUUID = crypto.randomUUID()
        setObjects([
            ...objects,
            <PF_Module
                name={topLevelUUID}
                moduleName={moduleName}
                key={Math.random()}
                id={crypto.randomUUID()}
                setIsDragging={setIsDragging}
                setLastClicked={setLastClicked}
                lastClicked={lastClicked}
                floorPlane={floorPlane}
                position={[0, 8, 0]}
            />,
        ])
    }

    return (
        <>
            <h1>Power Fabricate - Editor</h1>

            {/* <Grid container spacing={2} columns={12} direction="row" alignItems="stretch" height={"100%"}> */}

            <Grid container spacing={2} columns={12} direction="row">
                <Grid item>
                    <AddModule addModule={addModule}></AddModule>
                </Grid>

                <Grid item>
                    <PFToolbar
                        lastClicked={lastClicked ? lastClicked : undefined}
                        objectRefs={objects}
                        enclosureDimensions={enclosureDimensions}
                        scene={editorScene}
                    ></PFToolbar>
                </Grid>

                <Grid item>
                    {bus.connected && (
                        <AddConnectedModule
                            addModule={addModule}
                            devices={devices}
                        ></AddConnectedModule>
                    )}
                </Grid>

                <Grid item>
                    <PFToolPanel
                        lastClicked={lastClicked ? lastClicked : undefined}
                        objectRefs={objects}
                        addModule={addModule}
                        carrierPCBDimensions={carrierPCBDimensions}
                        setCarrierPCBDimensions={setCarrierPCBDimensions}
                        enclosureDimensions={enclosureDimensions}
                        setEnclosureDimensions={setEnclosureDimensions}
                        enclosureVisible={enclosureVisible}
                        setEnclosureVisible={setEnclosureVisible}
                        scene={editorScene}
                    ></PFToolPanel>
                </Grid>
            </Grid>

            <Grid container spacing={2} columns={12} direction="row">
                <Grid
                    item
                    xs={16}
                    direction="column"
                    alignItems="stretch"
                    style={{
                        position: "relative",
                        overflow: "hidden",
                        height: "100vh",
                    }}
                >
                    <Box
                        textAlign="center"
                        height={
                            "100%"
                        } /* item xs={14} direction="column" alignItems="stretch" style={{overflow: "visible", height: "75%" }} */
                    >
                        <Canvas
                            onCreated={({ scene }) => {
                                setEditorScene(scene)
                            }}
                            ref={canvasRef}
                            style={{
                                position: "relative",
                                height: "75%",
                                overflow: "visible",
                            }}
                            shadows
                            onPointerMissed={function () {
                                setLastClicked(null)
                            }}
                        >
                            <ambientLight intensity={1} />
                            <directionalLight
                                intensity={1}
                                castShadow
                                shadow-mapSize-height={1512}
                                shadow-mapSize-width={1512}
                            />
                            <color
                                attach="background"
                                args={["lightblue"]}
                            ></color>

                            <gridHelper
                                args={[
                                    100,
                                    10,
                                    new THREE.Color(0xffffff),
                                    new THREE.Color(0xffffff),
                                ]}
                                position={[0, 2, 0]}
                                rotation={[0, 0, 0]}
                            />

                            <CarrierPCB
                                width={carrierPCBDimensions.width}
                                height={carrierPCBDimensions.height}
                                rotation={[(Math.PI / 2) * 3, 0, 0]}
                                position={[0, 0, 0]}
                                color={"grey"}
                            />

                            {enclosureVisible && (
                                <Enclosure
                                    height={enclosureDimensions.height}
                                    width={enclosureDimensions.width}
                                    depth={enclosureDimensions.depth}
                                />
                            )}

                            <Suspense fallback={null}>
                                <Objects objects={objects}></Objects>
                            </Suspense>

                            <OrthographicCamera
                                makeDefault
                                zoom={5}
                                position={[0, 40, 0]}
                                near={-1000}
                                far={10000}
                            />

                            <OrbitControls
                                minZoom={-10}
                                maxZoom={50}
                                enabled={!isDragging}
                            />
                        </Canvas>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

// eslint-disable-next-line react/prop-types
function Objects({ objects }) {
    return <React.Fragment>{objects}</React.Fragment>
}
