import { Button } from "@material-ui/core"
import { Alert } from "@material-ui/lab"
import React, { useContext, useState } from "react"
import JDDevice from "../../../jacdac-ts/src/jdom/device"
import {
    flashFirmwareBlob,
    updateApplicable,
    FirmwareBlob,
} from "../../../jacdac-ts/src/jdom/flashing"
import JacdacContext, { JacdacContextProps } from "../../jacdac/Context"
import CircularProgressWithLabel from "../ui/CircularProgressWithLabel"
import AppContext from "../AppContext"
import useChange from "../../jacdac/useChange"
import useMounted from "./../hooks/useMounted"
import useDeviceSpecification from "../../jacdac/useDeviceSpecification"

export function FlashDeviceButton(props: {
    device: JDDevice
    blob: FirmwareBlob
    ignoreFirmwareCheck?: boolean
}) {
    const { device, blob, ignoreFirmwareCheck } = props
    const { bus } = useContext<JacdacContextProps>(JacdacContext)
    const specification = useDeviceSpecification(device)
    const { setError } = useContext(AppContext)
    const [progress, setProgress] = useState(0)
    const firmwareInfo = useChange(device, d => d?.firmwareInfo)
    const update =
        ignoreFirmwareCheck ||
        (blob?.version &&
            firmwareInfo?.version &&
            updateApplicable(firmwareInfo, blob))
    const upToDate = blob?.version && blob.version === firmwareInfo.version
    const flashing = useChange(device, d => !!d?.flashing)
    const noFirmware = !specification?.repo
    const missing = !device || !blob
    const disabled = flashing
    const mounted = useMounted()

    const handleFlashing = async () => {
        if (device.flashing) return
        try {
            setProgress(0)
            device.flashing = true // don't refresh registers while flashing
            const updateCandidates = [firmwareInfo]
            await flashFirmwareBlob(
                bus,
                blob,
                updateCandidates,
                ignoreFirmwareCheck,
                prog => {
                    if (mounted()) setProgress(prog)
                }
            )
            // trigger info
            device.firmwareInfo = undefined
        } catch (e) {
            if (mounted()) setError(e)
        } finally {
            device.flashing = false
        }
    }

    // tslint:disable-next-line: react-this-binding-issue
    return noFirmware ? (
        <Alert severity="info">Firmware update not supported</Alert>
    ) : missing ? (
        <Alert severity="info">No firmware available</Alert>
    ) : flashing ? (
        <CircularProgressWithLabel value={progress} />
    ) : firmwareInfo || update ? (
        <>
            {upToDate && <Alert severity="success">Up to date!</Alert>}
            <Button
                aria-label={`flash ${firmwareInfo.version} to device`}
                disabled={disabled}
                variant="contained"
                color={"primary"}
                onClick={handleFlashing}
            >
                Flash
            </Button>
        </>
    ) : (
        <Alert severity="info">No firmware available</Alert>
    )
}
