import { Grid } from "@mui/material"
import React, { useEffect } from "react"
import { flushSync } from "react-dom";
import Button from "../ui/Button"
import { deviceToModelMap } from "./deviceToModelMap"

import AddIcon from "@mui/icons-material/Add"
import PF_Module from "../models/PF_Module"
import { randomUInt } from "../../../jacdac-ts/src/jdom/random"

import {BP2D} from "binpackingjs"
import { getModuleInfo } from "./editFunctions"
const { Bin, Box, Packer } = BP2D;

const bin_1 = new Bin(100, 100);
const boxes = [
  new Box(15, 10), // Should be added last (smaller)
  new Box(50, 45), // Fits in bin_2 better than in bin_1
  new Box(40, 40),
];
const packer = new Packer([bin_1]);
const packed_boxes = packer.pack(boxes);

console.log('packed boxes: ', packed_boxes);




export default function AddConnectedModule(props: {
    addModule
    devices
    objects
    setObjects
    setIsDragging
    lastClicked
    floorPlane
    setLastClicked
    scene
    setCarrierPCBDimensions 
    route
    setCheatChange
}) {
    const {
        addModule,
        devices,
        objects,
        setObjects,
        setIsDragging,
        lastClicked,
        floorPlane,
        setLastClicked,
        scene, 
        setCarrierPCBDimensions,
        route,
        setCheatChange
    } = props

    useEffect(() => {
        
    }, [objects]) 

    /* let runBinpack = false;
    useEffect(() => {
        if (objects.length >= moduleNames.length && !runBinpack){
            binpack()
        
        }
    
    }, [objects]) */

    const moduleNames = ["slider", "slider", "button", "button", ]

    const myCheatObject = [
        {name: "key switch", position: [-15,8,-30], rotation: [0,-1.5708*4,0]},
        {name: "key switch", position: [-15,8,0], rotation: [0,-1.5708*4,0]},
        {name: "key switch", position: [-15,8,30], rotation: [0,-1.5708*4,0]},
        {name: "microbit adapter", position: [20,8,0], rotation: [0,-1.5708,0]},
    ]
    
    const binpack = () => {

        const moduleInfo = getModuleInfo(scene);
       // runBinpack = true;


    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)

        //example of plug and populate
        
        const moduleComponents = []

        //devices.forEach(device => {
        myCheatObject.forEach(item => {
            const topLevelUUID = crypto.randomUUID()
            moduleComponents.push(
                <PF_Module
                    name={topLevelUUID}
                    moduleName={item.name}
                    key={Math.random()}
                    id={crypto.randomUUID()}
                    setIsDragging={setIsDragging}
                    setLastClicked={setLastClicked}
                    lastClicked={lastClicked}
                    floorPlane={floorPlane}
                    position={item.position}
                    rotation={item.rotation}
                
                />
            )
        })

        setCheatChange(78);

        setCarrierPCBDimensions({height: 78, width: 100, depth: 80})
        route(scene)

        flushSync(() => {
             setObjects([...objects, ...moduleComponents]);
    
        });

        flushSync(() => {
            console.log('objects in 2nd flush sync: ')
            console.log(objects)
            binpack();
        })
    }

    return (
        <>
            <Grid item>
                <Button
                    id="add-connected-module-button"
                    //aria-controls={open ? 'module-list-menu' : undefined}
                    aria-haspopup="true"
                    //  aria-expanded={open ? 'true' : undefined}
                    variant="contained"
                    disableElevation
                    onClick={handleClick}
                    endIcon={<AddIcon />}
                >
                    Add Connected
                </Button>
            </Grid>
        </>
    )
}
