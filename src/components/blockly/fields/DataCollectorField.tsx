import React, { lazy } from "react"
import Suspense from "../../ui/Suspense"
import { ReactFieldJSON } from "./ReactField"
import ReactInlineField from "./ReactInlineField"
const DataCollectorWidget = lazy(() => import("./DataCollectorWidget"))

export default class DataCollectorField extends ReactInlineField {
    static KEY = "jacdac_data_collector"
    EDITABLE = false

    static fromJson(options: ReactFieldJSON) {
        return new DataCollectorWidget(options)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(options?: any) {
        super(options)
    }

    renderInlineField() {
        return (
            <Suspense>
                <DataCollectorWidget />
            </Suspense>
        )
    }
}
