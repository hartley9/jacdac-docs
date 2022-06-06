import { Grid } from "@mui/material";
import React from "react";
import Button from "../ui/Button";
import Menu from "@mui/material/Menu";
import { MenuItem } from "@mui/material";
import { deviceToModelMap } from "./deviceToModelMap";

import AddIcon from "@mui/icons-material/Add";

export default function AddModule(props: {addModule, devices}){
    const { addModule, devices } = props;
    
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);

        devices.forEach(device => {

            if (deviceToModelMap[device.productIdentifier.toString()]){
                const foundDevice = deviceToModelMap[device.productIdentifier.toString()];
                addModule(foundDevice)
            }
        })
      };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

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