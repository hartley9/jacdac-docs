import { Box, NoSsr, Paper } from "@mui/material"
import React from "react"
import ConsoleLog from "./ConsoleLog"
import ConsoleToolbar from "./ConsoleToolbar"

/** Delay load */
export default function Console(props: { hidePopout?: boolean, height?: string }) {
    const { height, hidePopout } = props
    return (
        <NoSsr>
            <Paper square elevation={1}>
                <Box display="flex">
                    <ConsoleToolbar hidePopout={hidePopout} />
                </Box>
            </Paper>
            <ConsoleLog height={height} />
        </NoSsr>
    )
}
