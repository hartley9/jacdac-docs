import React, { lazy, Suspense, useEffect, useState } from "react"
import {
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    
    DialogTitle,
    FormControl,
    FormControlLabel,
    
    Grid,
    
    InputLabel,
    MenuItem,
    NoSsr,
    Select,
} from "@mui/material"
import { downloadSTLEnclosure, getSTLBlob } from "./enclosureFunctions"
import SVGModelCard from "../models/SVGModelCard"
const STLModelCard = lazy(() => import("../models/STLModelCard"))

const enclosureOptions = {
  exportOptions: {
    format: {
      lid: 'svg', 
      base: 'stl'
    }
  }
}

export default function EnclosureOptions(props: {
    enclosureDimensions: { width: number; height: number }
    enclosureOptionsOpen: boolean
    setEnclosureOptionsOpen
    scene
}) {
    const {
        enclosureDimensions,
        enclosureOptionsOpen,
        setEnclosureOptionsOpen,
        scene,
    } = props

    const [lidExportFormat, setLidExportFormat] = useState("STL")
    const [baseExportFormat, setBaseExportFormat] = useState("STL")

    const [baseURL, setBaseURL] = useState(null);
    const [lidURL, setLidURL] = useState(null);

    const [lidObject, setLidObject] = useState(null)
    const [baseObject, setBaseObject] = useState(null)

    const [genCarrierPCB, setGenCarrierPCB] = useState(true);

    const handleRefreshPreview = async () => {
      const blobs = await getSTLBlob(enclosureDimensions, scene, enclosureOptions);
      console.log('BLOBS')
      console.log(blobs);

      
      setBaseURL(window.URL.createObjectURL(blobs.base));  

      setLidURL(window.URL.createObjectURL(blobs.lid));
      
    }

  

    useEffect(() => {
      enclosureOptions.exportOptions.format.lid = lidExportFormat
      enclosureOptions.exportOptions.format.base = baseExportFormat
    }, [lidExportFormat, baseExportFormat])

    const handleClose = (event) => {
        setEnclosureOptionsOpen(false)

        const value = event.target.value

        //const carrierPCBBoxValue = document.getElementById('isCarrierPCBBox');
        console.log('carrier checkbox val: ', genCarrierPCB)

        if (value && value === "export") {
            downloadSTLEnclosure(
                {
                    height: enclosureDimensions.height,
                    width: enclosureDimensions.width,
                    depth: enclosureDimensions.depth,
                },
                scene, 
                genCarrierPCB
            )
        }
    }
    const handleLidExportFormat = event => {
        setLidExportFormat(event.target.value as string)
    }

    const handleBaseExportFormat = event => {
        setBaseExportFormat(event.target.value as string)
    }

    return (
        <Dialog open={enclosureOptionsOpen} onClose={handleClose} fullScreen>
            <DialogTitle>Enclosure Export Options</DialogTitle>

            <DialogContent aria-label="">
                <h5>Export Formats</h5>
                <FormControl fullWidth>
                    <InputLabel id="lid-export-label">Lid Export</InputLabel>
                    <Select
                        id="lid-export-sel"
                        labelId="lid-export-label"
                        value={lidExportFormat}
                        onChange={handleLidExportFormat}
                        defaultValue="SVG"
                    >
                        <MenuItem value="SVG">SVG</MenuItem>
                        <MenuItem value="STL">STL</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="base-export-label">Base Export</InputLabel>
                    <Select
                        id="base-export-sel"
                        labelId="base-export-label"
                        value={baseExportFormat}
                        onChange={handleBaseExportFormat}
                        defaultValue="STL"
                    >
                        <MenuItem value="SVG">SVG</MenuItem>
                        <MenuItem value="STL">STL</MenuItem>
                    </Select>
                </FormControl>
            {/* </DialogContent>
            
            <DialogContent> */}
                <h5>Module Mounting Options</h5>
                <FormControlLabel
                    labelPlacement="start"
                    control={<Checkbox defaultChecked onClick={(event) => {setGenCarrierPCB(event.target.checked)}} />}
                    label="Generate carrier PCB"
                />
           {/*  </DialogContent>

            <DialogContent> */}
                <h5>Preview</h5>
                
                <Grid container direction='row' spacing={2}>
                {lidURL &&
                  <Grid item xs={6}>
                  <NoSsr>
                          
                    { enclosureOptions.exportOptions.format.lid.toLowerCase() === 'stl' &&
                      <Suspense>
                        <STLModelCard name='Lid' url={lidURL} color="#888"/>
                      </Suspense>
                    }
                    { enclosureOptions.exportOptions.format.lid.toLowerCase() === 'svg' &&
                      <Suspense>
                        <SVGModelCard name='Lid' url={lidURL} color="#888"/>
                      </Suspense>
                    }
                              
                  </NoSsr>
                  </Grid>
                } 

                {baseURL &&
                  <Grid item xs={6}>
                  <NoSsr>
                          
                    { enclosureOptions.exportOptions.format.base.toLowerCase() === 'stl' &&
                      <Suspense>
                        <STLModelCard name='Base' url={baseURL} color="#888"/>
                      </Suspense>
                    }
                    { enclosureOptions.exportOptions.format.base.toLowerCase() === 'svg' &&
                      <Suspense>
                        <SVGModelCard name='Base' url={baseURL} color="#888"/>
                      </Suspense>
                    }
                              
                  </NoSsr>
                  </Grid>
                } 

              </Grid>
                


                <Button onClick={handleRefreshPreview}>Refresh preview</Button>
                
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button value="export" onClick={handleClose}>
                    Export
                </Button>
            </DialogActions>
        </Dialog>
    )
}
