import { Grid, Typography } from "@material-ui/core"
import React from "react"
import DashboardServiceWidget, {
    DashboardServiceProps,
} from "./DashboardServiceWidget"
import ServiceRole from "../services/ServiceRole"
import useInstanceName from "../services/useInstanceName"
import useRegister from "../hooks/useRegister"
import { SystemReg } from "../../../jacdac-ts/jacdac-spec/dist/specconstants"
import TrendWidget from "../widgets/TrendWidget"
import useReadingAuxilliaryValue from "../hooks/useReadingAuxilliaryValue"

export default function DashboardServiceWidgetItem(
    props: React.Attributes & DashboardServiceProps
): JSX.Element {
    const { service, ...rest } = props
    const instanceName = useInstanceName(service, rest)
    const readingRegister = useRegister(service, SystemReg.Reading)
    const valueRegister = useRegister(service, SystemReg.Value)
    const register = readingRegister || valueRegister
    const isReading = !!readingRegister
    const isValue = !!valueRegister
    const [min] = useReadingAuxilliaryValue(
        register,
        isReading
            ? SystemReg.MinReading
            : isValue
            ? SystemReg.MinValue
            : undefined,
        props
    )
    const [max] = useReadingAuxilliaryValue(
        register,
        isReading
            ? SystemReg.MaxReading
            : isValue
            ? SystemReg.MaxValue
            : undefined,
        props
    )

    return (
        <Grid item>
            <Grid container spacing={1} alignItems="center">
                <Grid item xs>
                    <ServiceRole service={service} />
                </Grid>
                {instanceName && (
                    <Grid item>
                        <Typography
                            className="no-pointer-events"
                            variant="caption"
                            component="span"
                            style={{ float: "right" }}
                        >
                            {instanceName}
                        </Typography>
                    </Grid>
                )}
            </Grid>
            <DashboardServiceWidget {...props} />
            {register && (
                <TrendWidget
                    register={readingRegister}
                    min={min}
                    max={max}
                    horizon={10}
                />
            )}
        </Grid>
    )
}
