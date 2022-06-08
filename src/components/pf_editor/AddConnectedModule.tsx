import { Grid } from "@mui/material";
import React from "react";
import Button from "../ui/Button";
import { deviceToModelMap } from "./deviceToModelMap";

import AddIcon from "@mui/icons-material/Add";

export default function AddModule(props: {addModule, devices}){
    const { addModule, devices } = props;
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
   // const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);

        devices.forEach(device => {

            if (deviceToModelMap[device.productIdentifier.toString()]){
                const foundDevice = deviceToModelMap[device.productIdentifier.toString()];
                addModule(foundDevice)
            }
        })
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