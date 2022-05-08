import { MenuItem, TextField } from "@mui/material"
import { styled } from "@mui/material/styles"
import React, { ChangeEvent, useId, useMemo } from "react"
import { serviceSpecifications } from "../../../jacdac-ts/src/jdom/spec"
import useDeviceCatalog from "../devices/useDeviceCatalog"

const PREFIX = "ServiceSpecificationSelect"

const classes = {
    root: `${PREFIX}root`,
}

const StyledTextField = styled(TextField)(() => ({
    [`&.${classes.root}`]: {
        minWidth: "18rem",
    },
}))

export default function ServiceSpecificationSelect(props: {
    label: string
    serviceClass: number
    setServiceClass: (serviceClass: number) => void
    variant?: "outlined" | "filled" | "standard"
    fullWidth?: boolean
    error?: string
    hasRegisteredDevice?: boolean
}) {
    const {
        label,
        serviceClass,
        setServiceClass,
        variant,
        fullWidth,
        error,
        hasRegisteredDevice,
    } = props
    const labelId = useId()
    const deviceCatalog = useDeviceCatalog()

    const specs = useMemo(
        () =>
            serviceSpecifications()
                .filter(
                    spec =>
                        spec.status !== "deprecated" && !/^_/.test(spec.shortId)
                )
                .filter(
                    spec =>
                        !hasRegisteredDevice ||
                        !!deviceCatalog
                            .specificationsForService(spec.classIdentifier)
                            ?.filter(spec => spec.status !== "deprecated")
                            ?.length
                ),
        [hasRegisteredDevice]
    )

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
        setServiceClass(parseInt(event.target.value))

    return (
        <StyledTextField
            id={labelId}
            className={classes.root}
            label={label}
            error={!!error}
            helperText={error}
            value={isNaN(serviceClass) ? "" : serviceClass}
            select
            size="small"
            variant={variant}
            fullWidth={fullWidth}
            onChange={handleChange}
        >
            <MenuItem key="none" value="">
                No service selected
            </MenuItem>
            {specs.map(spec => (
                <MenuItem
                    key={spec.classIdentifier}
                    value={spec.classIdentifier}
                >
                    {spec.name}
                </MenuItem>
            ))}
        </StyledTextField>
    )
}
