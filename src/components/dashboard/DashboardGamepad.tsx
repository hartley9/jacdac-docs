import React, { CSSProperties, useMemo, useRef, useState } from "react"
import { DashboardServiceProps } from "./DashboardServiceWidget"
import useServiceServer from "../hooks/useServiceServer"
import { useRegisterUnpackedValue } from "../../jacdac/useRegisterValue"
import {
    GamepadServer,
    GAMEPAD_DPAD_BUTTONS,
    GAMEPAD_GAMEPAD_EXTRA_BUTTONS,
} from "../../../jacdac-ts/src/servers/gamepadserver"
import {
    GamepadButtons,
    GamepadReg,
    GamepadVariant,
} from "../../../jacdac-ts/src/jdom/constants"
import SvgWidget from "../widgets/SvgWidget"
import useWidgetTheme from "../widgets/useWidgetTheme"
import useSvgButtonProps from "../hooks/useSvgButtonProps"
import useAnimationFrame from "../hooks/useAnimationFrame"
import useRegister from "../hooks/useRegister"
import OptionalTooltip from "../widgets/OptionalTooltip"
import DashboardRegisterValueFallback from "./DashboardRegisterValueFallback"

const buttonLabels = {
    [GamepadButtons.Left]: "\u25C4",
    [GamepadButtons.Up]: "\u25B2",
    [GamepadButtons.Down]: "\u25BC",
    [GamepadButtons.Right]: "\u25BA",
}

function decay(value: number, rate: number, precision: number) {
    let nv = value * rate
    if (Math.abs(nv) < precision) nv = 0
    return nv
}

function GamepadWidget(props: DashboardServiceProps) {
    const { service } = props
    const register = useRegister(service, GamepadReg.Direction)
    const [buttons, x, y] = useRegisterUnpackedValue<
        [GamepadButtons, number, number]
    >(register, props)
    const server = useServiceServer<GamepadServer>(service)
    const color = server ? "secondary" : "primary"

    const hostValues = (): [number, number] => {
        const [, x, y] = server.reading.values()
        return [x, y]
    }
    const onUpdate = (newx: number, newy: number) => {
        server.updateDirection(newx, newy)
        register.refresh()
    }
    const { active, background, controlBackground } = useWidgetTheme(color)
    const dragSurfaceRef = useRef<SVGCircleElement>()
    const [grabbing, setGrabbing] = useState(false)

    const w = 40
    const w2 = w >> 1
    const cx = w2
    const cy = w2
    const rp = 2
    const rc = 6
    const rj = 10
    const pw = 12
    const ph = 8

    const jx = cx + (x || 0) * rj
    const jy = cy + (y || 0) * rj
    const jw = 1

    const updateGamepadDrag = (x: number, y: number) => {
        const bounds = dragSurfaceRef.current.getBoundingClientRect()

        const dx = (x - bounds.left) * (w / bounds.width) - w2
        const dy = (y - bounds.top) * (w / bounds.height) - w2

        const angle = Math.atan2(dy, dx)
        const distance =
            Math.min(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)), rj) / rj

        const newx = distance * Math.cos(angle)
        const newy = distance * Math.sin(angle)

        onUpdate(newx, newy)
    }

    const handlePointerDown = async (
        ev: React.PointerEvent<SVGCircleElement>
    ) => {
        ev.preventDefault()
        const circle = ev.target as SVGCircleElement
        circle.setPointerCapture(ev.pointerId)
        setGrabbing(true)
        updateGamepadDrag(ev.clientX, ev.clientY)
    }
    const handlePointerUp = (ev: React.PointerEvent<SVGCircleElement>) => {
        ev.preventDefault()
        const circle = ev.target as SVGCircleElement
        circle.releasePointerCapture(ev.pointerId)
        setGrabbing(false)
    }
    const handlePointerMove = async (
        ev: React.PointerEvent<SVGCircleElement>
    ) => {
        ev.preventDefault()
        if (grabbing) updateGamepadDrag(ev.clientX, ev.clientY)
    }

    useAnimationFrame(() => {
        if (!server || grabbing) return false // let use do its thing
        const [ax, ay] = hostValues()
        const nx = decay(ax, 0.95, 16)
        const ny = decay(ay, 0.95, 16)

        // async
        onUpdate(nx, ny)

        return nx !== 0 || ny !== 0
    }, [server, grabbing])

    const handleStyle: CSSProperties = {
        cursor: grabbing ? "grabbing" : "grab",
    }

    return (
        <>
            <circle
                ref={dragSurfaceRef}
                className="Gamepad-background"
                cx={cx}
                cy={cy}
                r="16"
                fill={background}
            ></circle>
            <rect
                className="dpad-up"
                x={"16"}
                y="6"
                width={ph}
                height={pw}
                rx={rp}
                fill={buttons & GamepadButtons.Up ? active : controlBackground}
            ></rect>
            <rect
                className="dpad-down"
                x="16"
                y="22"
                width={ph}
                height={pw}
                rx={rp}
                fill={
                    buttons & GamepadButtons.Down ? active : controlBackground
                }
            ></rect>
            <rect
                className="dpad-right"
                x="22"
                y="16"
                width={pw}
                height={ph}
                ry={rp}
                fill={
                    buttons & GamepadButtons.Right ? active : controlBackground
                }
            ></rect>
            <rect
                className="dpad-left"
                x="6"
                y="16"
                width={pw}
                height={ph}
                ry={rp}
                fill={
                    buttons & GamepadButtons.Left ? active : controlBackground
                }
            ></rect>
            <circle
                className="dpad-center"
                cx={cx}
                cy={cy}
                r={rc}
                fill={controlBackground}
            ></circle>
            {server ? (
                <circle
                    className="Gamepad-handle"
                    cx={jx}
                    cy={jy}
                    r={rc}
                    fill={background}
                    stroke={active}
                    strokeWidth={jw}
                    tabIndex={0}
                    role="button"
                    aria-label="Gamepad handle"
                    arial-live="polite"
                    onPointerMove={handlePointerMove}
                    onPointerDown={handlePointerDown}
                    onPointerUp={handlePointerUp}
                    style={handleStyle}
                />
            ) : (
                <circle
                    className="Gamepad-handle"
                    cx={jx}
                    cy={jy}
                    r={rc}
                    fill={background}
                    stroke={active}
                    strokeWidth={jw}
                    role="button"
                    aria-label="Gamepad handle"
                    arial-live="polite"
                />
            )}
        </>
    )
}

