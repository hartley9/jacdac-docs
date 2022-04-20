import React, { lazy, useContext } from "react"
import { styled } from "@mui/material/styles"
import clsx from "clsx"
import { Container } from "@mui/material"
import Typography from "@mui/material/Typography"
import "./layout.css"
import SEO from "./shell/SEO"
import {
    createTheme,
    responsiveFontSizes,
    DeprecatedThemeOptions,
} from "@mui/material/styles"
import AppContext, { DrawerType } from "./AppContext"
import DarkModeProvider from "./ui/DarkModeProvider"
import DarkModeContext from "./ui/DarkModeContext"
import Alert from "./ui/Alert"
import Footer from "./shell/Footer"
import { Flags } from "../../jacdac-ts/src/jdom/flags"
import { WindowLocation } from "@reach/router"
import Suspense from "./ui/Suspense"
import ThemedMdxLayout from "./ui/ThemedMdxLayout"
import Breadcrumbs from "./ui/Breadcrumbs"
import useMediaQueries from "./hooks/useMediaQueries"
import MainAppBar from "./shell/MainAppBar"
import { AlertTitle } from "@mui/material"
import { UIFlags } from "../jacdac/providerbus"
import DevToolsAlert from "./alert/DevToolsAlert"
import AppDrawer from "./shell/AppDrawer"
import ToolsDrawer from "./shell/ToolsDrawer"

const SimulatorCommands = lazy(() => import("./commands/SimulatorCommands"))
const TraceAlert = lazy(() => import("./shell/TraceAlert"))
const WebDiagnostics = lazy(() => import("./shell/WebDiagnostics"))
const WebCam = lazy(() => import("./ui/WebCam"))
const PassiveAlert = lazy(() => import("./shell/PassiveAlert"))
const DataEditorAppBar = lazy(() => import("./shell/DataEditorAppBar"))

const PREFIX = "Layout"

const classes = {
    root: `${PREFIX}-root`,
    hideMobile: `${PREFIX}-hideMobile`,
    drawerHeader: `${PREFIX}-drawerHeader`,
    content: `${PREFIX}-content`,
    contentPadding: `${PREFIX}-contentPadding`,
    container: `${PREFIX}-container`,
    mainContent: `${PREFIX}-mainContent`,
    appBarShift: `${PREFIX}-appBarShift`,
    tocBarShift: `${PREFIX}-tocBarShift`,
    toolBarShift: `${PREFIX}-toolBarShift`,
}

