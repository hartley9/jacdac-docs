import { Box, Button, Typography } from "@mui/material"
import React, { useContext } from "react"
// tslint:disable-next-line: no-submodule-imports
import JacdacContext, { JacdacContextProps } from "../../jacdac/Context"
import Alert from "../ui/Alert"
import DbContext, { DbContextProps } from "../DbContext"
// tslint:disable-next-line: match-default-export-name tslint:disable-next-line: no-submodule-imports
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import useChange from "../../jacdac/useChange"
import useSnackbar from "../hooks/useSnackbar"
import AlertSwitch from "../ui/AlertSwitch"
import useProxy from "../../jacdac/useProxy"

export default function SafeBootAlert(props: { proxy?: boolean }) {
    const { proxy } = props
    const { bus } = useContext<JacdacContextProps>(JacdacContext)
    const { db } = useContext<DbContextProps>(DbContext)
    const { enqueueSnackbar } = useSnackbar()
    const safeBoot = useChange(bus, _ => _.safeBoot)
    const firmwares = db?.firmwares

    const handleRecovery = async () => (bus.safeBoot = !bus.safeBoot)
    const handleClear = async () => {
        await firmwares.clear()
        enqueueSnackbar("firmwares cleared", "info")
    }
    useProxy(safeBoot || proxy)
    return (
        <>
            <AlertSwitch
                severity="info"
                title="recovery mode"
                checked={safeBoot}
                onChecked={handleRecovery}
            >
                If your module is malfunctioning from the start, you can flash
                it in bootloader mode. Turn on recovery mode and unplug/replug
                any malfunctioning device to switch it to bootloader mode
                (glowing status LED). Once your module is flashed, turn off
                recovery mode and unplug/replug your module again.
            </AlertSwitch>
            {safeBoot && (
                <Alert severity="warning">
                    <Button
                        size="small"
                        variant="outlined"
                        disabled={!firmwares}
                        onClick={handleClear}
                        startIcon={<DeleteForeverIcon />}
                    >
                        clear cache
                    </Button>
                    <Box mr={1}>
                        <Typography component="span" variant="caption">
                            Delete all firmware cached in the browser. The
                            firmware will have to be deleted again from this
                            interface.
                        </Typography>
                    </Box>
                </Alert>
            )}
        </>
    )
}
