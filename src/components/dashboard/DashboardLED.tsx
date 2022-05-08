import { Grid } from "@mui/material"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { DashboardServiceProps } from "./DashboardServiceWidget"
import { JDService } from "../../../jacdac-ts/src/jdom/service"
import IconButtonWithTooltip from "../ui/IconButtonWithTooltip"
import LightWidget from "../widgets/LightWidget"
import {
    LedReg,
    RENDER,
    REPORT_UPDATE,
} from "../../../jacdac-ts/src/jdom/constants"
import ColorButtons, { DEFAULT_COLORS } from "../widgets/ColorButtons"
import useRegister from "../hooks/useRegister"
import RegisterInput from "../RegisterInput"
import { bufferEq } from "../../../jacdac-ts/src/jdom/utils"
import useChange from "../../jacdac/useChange"
import { JDEventSource } from "../../../jacdac-ts/src/jdom/eventsource"
import DashboardRegisterValueFallback from "./DashboardRegisterValueFallback"
import EditIcon from "@mui/icons-material/Edit"

const configureRegisters = [
    LedReg.Brightness,
    LedReg.ActualBrightness,
    LedReg.MaxPower,
]

function RegisterInputItem(props: {
    service: JDService
    registerCode: number
    visible: boolean
}) {
    const { service, registerCode, visible } = props
    const register = useRegister(service, registerCode)
    return (
        <RegisterInput
            register={register}
            visible={visible}
            showRegisterName={true}
        />
    )
}

export default function DashboardLED(props: DashboardServiceProps) {
    const { service, services, visible, expanded } = props
    const pixelsRegister = useRegister(service, LedReg.Pixels)
    const hasData = useChange(pixelsRegister, _ => !!_?.data)
    const [penColor, setPenColor] = useState<number>(DEFAULT_COLORS[0].value)
    const colorsRef = useRef<Uint8Array>(new Uint8Array(0))
    const clientRef = useRef(new JDEventSource())
    const handleColorChange = (newColor: number) =>
        setPenColor(current => (newColor === current ? undefined : newColor))
    const handleLedClick: (index: number) => void = async (index: number) => {
        if (isNaN(penColor)) return

        const pixels = colorsRef.current
        if (index >= pixels.length * 3) return

        const newPixels = pixels.slice(0)
        const k = index * 3
        newPixels[k] = (penColor >> 16) & 0xff
        newPixels[k + 1] = (penColor >> 8) & 0xff
        newPixels[k + 2] = penColor & 0xff
        await pixelsRegister.sendSetPackedAsync([newPixels], true)
        colorsRef.current = newPixels
        clientRef.current.emit(RENDER)
    }

    const registers = {
        numPixels: LedReg.NumPixels,
        variant: LedReg.Variant,
        actualBrightness: LedReg.ActualBrightness,
        numColumns: LedReg.NumColumns,
    }

    useEffect(() => {
        if (!pixelsRegister) return undefined
        const updatePixels = () => {
            const [pixels] = pixelsRegister.unpackedValue || []
            if (pixels && !bufferEq(colorsRef.current, pixels)) {
                colorsRef.current = pixels.slice(0)
                clientRef.current.emit(RENDER)
            }
        }
        updatePixels()
        return pixelsRegister.subscribe(REPORT_UPDATE, updatePixels)
    }, [pixelsRegister])
    const colors: () => Uint8Array = useCallback(() => colorsRef.current, [])
    const subscribeColors = useCallback(
        handler => clientRef.current.subscribe(RENDER, handler),
        []
    )

    if (!hasData)
        return <DashboardRegisterValueFallback register={pixelsRegister} />

    return (
        <>
            <Grid item xs={12}>
                <LightWidget
                    colors={colors}
                    subscribeColors={subscribeColors}
                    registers={registers}
                    widgetCount={services?.length}
                    onLedClick={handleLedClick}
                    {...props}
                />
            </Grid>
            {expanded && (
                <Grid item>
                    <ColorButtons
                        color={penColor}
                        onColorChange={handleColorChange}
                    />
                </Grid>
            )}
            {expanded &&
                configureRegisters.map(code => (
                    <Grid item xs={12} key={code}>
                        <RegisterInputItem
                            service={service}
                            registerCode={code}
                            visible={visible}
                        />
                    </Grid>
                ))}
        </>
    )
}