function ArcadeButton(props: {
    cx: number
    cy: number
    ro: number
    ri: number
    pressure: number
    button: GamepadButtons
    server: GamepadServer
    onRefresh: () => void
    color?: "primary" | "secondary"
}) {
    const { cx, cy, ro, color, pressure, ri, button, server, onRefresh } = props
    const { textProps, active, background, controlBackground } =
        useWidgetTheme(color)
    const checked = (pressure || 0) > 0
    const title = GamepadButtons[button]
    const label = buttonLabels[button] || title[0]

    const handleDown = server
        ? () => {
              server.down(button) //, 0.7)
              onRefresh()
          }
        : undefined
    const handleUp = server
        ? () => {
              server.up(button)
              onRefresh()
          }
        : undefined
    const buttonProps = useSvgButtonProps<SVGCircleElement>(
        title,
        handleDown,
        handleUp
    )

    return (
        <g
            transform={`translate(${cx},${cy})`}
            role="button"
            aria-live="polite"
            aria-label={`button ${title} ${checked ? "down" : "up"}`}
        >
            <circle cx={0} cy={0} r={ro} fill={background} />
            <circle
                cx={0}
                cy={0}
                r={ri}
                fill={checked ? active : controlBackground}
                {...buttonProps}
            >
                <title>{title}</title>
            </circle>
            <text cx={0} cy={0} fontSize={ri} {...textProps}>
                {label}
            </text>
        </g>
    )
}

