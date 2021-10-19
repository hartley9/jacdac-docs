import React, { ChangeEvent, useCallback, useState } from "react"
import { DashboardServiceProps } from "./DashboardServiceWidget"
import {
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    Grid,
    Switch,
    TextField,
    Typography,
} from "@material-ui/core"
import useServiceClient from "../../jacdac/useServiceClient"
import AzureIoTHubHealthClient from "../../../jacdac-ts/src/clients/azureiothubhealthclient"
import useWidgetTheme from "../widgets/useWidgetTheme"
import {
    AzureIotHubHealthCmd,
    AzureIotHubHealthConnectionStatus,
    AzureIotHubHealthReg,
} from "../../../jacdac-ts/jacdac-spec/dist/specconstants"
import { useId } from "react-use-id-hook"
import SettingsIcon from "@material-ui/icons/Settings"
import IconButtonWithTooltip from "../ui/IconButtonWithTooltip"
import { Button } from "gatsby-material-ui-components"
import CmdButton from "../CmdButton"
import { useRegisterUnpackedValue } from "../../jacdac/useRegisterValue"
import ChipList from "../ui/ChipList"
import WifiIcon from "@material-ui/icons/Wifi"
import WifiOffIcon from "@material-ui/icons/WifiOff"

function ConnectionStringDialog(props: {
    open: boolean
    setOpen: (v: boolean) => void
    client: AzureIoTHubHealthClient
}) {
    const { client, open, setOpen } = props
    const [value, setValue] = useState("")
    const connectionStringId = useId()
    const handleCancel = () => {
        setValue("")
        setOpen(false)
    }
    const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    const handleOk = async mounted => {
        await client.setConnectionString(value || "")
        if (!mounted()) return
        setValue("")
        setOpen(false)
    }
    return (
        <Dialog open={open} fullWidth={true} maxWidth={"lg"}>
            <DialogContent>
                <DialogContentText>
                    Enter device connection string
                    <Typography component="p" variant="caption">
                        Open your IoT Hub in the Azure portal, select IoT
                        Devices, select or create a device, copy the primary or
                        secondary connection string.
                    </Typography>
                </DialogContentText>
                <TextField
                    id={connectionStringId}
                    value={value}
                    label="Value"
                    fullWidth={true}
                    type="password"
                    placeholder="Connection string"
                    onChange={handleValueChange}
                />
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={handleCancel}>
                    Cancel
                </Button>
                <CmdButton
                    variant="contained"
                    color="primary"
                    disabled={!client}
                    onClick={handleOk}
                >
                    Save
                </CmdButton>
            </DialogActions>
        </Dialog>
    )
}

export default function DashboardAzureIoTHubHealth(
    props: DashboardServiceProps
) {
    const { service } = props
    const [open, setOpen] = useState(false)

    const hubNameRegister = service.register(AzureIotHubHealthReg.HubName)
    const [hubName] = useRegisterUnpackedValue<[string]>(hubNameRegister, props)
    const hubDeviceIdRegister = service.register(
        AzureIotHubHealthReg.HubDeviceId
    )
    const [hubDeviceId] = useRegisterUnpackedValue<[string]>(
        hubDeviceIdRegister,
        props
    )
    const connectionStatusRegister = service.register(
        AzureIotHubHealthReg.ConnectionStatus
    )
    const [connectionStatus] = useRegisterUnpackedValue<
        [AzureIotHubHealthConnectionStatus]
    >(connectionStatusRegister, props)
    const factory = useCallback(srv => new AzureIoTHubHealthClient(srv), [])
    const client = useServiceClient(service, factory)
    const color = "primary"
    const { textPrimary } = useWidgetTheme(color)
    const connected =
        connectionStatus === AzureIotHubHealthConnectionStatus.Connected

    const handleConnect = async () => {
        const cmd = connected
            ? AzureIotHubHealthCmd.Disconnect
            : AzureIotHubHealthCmd.Connect
        await service.sendCmdAsync(cmd)
    }
    const handleConfigure = () => setOpen(true)
    return (
        <>
            <Grid
                container
                spacing={1}
                style={{ color: textPrimary, minWidth: "16rem" }}
            >
                <Grid item xs={12}>
                    <Typography component="span" variant="subtitle2">
                        Azure IoT Hub
                    </Typography>
                    <ChipList>
                        {hubName && <Chip color="primary" label={`hub: ${hubName}`} />}
                        {hubDeviceId && (
                            <Chip label={`device: ${hubDeviceId}`} />
                        )}
                    </ChipList>
                </Grid>
                <Grid item xs={12}>
                    <CmdButton
                        trackName="dashboard.azureiothealth.connect"
                        variant="outlined"
                        color="primary"
                        onClick={handleConnect}
                        disabled={connectionStatus === undefined}
                        title={
                            AzureIotHubHealthConnectionStatus[
                                connectionStatus
                            ] || "Waiting..."
                        }
                        icon={connected ? <WifiIcon /> : <WifiOffIcon />}
                    />
                    <IconButtonWithTooltip
                        title="Configure"
                        onClick={handleConfigure}
                    >
                        <SettingsIcon />
                    </IconButtonWithTooltip>
                </Grid>
            </Grid>
            <ConnectionStringDialog
                client={client}
                open={open}
                setOpen={setOpen}
            />
        </>
    )
}
