import React, { createContext, lazy, useContext, useState } from "react"

import Suspense from "./ui/Suspense"
import AppContext from "./AppContext"
import useAnalytics from "./hooks/useAnalytics"
const StartSimulatorDialog = lazy(
    () => import("./dialogs/StartSimulatorDialog")
)

export interface ShowDeviceHostsOptions {
    sensor?: boolean
    trackName?: string
}

export interface SimulatorDialogsProps {
    toggleShowDeviceHostsDialog: (options?: ShowDeviceHostsOptions) => void
}

const SimulatorDialogsContext = createContext<SimulatorDialogsProps>({
    toggleShowDeviceHostsDialog: () => {},
})
SimulatorDialogsContext.displayName = "sims"

export default SimulatorDialogsContext

// eslint-disable-next-line react/prop-types
export const SimulatorDialogsProvider = ({ children }) => {
    const [showDeviceHostsDialog, setShowDeviceHostsDialog] = useState(false)
    const [showDeviceHostsSensors, setShowDeviceHostsSensors] = useState(false)
    const { setToolsMenu } = useContext(AppContext)
    const { trackEvent } = useAnalytics()

    const toggleShowDeviceHostsDialog = (options?: ShowDeviceHostsOptions) => {
        if (options?.trackName) trackEvent(options?.trackName)
        const b = !showDeviceHostsDialog
        if (b) setShowDeviceHostsSensors(!!options?.sensor)
        setShowDeviceHostsDialog(b)
        if (!b) setToolsMenu(false)
    }

    return (
        <SimulatorDialogsContext.Provider
            value={{
                toggleShowDeviceHostsDialog,
            }}
        >
            {children}
            {showDeviceHostsDialog && (
                <Suspense>
                    <StartSimulatorDialog
                        open={showDeviceHostsDialog}
                        onClose={toggleShowDeviceHostsDialog}
                        sensor={showDeviceHostsSensors}
                    />
                </Suspense>
            )}
        </SimulatorDialogsContext.Provider>
    )
}
