import React, { useRef } from "react";
import IconButtonWithTooltip from "../ui/IconButtonWithTooltip";
import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";

//import icons
import RouteIcon from '@mui/icons-material/Route';
import Delete from "@mui/icons-material/Delete";
import RotateLeft from "@mui/icons-material/RotateRight";

import {rotateX, deleteObject, route} from "./editFunctions"
import SliderWithLabel from "../ui/SliderWithLabel";

import * as THREE from "three"



export default function PFToolPanel(props: {lastClicked: THREE.Object3D, objectRefs: [], carrierPCBDimensions: {height: number, width: number}, setCarrierPCBDimensions, enclosureDimensions: {height: number, width: number, depth: number}, setEnclosureDimensions, enclosureVisible: boolean, setEnclosureVisible, scene}){
    const {lastClicked, objectRefs, carrierPCBDimensions, setCarrierPCBDimensions, enclosureDimensions, setEnclosureDimensions, enclosureVisible, setEnclosureVisible, scene} = props;


    const enclosureVisibleCheckbox = useRef();

    //TODO: Use object store for this
    function carrierPCBDimensionChange(e, type){
        switch(type){
            case 'width':
                setEnclosureDimensions({
                    height: carrierPCBDimensions.height,
                    width: e.target.value, 
                });
                break;
            case 'height': 
                setEnclosureDimensions({
                    height: e.target.value, 
                    width: carrierPCBDimensions.width
                })
        }
    }

    function enclosureDimensionChange(e, type){
        switch(type){
            case 'height':
                setEnclosureDimensions({
                    width: enclosureDimensions.width,
                    height: e.target.value, 
                    depth: enclosureDimensions.depth,
                });
                break;
            case 'width':
                setEnclosureDimensions({
                    width: e.target.value,
                    height: enclosureDimensions.height,
                    depth: enclosureDimensions.depth,
                });
                break
            case 'depth':
                setEnclosureDimensions({
                    width: enclosureDimensions.width,
                    height: enclosureDimensions.height, 
                    depth: e.target.value,
                });
                break;

        }
    }

    return (
        <>
            <Grid container>
                <Grid item>
                    <SliderWithLabel onChange={(e) => {carrierPCBDimensionChange(e, 'height')}} id='carrierPCBHeightSlider' label="Carrier PCB height" defaultValue={100} min={10} max={500}></SliderWithLabel>
                </Grid>
                <Grid item>
                    <SliderWithLabel onChange={(e) => {carrierPCBDimensionChange(e, 'width')}} id='carrierPCBWidthSlider' label="Carrier PCB width" defaultValue={100} min={10} max={500}></SliderWithLabel>
                    {/* <TextField onChange={(e) => {carrierPCBDimensionChange(e, 'width')}} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} /> */}
                </Grid>
                <Grid item>
                    <IconButtonWithTooltip title={"Rotate module"} onClick={() => {rotateX(lastClicked.current)}}color="primary" aria-label="Rotate">
                        <RotateLeft />
                    </IconButtonWithTooltip>
                </Grid>
                <Grid item>
                    <IconButtonWithTooltip title={"Delete module"} onClick={() => {deleteObject(lastClicked.current, objectRefs)}} color="primary" aria-label="delete">
                        <Delete />
                    </IconButtonWithTooltip>
                </Grid>
                <Grid item>

                    
                        <IconButtonWithTooltip title={"Auto-route"} onClick={() => {route(scene)}} color="primary" aria-label="Auto-route">
                            
                        <RouteIcon />
                    </IconButtonWithTooltip>
                </Grid>

                {/* checkbox for enclosure visible/notvisible*/}
                <Grid item>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox ref={enclosureVisibleCheckbox} onChange={() => {setEnclosureVisible(!enclosureVisible)}}/>} label="Enclosure" />
                    
                    </FormGroup>
                </Grid>


                <Grid item>
                    <SliderWithLabel onChange={(e) => {enclosureDimensionChange(e, 'height')}} id='enclsoureHeightSlider' label="Enclosure height"  min={10} max={500}></SliderWithLabel>
                </Grid>

                <Grid item>
                    <SliderWithLabel onChange={(e) => {enclosureDimensionChange(e, 'width')}} id='enclsoureWidthSlider' label="Enclosure width"  min={10} max={500}></SliderWithLabel>
                </Grid>

                <Grid item>
                    <SliderWithLabel onChange={(e) => {enclosureDimensionChange(e, 'depth')}} id='enclsoureDepthSlider' label="Enclosure depth" min={10} max={500}></SliderWithLabel>
                </Grid>

              {/*   <Grid item>
                    <SliderWithLabel onChange={(e) => {carrierPCBDimensionChange(e, 'height')}} id='carrierPCBHeightSlider' label="Carrier PCB height" defaultValue={100} min={10} max={500}></SliderWithLabel>
                </Grid> */}
            </Grid>    
            
        
        </>
    )
}