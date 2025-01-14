import React, { ChangeEvent, useEffect, useState } from "react"
import { BrailleDisplayReg } from "../../../jacdac-ts/src/jdom/constants"
import { DashboardServiceProps } from "./DashboardServiceWidget"
import {
    useRegisterBoolValue,
    useRegisterUnpackedValue,
} from "../../jacdac/useRegisterValue"
import { Grid, TextField } from "@mui/material"
import useRegister from "../hooks/useRegister"
import CmdButton from "../CmdButton"
import ClearIcon from "@mui/icons-material/Clear"
import EditIcon from "@mui/icons-material/Edit"
import IconButtonWithTooltip from "../ui/IconButtonWithTooltip"
import CharacterScreenWidget from "../widgets/CharacterScreenWidget"
import { useId } from "react"
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew"
import DashboardRegisterValueFallback from "./DashboardRegisterValueFallback"

// https://en.wikipedia.org/wiki/Braille_ASCII
const BRAILE_CHARACTERS = {
    " ": "⠀", // space bar to dot-0
    "-": "⠤",
    ",": "⠠",
    ";": "⠰",
    ":": "⠱",
    "!": "⠮",
    "?": "⠹",
    ".": "⠨",
    "(": "⠷",
    "[": "⠪",
    "@": "⠈",
    "*": "⠡",
    "/": "⠌",
    "'": "⠄",
    '"': "⠐",
    "\\": "⠳",
    "&": "⠯",
    "%": "⠩",
    "^": "⠘",
    "+": "⠬",
    "<": "⠣",
    ">": "⠜",
    $: "⠫",
    "0": "⠴",
    "1": "⠂",
    "2": "⠆",
    "3": "⠒",
    "4": "⠲",
    "5": "⠢",
    "6": "⠖",
    "7": "⠶",
    "8": "⠦",
    "9": "⠔",
    A: "⠁",
    B: "⠃",
    C: "⠉",
    D: "⠙",
    E: "⠑",
    F: "⠋",
    G: "⠛",
    H: "⠓",
    I: "⠊",
    J: "⠚",
    K: "⠅",
    L: "⠇",
    M: "⠍",
    N: "⠝",
    O: "⠕",
    P: "⠏",
    Q: "⠟",
    R: "⠗",
    S: "⠎",
    T: "⠞",
    U: "⠥",
    V: "⠧",
    W: "⠺",
    X: "⠭",
    Z: "⠵",
    "]": "⠻",
    "#": "⠼",
    Y: "⠽",
    ")": "⠾",
    "=": "⠿",
    _: "⠸",
}
function brailify(s: string) {
    if (!s) return s
    let r = ""
    const su = s.toLocaleUpperCase()
    for (let i = 0; i < su.length; ++i) {
        const c = su.charCodeAt(i)
        if (c >= 0x2800 && c <= 0x28ff) r += String.fromCharCode(c)
        else r += BRAILE_CHARACTERS[su.charAt(i)] || ""
    }
    return r
}

export default function DashboardBrailleDisplay(props: DashboardServiceProps) {
    const { service, expanded } = props
    const textId = useId()

    const patternsRegister = useRegister(service, BrailleDisplayReg.Patterns)
    const lengthRegister = useRegister(service, BrailleDisplayReg.Length)
    const enabledRegister = useRegister(service, BrailleDisplayReg.Enabled)
    const [patterns] = useRegisterUnpackedValue<[string]>(
        patternsRegister,
        props
    )
    const enabled = useRegisterBoolValue(enabledRegister, props)
    const [length] = useRegisterUnpackedValue<[number]>(lengthRegister, props)

    const [fieldMessage, setFieldMessage] = useState(patterns)
    const handleFieldMessageChange = async (
        ev: ChangeEvent<HTMLTextAreaElement>
    ) => {
        const text = ev.target.value
        const brailled = brailify(text)
        setFieldMessage(brailled)
        await patternsRegister.sendSetStringAsync(brailled, true)
    }
    const handleClear = async () => {
        setFieldMessage("")
        await patternsRegister.sendSetStringAsync("", true)
    }
    const handleEnabled = async () =>
        enabledRegister.sendSetBoolAsync(!enabled, true)
    // set first value of message
    useEffect(() => {
        if (!fieldMessage && patterns) setFieldMessage(patterns)
    }, [patterns])

    if (length === undefined)
        return <DashboardRegisterValueFallback register={lengthRegister} />

    return (
        <Grid container spacing={1} alignItems="center">
            {expanded && (
                <Grid item xs={12}>
                    <Grid container spacing={1}>
                        <Grid item xs>
                            <TextField
                                id={textId}
                                label="text"
                                helperText="Unicode Braille patterns or Braille ASCII"
                                aria-label="text field to enter Braille unicode pattersn or Braille ASCII"
                                value={fieldMessage}
                                onChange={handleFieldMessageChange}
                                multiline={false}
                                fullWidth={true}
                                disabled={!enabled}
                            />
                        </Grid>
                        <Grid item>
                            <CmdButton
                                title="clear the entire display"
                                onClick={handleClear}
                                icon={<ClearIcon />}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            )}
            <Grid item xs>
                <CharacterScreenWidget
                    rows={1}
                    columns={length}
                    message={patterns}
                    disabled={!enabled}
                />
            </Grid>
            <Grid item>
                <CmdButton
                    title={enabled ? "disable display" : "enable display"}
                    onClick={handleEnabled}
                    color={enabled ? "primary" : undefined}
                    icon={<PowerSettingsNewIcon />}
                />
            </Grid>
        </Grid>
    )
}