export default function DashboardGamepad(props: DashboardServiceProps) {
    const { service } = props
    const variantRegister = useRegister(service, GamepadReg.Variant)
    let [variant] = useRegisterUnpackedValue<[GamepadVariant]>(
        variantRegister,
        props
    )
    const buttonsAvailableRegister = useRegister(
        service,
        GamepadReg.ButtonsAvailable
    )
    const [buttonsAvailable] = useRegisterUnpackedValue<[GamepadButtons]>(
        buttonsAvailableRegister,
        props
    )

    // if variant is not specific, infer from buttons
    if (variant === undefined) {
        if (buttonsAvailable & GAMEPAD_GAMEPAD_EXTRA_BUTTONS)
            variant = GamepadVariant.Gamepad
        else if (!buttonsAvailable || buttonsAvailable === GamepadButtons.A)
            variant = GamepadVariant.Thumb
    }
    const directionRegister = useRegister(service, GamepadReg.Direction)
    const [buttons] = useRegisterUnpackedValue<
        [GamepadButtons, number, number]
    >(directionRegister, props)
    const server = useServiceServer<GamepadServer>(service)
    const color = server ? "secondary" : "primary"
    const { background } = useWidgetTheme(color)

    // buttonsAvailable should be defined by now
    const analog = !(buttonsAvailable & GAMEPAD_DPAD_BUTTONS)
    const hasButtons = !!(buttonsAvailable & ~GAMEPAD_DPAD_BUTTONS)

    const w = 256
    const h = 128

    const cw = w / 12
    const ch = h / 4

    const ro = cw - 2
    const ri = ro - 4

    const sro = ro - 10
    const sri = sro - 2
    const scy = sro

    const pos = useMemo(
        () =>
            [
                {
                    id: GamepadButtons.Left,
                    cx: cw * 1.5,
                    cy: 2 * ch,
                    small: false,
                },
                { id: GamepadButtons.Up, cx: cw * 3, cy: ch, small: false },
                {
                    id: GamepadButtons.Right,
                    cx: cw * 4.5,
                    cy: 2 * ch,
                    small: false,
                },
                {
                    id: GamepadButtons.Down,
                    cx: cw * 3,
                    cy: 3 * ch,
                    small: false,
                },
                {
                    id: GamepadButtons.A,
                    cx: cw * 10.5,
                    cy: ch * 1.25,
                    small: false,
                },
                {
                    id: GamepadButtons.B,
                    cx: cw * 9.5,
                    cy: ch * 2.75,
                    small: false,
                },
                { id: GamepadButtons.Menu, cx: cw * 7, cy: scy, small: true },
                {
                    id: GamepadButtons.Select,
                    cx: cw * 6,
                    cy: scy,
                    small: true,
                },

                { id: GamepadButtons.Exit, cx: cw * 8, cy: scy, small: true },
                { id: GamepadButtons.Reset, cx: cw * 9, cy: scy, small: true },
            ].filter(p => !!(p.id & buttonsAvailable)),
        [buttonsAvailable]
    )

    const handleRefresh = async () => await directionRegister.refresh()

    const abx = cw * 8 + 1
    const aby = ch * 3 + 4
    const abr = cw / 2
    const abw = cw * 5 - 6
    const padcx = 3 * cw
    const padcy = 2 * ch
    const padr = 2.6 * cw

    // need button info
    if (buttonsAvailable === undefined)
        return (
            <DashboardRegisterValueFallback
                register={buttonsAvailableRegister}
            />
        )

    return (
        <OptionalTooltip
            title={!server ? "Use the physical Gamepad!" : undefined}
        >
            <SvgWidget width={w} height={h}>
                {!analog && (
                    <circle
                        cx={padcx}
                        cy={padcy}
                        r={padr}
                        fill="none"
                        stroke={background}
                        strokeWidth={4}
                    />
                )}
                {analog && (
                    <g
                        transform={`scale(${
                            padr / 16
                        }) translate(${-1.8},${-1.8})`}
                    >
                        <GamepadWidget {...props} />
                    </g>
                )}
                {hasButtons && (
                    <rect
                        transform={`rotate(-66, ${abx}, ${aby})`}
                        x={abx}
                        y={aby}
                        rx={abr}
                        ry={abr}
                        width={abw}
                        height={cw * 2.2}
                        fill="none"
                        stroke={background}
                        strokeWidth={4}
                    />
                )}
                {pos.map(({ id, cx, cy, small }) => (
                    <ArcadeButton
                        key={id}
                        cx={cx}
                        cy={cy}
                        ro={small ? sro : ro}
                        ri={small ? sri : ri}
                        button={id}
                        server={server}
                        onRefresh={handleRefresh}
                        pressure={buttons & id ? 1 : 0}
                        color={color}
                    />
                ))}
            </SvgWidget>
        </OptionalTooltip>
    )
}
