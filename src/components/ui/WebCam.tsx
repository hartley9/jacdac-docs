/* eslint-disable jsx-a11y/media-has-caption */
import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    FormControl,
    MenuItem,
    Select,
    SelectChangeEvent,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import React, { useContext, useEffect, useRef, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"
import useEffectAsync from "../useEffectAsync"
import SettingsIcon from "@mui/icons-material/Settings"
import IconButtonWithTooltip from "./IconButtonWithTooltip"
import useMounted from "../hooks/useMounted"
import CloseIcon from "@mui/icons-material/Close"
import AppContext from "../AppContext"
import { Alert } from "@mui/material"
import FullscreenIcon from "@mui/icons-material/Fullscreen"
import MinimizeIcon from "@mui/icons-material/Minimize"
import MaximizeIcon from "@mui/icons-material/Maximize"
import Draggable from "react-draggable"

const PREFIX = "WebCam"

const classes = {
    cardContainer: `${PREFIX}-cardContainer`,
    card: `${PREFIX}-card`,
}

const Root = styled("div")(() => ({
    [`& .${classes.cardContainer}`]: {
        zIndex: 1101,
        position: "absolute",
        right: "2rem",
        bottom: "3rem",
    },

    [`& .${classes.card}`]: {
        "& .hostedcontainer": {
            position: "relative",
            width: "40vw",
        },
        "& video": {
            border: "none",
            position: "relative",
            width: "100%",
            height: "100%",
        },
    },
}))

export default function WebCam() {
    const { setShowWebCam } = useContext(AppContext)
    const [minimize, setMinimize] = useState(true)
    const [devices, setDevices] = useState<MediaDeviceInfo[]>()
    const [deviceId, setDeviceId] = useLocalStorage("webcam_deviceid", "")
    const [working, setWorking] = useState(false)
    const nodeRef = useRef<HTMLSpanElement>()
    const streamRef = useRef<MediaStream>()
    const videoRef = useRef<HTMLVideoElement>()
    const [settingsOpen, setSettingsOpen] = useState(!deviceId)
    const mounted = useMounted()

    const supportsFullScreen =
        typeof document !== "undefined" && !!document.fullscreenEnabled

    const handleClose = async () => await setShowWebCam(false)
    const handleMinimize = () => setMinimize(!minimize)
    const handleSettings = () => {
        console.debug(`toggle settings`, { settingsOpen })
        setSettingsOpen(!settingsOpen)
    }
    const handleDeviceChange = (
        ev: SelectChangeEvent<string>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) => setDeviceId(ev.target.value)
    const handleFullScreen = () => videoRef.current?.requestFullscreen()
    const stop = () => {
        const stream = streamRef.current
        if (stream) {
            console.debug(`webcam: stop`)
            try {
                const tracks = stream.getTracks()
                if (tracks) tracks.forEach(track => track.stop())
            } catch (e) {
                console.debug(e)
            }
            streamRef.current = undefined
        }
        const video = videoRef.current
        if (video) {
            try {
                video.srcObject = undefined
            } catch (e) {
                console.debug(e)
            }
        }
    }

    // start camera
    useEffectAsync(async () => {
        stop()
        if (!deviceId) return

        console.debug(`webcam: start '${deviceId}'`)
        try {
            setWorking(true)
            stop()
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    width: { ideal: 1920 },
                    height: { ideal: 1080 },
                    advanced: [{ deviceId: deviceId }],
                },
                audio: false,
            })
            streamRef.current = stream
            const video = videoRef.current
            video.srcObject = stream
            await video.play()

            console.debug(`webcam: play started`)
            setSettingsOpen(false)
        } catch (e) {
            console.debug(`webcam: play failed`)
            console.error(e)
            setSettingsOpen(true)
        } finally {
            setWorking(false)
        }
    }, [deviceId])

    const updateDevices = async () => {
        console.debug(`webcam: update devices`)
        try {
            // enumerate devices
            const devices = await navigator.mediaDevices.enumerateDevices()
            const webcams = devices.filter(
                device => device.kind == "videoinput"
            )
            if (mounted()) setDevices(webcams)
        } catch (e) {
            if (mounted()) setDevices([])
        }
    }

    useEffectAsync(async () => {
        if (settingsOpen) await updateDevices()
    }, [settingsOpen])

    useEffect(() => {
        navigator.mediaDevices.addEventListener("devicechange", updateDevices)
        return () =>
            navigator.mediaDevices.removeEventListener(
                "devicechange",
                updateDevices
            )
    })

    // cleanup
    useEffect(() => stop, [])
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const draggableProps: any = {
        nodeRef,
    }

    return (
        <Root>
            <Draggable {...draggableProps}>
                <span ref={nodeRef} className={classes.cardContainer}>
                    <Card className={classes.card}>
                        <CardHeader
                            title={
                                settingsOpen &&
                                devices && (
                                    <FormControl
                                        variant="outlined"
                                        size="small"
                                    >
                                        <Select
                                            title="select a webcam"
                                            open={settingsOpen}
                                            onChange={handleDeviceChange}
                                            value={deviceId || ""}
                                            disabled={working}
                                        >
                                            {devices?.map(
                                                ({ deviceId, label }) => (
                                                    <MenuItem
                                                        key={deviceId}
                                                        value={deviceId}
                                                    >
                                                        {label}
                                                    </MenuItem>
                                                )
                                            )}
                                        </Select>
                                    </FormControl>
                                )
                            }
                            action={
                                <>
                                    {supportsFullScreen && (
                                        <IconButtonWithTooltip
                                            size="small"
                                            onClick={handleFullScreen}
                                            title="full screen"
                                            disabled={working}
                                        >
                                            <FullscreenIcon />
                                        </IconButtonWithTooltip>
                                    )}
                                    <IconButtonWithTooltip
                                        size="small"
                                        onClick={handleMinimize}
                                        disabled={working}
                                        title={
                                            minimize ? "Maximize" : "Minimize"
                                        }
                                    >
                                        {minimize ? (
                                            <MaximizeIcon />
                                        ) : (
                                            <MinimizeIcon />
                                        )}
                                    </IconButtonWithTooltip>
                                    <IconButtonWithTooltip
                                        size="small"
                                        onClick={handleSettings}
                                        title="Settings"
                                        disabled={working}
                                    >
                                        <SettingsIcon />
                                    </IconButtonWithTooltip>
                                    <IconButtonWithTooltip
                                        size="small"
                                        onClick={handleClose}
                                        title="Close"
                                    >
                                        <CloseIcon />
                                    </IconButtonWithTooltip>
                                </>
                            }
                        />
                        {working && (
                            <CardContent>
                                <Alert severity="info">
                                    starting camera...
                                </Alert>
                            </CardContent>
                        )}
                        <CardMedia>
                            <div
                                className="hostedcontainer"
                                style={
                                    !minimize
                                        ? {
                                              width: "85vw",
                                          }
                                        : undefined
                                }
                            >
                                <video
                                    autoPlay
                                    playsInline
                                    ref={videoRef}
                                    title="webcam"
                                />
                            </div>
                        </CardMedia>
                    </Card>
                </span>
            </Draggable>
        </Root>
    )
}