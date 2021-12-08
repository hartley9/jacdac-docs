import React, { useContext, useRef, useState } from "react"
import { Grid } from "@mui/material"
import DashboardServiceWidget from "../../dashboard/DashboardServiceWidget"
import WorkspaceContext from "../WorkspaceContext"
import NoServiceAlert from "./NoServiceAlert"
import { PointerBoundary } from "./PointerBoundary"
import useBestRegister from "../../hooks/useBestRegister"
import { useEffect } from "react"
import { REPORT_UPDATE } from "../../../../jacdac-ts/src/jdom/constants"
import useBlockData from "../useBlockData"
import JacdacContext, { JacdacContextProps } from "../../../jacdac/Context"
import { toMap } from "../../../../jacdac-ts/src/jdom/utils"
import { resolveServiceId } from "../toolbox"
import JDService from "../../../../jacdac-ts/src/jdom/service"
import useInterval from "../../hooks/useInterval"
import useChange from "../../../jacdac/useChange"
import BlockContext from "../BlockContext"

const DEFAULT_HORIZON = 30 // 10 seconds
export default function DataCollectorWidget() {
    const { bus } = useContext<JacdacContextProps>(JacdacContext)
    const { flyout, sourceBlock } = useContext(WorkspaceContext)
    const { data, setData } = useBlockData(sourceBlock, [], 50)
    const [services, setServices] = useState<JDService[]>([])
    const currentDataRef = useRef<{ time: number }[]>([])

    useInterval(
        true,
        () => {
            const registers = sourceBlock
                .getChildren(true)
                .map(child => resolveServiceId(child))
                .map(id => bus.node(id) as JDService)
                .map(service => service?.readingRegister)

            const now = bus.timestamp / 1000
            const rowTime = register.lastDataTimestamp / 1000
            const outdated = now - DEFAULT_HORIZON
            const currentData = currentDataRef.current
            const newData = [
                ...(currentData || []).filter(d => d.time >= outdated),
                {
                    time: rowTime,
                    ...newRow,
                },
            ]
            currentDataRef.current = newData
            setData(newData)
        },
        1000
    )

    useEffect(() => {
        currentDataRef.current = data
    }, [sourceBlock])

    if (flyout) return null

    return (
        <Grid
            container
            alignItems="center"
            alignContent="center"
            justifyContent="center"
            spacing={1}
        >
            {services.map(service => (
                <Grid item key={service.id}>
                    <PointerBoundary>
                        <DashboardServiceWidget
                            service={service}
                            visible={true}
                            variant="icon"
                        />
                    </PointerBoundary>
                </Grid>
            ))}
        </Grid>
    )
}
