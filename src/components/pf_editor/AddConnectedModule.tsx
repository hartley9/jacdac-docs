import { Grid } from "@mui/material"
import React from "react"
import Button from "../ui/Button"
import { deviceToModelMap } from "./deviceToModelMap"

import AddIcon from "@mui/icons-material/Add"
import PF_Module from "../models/PF_Module"
import { randomUInt } from "../../../jacdac-ts/src/jdom/random"

export default function AddModule(props: {
    addModule
    devices
    objects
    setObjects
    setIsDragging
    lastClicked
    floorPlane
    setLastClicked
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
    } = props

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)

        //example of plug and populate
        const moduleNames = ["slider", "slider", "button", "button"]
        const moduleComponents = []

        //devices.forEach(device => {
        moduleNames.forEach(item => {
            const topLevelUUID = crypto.randomUUID()
            moduleComponents.push(
                <PF_Module
                    name={topLevelUUID}
                    moduleName={item}
                    key={Math.random()}
                    id={crypto.randomUUID()}
                    setIsDragging={setIsDragging}
                    setLastClicked={setLastClicked}
                    lastClicked={lastClicked}
                    floorPlane={floorPlane}
                    position={[randomUInt(50), 8, randomUInt(50)]}
                />
            )
        })

        setObjects([...objects, ...moduleComponents])
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
