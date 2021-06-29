import React, {
    createContext,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from "react"

const VOLUME_GAIN = 0.4

export interface ToneContext {
    close: () => void
    playTone: (frequency: number, duration: number, volume: number) => void
    setVolume: (vol: number) => void
}

export interface WebAudioContextProps {
    onClickActivateAudioContext: () => void
    playTone: (frequency: number, duration: number, volume: number) => void
    setVolume: (vol: number) => void
    activated: boolean
}

const WebAudioContext = createContext<WebAudioContextProps>({
    onClickActivateAudioContext: () => {},
    playTone: () => {},
    setVolume: () => {},
    activated: false,
})
WebAudioContext.displayName = "WebAudio"

export default WebAudioContext

export function createToneContext(): ToneContext {
    try {
        console.log(`create tone context`)
        const ctx = new (window.AudioContext ||
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (window as any).webkitAudioContext)()

        // play silence sound within onlick to unlock it
        const buffer = ctx.createBuffer(1, 1, 22050)
        const source = ctx.createBufferSource()
        source.buffer = buffer
        source.connect(ctx.destination)
        source.start()

        // output node with volume
        const globalVolume = ctx.createGain()
        globalVolume.connect(ctx.destination)
        globalVolume.gain.value = VOLUME_GAIN

        const setVolume = (v: number) => {
            if (globalVolume && !isNaN(v)) {
                globalVolume.gain.value = v * VOLUME_GAIN
            }
        }

        const playTone = (frequency: number, duration: number, vol: number) => {
            if (ctx.state !== "running") {
                console.debug(`playTone on closed context`)
                return
            }
            try {
                const tone = ctx.createOscillator()
                tone.type = "sawtooth"
                tone.frequency.value = frequency // update frequency

                const volume = ctx.createGain()
                volume.gain.value = vol

                // tone -> volume -> globalVolume
                tone.connect(volume)
                volume.connect(globalVolume)

                tone.start() // start and stop
                tone.stop(ctx.currentTime + duration / 1000)
            } catch (e) {
                console.debug(e)
            }
        }

        const close = () => {
            try {
                if (ctx.state === "running") ctx.close()
            } catch (e) {
                console.warn(e)
            }
        }

        console.log(`tone context created`)

        return {
            setVolume,
            playTone,
            close,
        }
    } catch (e) {
        return undefined
    }
}

export function WebAudioProvider(props: { children: ReactNode }) {
    const { children } = props
    const context = useRef<ToneContext>()
    const [activated, setActivated] = useState(false)

    // final cleanup
    useEffect(() => {
        return () => {
            context.current?.close()
        }
    }, [])

    // needs to be initiated in onClick on safari mobile
    const onClickActivateAudioContext = () => {
        if (context.current) return

        try {
            context.current = createToneContext()
            setActivated(true)
        } catch (e) {
            console.warn(e)
        }
    }
    const setVolume = (volume: number) => context.current?.setVolume(volume)
    const playTone = (frequency: number, duration: number, volume: number) =>
        context.current?.playTone(frequency, duration, volume)

    return (
        <WebAudioContext.Provider
            value={{
                onClickActivateAudioContext,
                setVolume,
                playTone,
                activated,
            }}
        >
            {children}
        </WebAudioContext.Provider>
    )
}