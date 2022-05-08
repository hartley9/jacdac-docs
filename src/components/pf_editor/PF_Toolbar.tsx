import { Grid } from "@mui/material";
import React from "react";
import Button from "../ui/Button";
import Menu from "@mui/material/Menu";
import { MenuItem } from "@mui/material";

import {rotateX, flip, deleteObject} from "./editFunctions"

import {MenuItems} from "./PFToolbarMenuItems";

export default function PF_Toolbar(props: {lastClicked: any, objectRefs: any[]}){
    const {lastClicked, objectRefs} = props


    // interaction
    const [anchorEl, setAnchorEl] = React.useState(null);

    // remove this in favour of handle select
    const handleClick = (index, event) => {
        setAnchorEl({ [index]: event.currentTarget });


        console.log('index');
        console.log(index);
      };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    //TODO: use object store for this
    const handleSelect = (index: string, event) => {
        console.log('menu click');
        console.log(index.toLowerCase().replace(/\s/g, ''))
            if (lastClicked.current){

                switch(index.toLowerCase().replace(/\s/g, '')){
                    case('new'):
                        return;
                    case('open'):
                        return;
                    case('newcarrierpcb'):
                        return 
                    // etc TODO: complete menu item to function binding
                    
                    case('rotate'):
                        rotateX(lastClicked.current);
                        return;
                    case('flip'):
                        flip(lastClicked.current);
                        return
                    case('delete'):
                        deleteObject(lastClicked.current, objectRefs)
                } 
            }

    }


    return (
        <>
            
                <Grid container>
                    {Object.keys(MenuItems).map((item, index) => (
                        <>
                        <Grid item>
                        <Button color="inherit" onClick={(e) => handleClick(index, e)}>
                        {item} <i className="fas fa-caret-down" />
                    </Button>
                    <Menu
                        anchorEl={anchorEl && anchorEl[index]}
                        keepMounted
                        open={anchorEl && Boolean(anchorEl[index])}
                        onClose={handleClose}
                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                        transformOrigin={{ vertical: "top", horizontal: "center" }}
                    >
                    
                        {MenuItems[item].map((menuitem, menuindex) => (
                            <MenuItem
                                id={menuitem.title}
                                key={menuindex}
                                selected={menuitem === item}
                                onClick={(e) => {handleSelect(menuitem.title, e)}}
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
