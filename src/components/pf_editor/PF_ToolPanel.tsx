import React from "react";
import IconButtonWithTooltip from "../ui/IconButtonWithTooltip";
import { Grid } from "@mui/material";

//import icons
import RouteIcon from '@mui/icons-material/Route';
import Delete from "@mui/icons-material/Delete";
import RotateLeft from "@mui/icons-material/RotateRight";

import {rotateX, deleteObject} from "./editFunctions"
import SliderWithLabel from "../ui/SliderWithLabel";

import * as THREE from "three"


export default function PF_ToolPanel(props: {lastClicked: THREE.Object3D, objectRefs: [], carrierPCBDimensions: {height: number, width: number}, setCarrierPCBDimensions, route}){
    const {lastClicked, objectRefs, carrierPCBDimensions, setCarrierPCBDimensions, route} = props;

    //TODO: Use object store for this
    function carrierPCBDimensionChange(e, type){
        switch(type){
            case 'width':
                setCarrierPCBDimensions({
                    height: carrierPCBDimensions.height,
                    width: e.target.value, 
                });
                break;
            case 'height': 
                setCarrierPCBDimensions({
                    height: e.target.value, 
                    width: carrierPCBDimensions.width
                })
        }
    }

    return (
        <>
            <Grid container>
                <Grid item>
                    <SliderWithLabel onChange={(e) => {carrierPCBDimensionChange(e, 'height')}} id='carrierPCBHeightSlider' label="Carrier PCB height" defaultValue={100} min={10} max={500}></SliderWithLabel>
                </Grid>
                <Grid item>
                    <SliderWithLabel onChange={(e) => {carrierPCBDimensionChange(e, 'width')}}id='carrierPCBWidthSlider' label="Carrier PCB width" defaultValue={100} min={10} max={500}></SliderWithLabel>
                </Grid>
                <Grid item>
                    <IconButtonWithTooltip title={"Rotate module"} onClick={() => {rotateX(lastClicked.current)}}color="primary" aria-label="Auto-route">
                        <RotateLeft />
                    </IconButtonWithTooltip>
                </Grid>
                <Grid item>
                    <IconButtonWithTooltip title={"Delete module"} onClick={() => {deleteObject(lastClicked.current, objectRefs)}} color="primary" aria-label="Auto-route">
                        <Delete />
                    </IconButtonWithTooltip>
                </Grid>
                <Grid item>
                    <IconButtonWithTooltip title={"Auto-route"} onClick={route} color="primary" aria-label="Auto-route">
                        <RouteIcon />
                    </IconButtonWithTooltip>
                </Grid>
            </Grid>    
            
        
        </>
    )
}