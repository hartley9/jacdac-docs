import React, { useEffect, useRef, useState } from "react"
import IconButtonWithTooltip from "../ui/IconButtonWithTooltip"
import { Checkbox, FormControlLabel, FormGroup, Grid, TextField } from "@mui/material"

//import icons
import RouteIcon from "@mui/icons-material/Route"
import Delete from "@mui/icons-material/Delete"
import RotateLeft from "@mui/icons-material/RotateRight"
import Cameraswitch from "@mui/icons-material/Cameraswitch"
import FileDownloadIcon from "@mui/icons-material/FileDownload"

import { rotateX, deleteObject, route } from "./editFunctions"
import SliderWithLabel from "../ui/SliderWithLabel"

import * as THREE from "three"
import { downloadSTLEnclosure } from "./enclosureFunctions"
import { generateGerber } from "./generateGerber"

export default function PFToolPanel(props: {
    lastClicked: THREE.Object3D
    objectRefs: []
    carrierPCBDimensions: { height: number; width: number }
    setCarrierPCBDimensions
    enclosureDimensions: { height: number; width: number; depth: number }
    setEnclosureDimensions
    enclosureVisible: boolean
    setEnclosureVisible
    setEnclosureOptionsOpen
    scene
    traces, 
    setTraces, 
    cheatChange
}) {
    const {
        lastClicked,
        objectRefs,
        carrierPCBDimensions,
        setCarrierPCBDimensions,
        enclosureDimensions,
        setEnclosureDimensions,
        enclosureVisible,
        setEnclosureVisible,
        setEnclosureOptionsOpen,
        scene,
        traces, 
        setTraces, 
        cheatChange
    } = props

    const enclosureVisibleCheckbox = useRef()

    const heightCheat = useRef();

    const [heightState, setHeightState] = useState(enclosureDimensions.height)

    useEffect(() => {
        setHeightState(cheatChange)
        console.log(cheatChange)
    }, [cheatChange])


    function handleExport(){
        downloadSTLEnclosure(
            {
                height: enclosureDimensions.height,
                width: enclosureDimensions.width,
                depth: enclosureDimensions.depth,
            },
            scene, 
        )

        generateGerber(scene, traces, carrierPCBDimensions)
    }


    //TODO: Use object store for this
    function carrierPCBDimensionChange(e, type) {
        const value = parseInt(e.target.value)
        switch (type) {
            case "width":
                setEnclosureDimensions({
                    height: carrierPCBDimensions.height,
                    width: value,
                    depth: enclosureDimensions.depth,
                })

                setCarrierPCBDimensions({
                    height: carrierPCBDimensions.height,
                    width: value,
                })
                break
            case "height":
                setEnclosureDimensions({
                    height: value,
                    width: carrierPCBDimensions.width,
                    depth: enclosureDimensions.depth,
                })


                setHeightState(value)

                setCarrierPCBDimensions({
                    height: value,
                    width: carrierPCBDimensions.width,
                })
        }
    }

    function enclosureDimensionChange(e, type) {
        switch (type) {
            case "height":
                setEnclosureDimensions({
                    width: enclosureDimensions.width,
                    height: e.target.value,
                    depth: enclosureDimensions.depth,
                })
                break
            case "width":
                setEnclosureDimensions({
                    width: e.target.value,
                    height: enclosureDimensions.height,
                    depth: enclosureDimensions.depth,
                })
                break
            case "depth":
                setEnclosureDimensions({
                    width: enclosureDimensions.width,
                    height: enclosureDimensions.height,
                    depth: e.target.value,
                })
                break
        }
    }

    return (
        <>
            <Grid container>
                <Grid item /* xs={3} */>
                <TextField
                        ref={heightCheat}
                        onChange={e => {
                            console.log('height change and e, : ', e)
                            carrierPCBDimensionChange(e, "height")
                            setHeightState(parseFloat(e.target.value))
                            //setCheatChange(e.target.value)
                        }}
                        value={`${heightState}`}
                        id="carrierPCBHeightSlider"
                        label="PCB height"
                        defaultValue={100}
                        style={{width: 100}}
                        
                    ></TextField>
                   {/*  <SliderWithLabel
                        onChange={e => {
                            carrierPCBDimensionChange(e, "height")
                        }}
                        id="carrierPCBHeightSlider"
                        label="PCB height"
                        defaultValue={100}
                        min={10}
                        max={150}
                    ></SliderWithLabel> */}
                </Grid>
                <Grid item /* xs={3} */>
                <TextField
                        onChange={e => {
                            console.log('width change and e, : ', e.target.value)
                            carrierPCBDimensionChange(e, "width")
                        }}
                        id="carrierPCBWidthSlider"
                        label="PCB width"
                        defaultValue={100}
                        style={{width: 100}}    
                    ></TextField>
                    {/* <SliderWithLabel
                        onChange={e => {
                            carrierPCBDimensionChange(e, "width")
                        }}
                        id="carrierPCBWidthSlider"
                        label="PCB width"
                        defaultValue={100}
                        min={10}
                        max={150}
                    ></SliderWithLabel> */}
                    {/* <TextField onChange={(e) => {carrierPCBDimensionChange(e, 'width')}} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} /> */}
                </Grid>
                <Grid item>
                    <IconButtonWithTooltip
                        title={"Change View"}
                        onClick={() => {
                            //rotateX(lastClicked.current)
                        }}
                        color="primary"
                        aria-label="Change View"
                    >
                        <Cameraswitch />
                    </IconButtonWithTooltip>
                </Grid>
                <Grid item>
                    <IconButtonWithTooltip
                        title={"Rotate module"}
                        onClick={() => {
                            rotateX(lastClicked.current)
                        }}
                        color="primary"
                        aria-label="Rotate"
                    >
                        <RotateLeft />
                    </IconButtonWithTooltip>
                </Grid>
                <Grid item>
                    <IconButtonWithTooltip
                        title={"Delete module"}
                        onClick={() => {
                            deleteObject(lastClicked.current, objectRefs)
                        }}
                        color="primary"
                        aria-label="delete"
                    >
                        <Delete />
                    </IconButtonWithTooltip>
                </Grid>
                <Grid item>
                    <IconButtonWithTooltip
                        title={"Auto-route"}
                        onClick={() => {
                            setTraces(route(scene));
                        }}
                        color="primary"
                        aria-label="Auto-route"
                    >
                        <RouteIcon />
                    </IconButtonWithTooltip>
                </Grid>
                <Grid item>
                    <IconButtonWithTooltip
                        title={"Export"}
                        onClick={() => {
                          //  setEnclosureOptionsOpen(true)
                          handleExport();
                        }}
                        color="primary"
                        aria-label="Export"
                    >
                        <FileDownloadIcon />
                    </IconButtonWithTooltip>
                </Grid>

                {/* checkbox for enclosure visible/notvisible*/}
                {/*  <Grid item>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox ref={enclosureVisibleCheckbox} onChange={() => {setEnclosureVisible(!enclosureVisible)}}/>} label="Enclosure" />
                    
                    </FormGroup>
                </Grid> */}

      {/*           <Grid item>
                <TextField
                        onChange={e => {
                            enclosureDimensionChange(e, "depth")
                        }}
                        id="enclsoureDepthSlider"
                        label="Enclosure depth"
                    ></TextField>
                </Grid> */}
            </Grid>
        </>
    )
}

