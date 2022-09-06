import React, { useState, useEffect, useRef } from "react"
import { Canvas } from "@react-three/fiber"
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
import EnclosureOptions from "../../components/pf_editor/EnclosureOptions"
import { route } from "../../components/pf_editor/editFunctions"
import InfoPanel from "../../components/pf_editor/InfoPanel"

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
        height: 100,
        width: 100,
        depth: 35,
    })

    const [traces, setTraces] = useState({ power: [], data: [] })

    // lock/unlock orbit
    const [lockOrbit, setLockOrbit] = useState(false)

    // enclosure visible
    const [enclosureVisible, setEnclosureVisible] = useState(false)
    const [enclosureOptionsOpen, setEnclosureOptionsOpen] = useState(false)

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

    const [cheatChange, setCheatChange] = useState(100)

    const addModule = async moduleName => {
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
                scene={editorScene}
                traces={traces}
                setTraces={setTraces}
            />,
        ])
    }

    return (
        <>
            <h1 top="50px">Productizer</h1>
            <Grid container spacing={4}>
                <Grid item xs={1}></Grid>

                <Grid item xs={8}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Grid container spacing={4} direction="row">
                            <Grid item>
                                <AddModule addModule={addModule} />
                            </Grid>
                            {bus.connected && (
                                <Grid item>
                                    <AddConnectedModule
                                        addModule={addModule}
                                        devices={devices}
                                        objects={objects}
                                        setObjects={setObjects}
                                        setIsDragging={setIsDragging}
                                        lastClicked={lastClicked}
                                        floorPlane={floorPlane}
                                        setLastClicked={setLastClicked}
                                        scene={editorScene}
                                        setCarrierPCBDimensions={
                                            setCarrierPCBDimensions
                                        }
                                        route={route}
                                        setCheatChange={setCheatChange}
                                    ></AddConnectedModule>
                                </Grid>
                            )}

                            <Grid item>
                                <PFToolbar
                                    traces={traces}
                                    carrierPCBDimensions={carrierPCBDimensions}
                                    lastClicked={
                                        lastClicked ? lastClicked : undefined
                                    }
                                    objectRefs={objects}
                                    enclosureDimensions={enclosureDimensions}
                                    scene={editorScene}
                                    setEnclosureOptionsOpen={
                                        setEnclosureOptionsOpen
                                    }
                                ></PFToolbar>
                            </Grid>

                            <Grid item>
                                <PFToolPanel
                                    lastClicked={
                                        lastClicked ? lastClicked : undefined
                                    }
                                    objectRefs={objects}
                                    addModule={addModule}
                                    carrierPCBDimensions={carrierPCBDimensions}
                                    setCarrierPCBDimensions={
                                        setCarrierPCBDimensions
                                    }
                                    enclosureDimensions={enclosureDimensions}
                                    setEnclosureDimensions={
                                        setEnclosureDimensions
                                    }
                                    enclosureVisible={enclosureVisible}
                                    setEnclosureVisible={setEnclosureVisible}
                                    setEnclosureOptionsOpen={
                                        setEnclosureOptionsOpen
                                    }
                                    scene={editorScene}
                                    traces={traces}
                                    setTraces={setTraces}
                                    lockOrbit={lockOrbit}
                                    setLockOrbit={setLockOrbit}
                                    cheatChange={cheatChange}
                                ></PFToolPanel>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            spacing={2}
                            columns={12}
                            direction="row"
                            padding="20px"
                        >
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
                                    {enclosureOptionsOpen && (
                                        <EnclosureOptions
                                            enclosureDimensions={
                                                enclosureDimensions
                                            }
                                            enclosureOptionsOpen={
                                                enclosureOptionsOpen
                                            }
                                            setEnclosureOptionsOpen={
                                                setEnclosureOptionsOpen
                                            }
                                            scene={editorScene}
                                        ></EnclosureOptions>
                                    )}
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

                                        {/*   <gridHelper
                                args={[
                                    100,
                                    10,
                                    new THREE.Color(0xffffff),
                                    new THREE.Color(0xffffff),
                                ]}
                                position={[0, 2, 0]}
                                rotation={[0, 0, 0]}
                            /> */}

                                        <CarrierPCB
                                            width={carrierPCBDimensions.width}
                                            height={carrierPCBDimensions.height}
                                            rotation={[(Math.PI / 2) * 3, 0, 0]}
                                            position={[0, 6, 0]}
                                            color={"green"}
                                        />

                                        {enclosureVisible && (
                                            <Enclosure
                                                height={
                                                    enclosureDimensions.height
                                                }
                                                width={
                                                    enclosureDimensions.width
                                                }
                                                depth={
                                                    enclosureDimensions.depth
                                                }
                                            />
                                        )}

                                        <Objects objects={objects}></Objects>

                                        <OrthographicCamera
                                            makeDefault
                                            zoom={5}
                                            position={[0, 40, 0]}
                                            near={-1000}
                                            far={10000}
                                            up={[1, 0, 0]}
                                            /* rotateZ={THREE.MathUtils.degToRad(-90)} */
                                        />

                                        <OrbitControls
                                            minZoom={-10}
                                            maxZoom={50}
                                            enabled={!isDragging && !lockOrbit}
                                        />
                                    </Canvas>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>

                <Grid item xs={3}>
                    <InfoPanel></InfoPanel>
                </Grid>
            </Grid>
        </>
    )
}

// eslint-disable-next-line react/prop-types
function Objects({ objects }) {
    return <React.Fragment>{objects}</React.Fragment>
}