const Root = styled("div")(({ theme }) => ({
    [`& .${classes.root}`]: {
        display: "flex",
        flexGrow: 1,
    },

    [`& .${classes.hideMobile}`]: {
        [theme.breakpoints.down("lg")]: {
            display: "none",
        },
    },

    [`& .${classes.drawerHeader}`]: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
    },

    [`& .${classes.content}`]: {
        display: "flex",
        minHeight: "100vh",
        minWidth: "10rem",
        flexDirection: "column",
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        flexGrow: 1,
        padding: theme.spacing(0.5),
    },

    [`& .${classes.contentPadding}`]: {
        padding: theme.spacing(3),
    },

    [`& .${classes.container}`]: {
        padding: theme.spacing(3),
    },

    [`& .${classes.mainContent}`]: {
        flexGrow: 1,
    },

    [`& .${classes.appBarShift}`]: {
        width: `calc(100% - ${DRAWER_WIDTH}rem)`,
        marginLeft: `${DRAWER_WIDTH}rem`,
        [theme.breakpoints.down(MOBILE_BREAKPOINT)]: {
            width: `calc(100% - ${MOBILE_DRAWER_WIDTH}rem)`,
            marginLeft: `${MOBILE_DRAWER_WIDTH}rem`,
        },
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

    [`& .${classes.tocBarShift}`]: {
        width: `calc(100% - ${TOC_DRAWER_WIDTH}rem)`,
        marginLeft: `${TOC_DRAWER_WIDTH}rem`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

    [`& .${classes.toolBarShift}`]: {
        width: `calc(100% - ${TOOLS_DRAWER_WIDTH}rem)`,
        marginRight: `${TOOLS_DRAWER_WIDTH}rem`,
        marginLeft: `-${TOOLS_DRAWER_WIDTH}rem`,
        [theme.breakpoints.down(MOBILE_BREAKPOINT)]: {
            width: `calc(100% - ${MOBILE_TOOLS_DRAWER_WIDTH}rem)`,
            marginRight: `${MOBILE_TOOLS_DRAWER_WIDTH}rem`,
        },
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
}))

export const TOC_DRAWER_WIDTH = 18
export const DRAWER_WIDTH = 42
export const TOOLS_DRAWER_WIDTH = 22
export const MOBILE_DRAWER_WIDTH = 20
export const MOBILE_TOOLS_DRAWER_WIDTH = 18
export const MOBILE_BREAKPOINT = "sm"
export const MEDIUM_BREAKPOINT = "md"

export interface LayoutProps {
    element?: JSX.Element
    props: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        pageContext?: any
        path?: string
        uri?: string
        location?: WindowLocation
    }
}

export default function Layout(props: LayoutProps) {
    return (
        <DarkModeProvider>
            <LayoutWithDarkMode {...props} />
        </DarkModeProvider>
    )
}

function LayoutWithDarkMode(props: LayoutProps) {
    const { element, props: pageProps } = props
    const { pageContext, path } = pageProps
    const { frontmatter } = pageContext || {}
    const makeCodeTool = /tools\/makecode-/.test(path)
    const { fullScreen } = frontmatter || {
        fullScreen: makeCodeTool,
    }
    const { darkModeMounted } = useContext(DarkModeContext)

    if (!darkModeMounted) return <div />
    else if (fullScreen) return element
    else return <LayoutWithMdx {...props} />
}

function LayoutWithMdx(props: LayoutProps) {
    const { darkMode } = useContext(DarkModeContext)
    const isDark = darkMode === "dark"
    const themeDef: DeprecatedThemeOptions = {
        palette: {
            primary: {
                main: isDark ? "#56d364" : "#2e7d32",
            },
            secondary: {
                main: "#ffc400",
            },
            contrastThreshold: isDark ? 5.1 : 3.1,
            mode: darkMode,
        },
    }
    const rawTheme = createTheme(themeDef)
    const theme = responsiveFontSizes(rawTheme)

    return (
        <ThemedMdxLayout theme={theme}>
            <LayoutWithContext {...props} />
        </ThemedMdxLayout>
    )
}

const UNDER_CONSTRUCTION_BODY = `Jacdac is currently in preview. If you would like to join as a pre-release test partner, please email jacdac-tap@microsoft.com.`

function LayoutWithContext(props: LayoutProps) {
    const { element, props: pageProps } = props
    const { pageContext, path, location } = pageProps
    const { frontmatter } = pageContext || {}

    const isHosted = UIFlags.hosted
    const tools = /^\/tools\//.test(path)
    const makeCodeTool = /tools\/makecode-/.test(path)
    const fullWidthTools =
        /^\/editors\/\w+\/$/.test(path) ||
        /^\/tools\/console\/$/.test(path) ||
        /^\/(tools\/(makecode-|player)|dashboard)/.test(path) ||
        !!frontmatter?.fullWidth
    const isDataEditor = /^\/editors\/data/.test(path)
    const {
        hideMainMenu = false,
        hideUnderConstruction = false,
        hideBreadcrumbs = false,
    } = frontmatter || {
        hideMainMenu: isHosted || makeCodeTool,
        hideUnderConstruction: isDataEditor || makeCodeTool || fullWidthTools,
        hideBreadcrumbs: isDataEditor || tools || fullWidthTools,
    }

    const appBar = hideMainMenu ? undefined : isDataEditor ? (
        <Suspense>
            <DataEditorAppBar />
        </Suspense>
    ) : (
        <MainAppBar />
    )
    const title = isDataEditor
        ? "Data Science Editor (Experimental)"
        : pageContext?.title || frontmatter?.title || undefined

    const { darkMode } = useContext(DarkModeContext)
    const { drawerType, toolsMenu, showWebCam } = useContext(AppContext)
    const drawerOpen = drawerType !== DrawerType.None
    const { medium } = useMediaQueries()
    const container = !medium && !fullWidthTools
    // && path !== "/"
    const mainClasses = clsx(classes.content, {
        [classes.container]: container,
        [classes.contentPadding]: !fullWidthTools,
        [classes.tocBarShift]: drawerType === DrawerType.Toc,
        [classes.appBarShift]: drawerOpen && drawerType !== DrawerType.Toc,
        [classes.toolBarShift]: toolsMenu,
    })

    const InnerMainSection = () => (
        <>
            <Suspense>
                <SimulatorCommands />
            </Suspense>
            <Suspense>
                <TraceAlert />
            </Suspense>
            <Suspense>
                <PassiveAlert />
            </Suspense>
            {!hideUnderConstruction && (
                <Alert closeable={true} severity="warning">
                    <AlertTitle>Partner Preview</AlertTitle>
                    {UNDER_CONSTRUCTION_BODY}
                </Alert>
            )}
            <Suspense>
                <DevToolsAlert />
            </Suspense>
            {Flags.diagnostics && (
                <Suspense>
                    <WebDiagnostics />
                </Suspense>
            )}
            {!hideBreadcrumbs && location && (
                <Breadcrumbs location={location} />
            )}
            {fullWidthTools ? (
                element
            ) : (
                <Typography className={"markdown"} component="span">
                    {element}
                </Typography>
            )}
        </>
    )

    const MainSection = () => (
        <>
            <main className={classes.mainContent}>
                {!hideMainMenu && <div className={classes.drawerHeader} />}
                {container ? (
                    <Container>
                        <InnerMainSection />
                    </Container>
                ) : (
                    <InnerMainSection />
                )}
            </main>
            <Footer />
        </>
    )

    return (
        <Root>
            <div className={clsx(darkMode, classes.root)}>
                <header>
                    <SEO lang="en" title={title} />
                </header>
                {!hideMainMenu && (
                    <nav>
                        {appBar}
                        {drawerType !== DrawerType.None && (
                            <AppDrawer pagePath={path} />
                        )}
                        {toolsMenu && <ToolsDrawer />}
                    </nav>
                )}
                {container ? (
                    <Container
                        maxWidth={"xl"}
                        disableGutters={true}
                        className={mainClasses}
                    >
                        <MainSection />
                    </Container>
                ) : (
                    <div className={mainClasses}>
                        <MainSection />
                    </div>
                )}
                {showWebCam && (
                    <Suspense>
                        <WebCam />
                    </Suspense>
                )}
            </div>
        </Root>
    )
}
