import { Grid } from "@mui/material";
import React from "react";
import Button from "../ui/Button";
import Menu from "@mui/material/Menu";
import { MenuItem } from "@mui/material";


import AddIcon from "@mui/icons-material/Add";

export default function AddModule(props: {addModule}){
    const { addModule } = props;
    
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);

        switch(event.currentTarget.innerHTML.toLowerCase()){
            case('rotary'):
                addModule(event.currentTarget.innerHTML);
                handleClose();
                break;
            case('rgb led'):
                addModule(event.currentTarget.innerHTML);
                handleClose();
                break;
            case ('button'):
                addModule(event.currentTarget.innerHTML);
                handleClose()
                break;
            case ('rgb led ring'):
                addModule(event.currentTarget.innerHTML);
                handleClose();
                break;
            case ('key switch'):
                addModule(event.currentTarget.innerHTML);
                handleClose();
                break;
            case ('slider'):
                addModule(event.currentTarget.innerHTML);
                handleClose();
                break;
            
        }

        
      };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            
            <Grid item>
            <Button
                        id="add-module-button"
                        aria-controls={open ? 'module-list-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        variant="contained"
                        disableElevation
                        onClick={handleClick}
                        endIcon={<AddIcon />}
                    >
                        Add Module
                    </Button>
                    <Menu
                        id="module-list-menu"
                        MenuListProps={{
                        'aria-labelledby': 'add-module-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClick} disableRipple>
                        Rotary
                        </MenuItem>
                        <MenuItem onClick={handleClick} disableRipple>
                        RGB LED
                        </MenuItem>
                        <MenuItem onClick={handleClick} disableRipple>
                        Button
                        </MenuItem>
                        <MenuItem onClick={handleClick} disableRipple>
                        RGB LED Ring
                        </MenuItem>
                        <MenuItem onClick={handleClick} disableRipple>
                        Key Switch
                        </MenuItem>
                        <MenuItem onClick={handleClick} disableRipple>
                        Slider
                        </MenuItem>
                    </Menu>
            </Grid>
        
        </>
    )
}