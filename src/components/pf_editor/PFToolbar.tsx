import { Grid } from "@mui/material"
import React, { useEffect } from "react"
import Button from "../ui/Button"
import Menu from "@mui/material/Menu"
import { MenuItem } from "@mui/material"
import { downloadSVGEnclosure } from "./stencilFunctions"

import { rotateX, flip, deleteObject } from "./editFunctions"

import { MenuItems } from "./PFToolbarMenuItems"

import Object3D from "three"
import { downloadSTLEnclosure } from "./enclosureFunctions"

export default function PF_Toolbar(props: {
    scene: any
    enclosureDimensions: any
    lastClicked: Object3D
    objectRefs
}) {
    const { scene, enclosureDimensions, lastClicked, objectRefs } = props

    // interaction
    const [anchorEl, setAnchorEl] = React.useState(null)

    // remove this in favour of handle select
    const handleClick = (index, event) => {
        setAnchorEl({ [index]: event.currentTarget })
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    //TODO: use object store for this
    const handleSelect = (index: string) => {

        switch (index.toLowerCase().replace(/\s/g, "")) {
            case "new":
                return
            case "open":
                return
            case "newcarrierpcb":
                return

            // etc TODO: complete menu item to function binding

            case "rotate":
                lastClicked.current && rotateX(lastClicked.current)
                handleClose()
                return
            case "flip":
                lastClicked.current && flip(lastClicked.current)
                handleClose()
                return
            case "delete":
                lastClicked.current &&
                    deleteObject(lastClicked.current, objectRefs)
                handleClose()
                return

            case "enclosurestl":
                downloadSTLEnclosure({height: 100, width: 20, depth: 100}, scene)
                handleClose()
                return

            case "enclosuresvg":
                downloadSVGEnclosure(enclosureDimensions, scene)
                handleClose()
                return
        }
    }

    return (
        <>
            <Grid container>
                {Object.keys(MenuItems).map((item, index) => (
                    <>
                        <Grid item>
                            <Button
                                color="inherit"
                                onClick={e => handleClick(index, e)}
                            >
                                {item} <i className="fas fa-caret-down" />
                            </Button>
                            <Menu
                                anchorEl={anchorEl && anchorEl[index]}
                                keepMounted
                                open={anchorEl && Boolean(anchorEl[index])}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "center",
                                }}
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "center",
                                }}
                            >
                                {MenuItems[item].map((menuitem, menuindex) => (
                                    <MenuItem
                                        id={menuitem.title}
                                        key={menuindex}
                                        selected={menuitem === item}
                                        onClick={e => {
                                            handleSelect(menuitem.title, e)
                                        }}
                                    >
                                        {menuitem.title}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Grid>
                    </>
                ))}
            </Grid>
        </>
    )
}
