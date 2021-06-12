import React, { useContext } from "react"
import { ReactFieldJSON } from "./ReactField"
import WorkspaceContext from "../WorkspaceContext"
import ReactInlineField from "./ReactInlineField"
import useBlockData from "../useBlockData"
import { createStyles, makeStyles, Theme } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        table: {
            padding: 0,
            margin: 0,
            fontSize: "0.8rem",
            lineHeight: "1rem",
            color: theme.palette.text.primary,

            "& th": {
                fontWeight: "normal",
            },
            "& td": {
                borderColor: "#ccc",
                borderRightStyle: "solid 1px",
            },
        },
    })
)

function DataTableWidget() {
    const { sourceBlock } = useContext(WorkspaceContext)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data } = useBlockData<any>(sourceBlock)
    const classes = useStyles()

    if (!data?.length) return null

    const columns = Object.keys(data[0] || {})

    return (
        <table className={classes.table}>
            <thead>
                <tr>
                    {columns.map(c => (
                        <th key={c}>{c}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((r, i) => (
                    <tr key={r.id || i}>
                        {columns.map(c => (
                            <td key={c}>{r[c]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default class DataTableField extends ReactInlineField {
    static KEY = "jacdac_field_data_table"
    static EDITABLE = false

    static fromJson(options: ReactFieldJSON) {
        return new DataTableField(options)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(options?: any) {
        super(options)
    }

    protected createContainer(): HTMLDivElement {
        const c = document.createElement("div")
        c.style.display = "block"
        c.style.minWidth = "14rem"
        c.style.maxHeight = "60vh"
        c.style.overflowY = "auto"
        return c
    }

    renderInlineField() {
        return <DataTableWidget />
    }
}