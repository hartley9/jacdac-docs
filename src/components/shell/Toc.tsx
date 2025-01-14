import React, { useContext, useMemo } from "react"
import { styled } from "@mui/material/styles"
import { List, ListItem, Typography, useTheme } from "@mui/material"
import { Link } from "gatsby-theme-material-ui"
// tslint:disable-next-line: no-submodule-imports
import ListItemText from "@mui/material/ListItemText"
import AppContext, { DrawerType } from "../AppContext"
import { graphql, useStaticQuery } from "gatsby"
import useMediaQueries from "../hooks/useMediaQueries"

const PREFIX = "Toc"

const classes = {
    root: `${PREFIX}root`,
}

const StyledList = styled(List)(({ theme }) => ({
    [`&.${classes.root}`]: {
        width: "100%",
        backgroundColor: theme.palette.background.paper,
    },
}))

interface TocNode {
    name: string
    path: string
    order: number
    children?: TocNode[]
}

function treeifyToc(toc: TocNode[]) {
    let tree = toc.slice(0)

    // reconstruct tree
    const tocNodes: { [index: string]: TocNode } = {}
    tree.forEach((node, index) => {
        const k = node.path.replace(/\/$/, "")
        if (tocNodes[k]) {
            tree[index] = undefined
        } else tocNodes[k] = node
    })
    tree = tree.filter(node => !!node)
    tree.forEach((node, index) => {
        const parts = node.path.replace(/\/$/, "").split("/")
        parts.pop()
        while (parts.length) {
            const parentPath = `${parts.join("/")}`
            const parent = tocNodes[parentPath]
            if (parent) {
                if (!parent.children) parent.children = []
                parent.children.push(node)
                tree[index] = undefined
                break
            }
            parts.pop()
        }
    })
    const r = {
        tree: tree.filter(node => !!node),
        nodes: tocNodes,
    }

    function sortNodes(nodes: TocNode[]) {
        nodes.sort((l, r) => l.order - r.order || l.name.localeCompare(r.name))
        nodes.forEach(node => node.children && sortNodes(node.children))
    }
    sortNodes(r.tree)

    return r
}

export default function Toc(props: { pagePath: string }) {
    const { pagePath } = props
    const { setDrawerType } = useContext(AppContext)
    const { mobile } = useMediaQueries()
    const theme = useTheme()

    const data = useStaticQuery(graphql`
        query {
            allMdx {
                edges {
                    node {
                        headings {
                            value
                        }
                        frontmatter {
                            title
                            order
                            hideToc
                        }
                        fields {
                            slug
                        }
                        parent {
                            ... on File {
                                sourceInstanceName
                            }
                        }
                    }
                }
            }
        }
    `)

    /*
      site {
        siteMetadata {
          title
        }
    }
  
    allServicesJson {
        nodes {
          name
          shortId
        }
      } 
   */

    const handleClick = () => {
        if (mobile) setDrawerType(DrawerType.None)
    }

    const tree = useMemo(() => {
        // convert pages into tree
        const toc: TocNode[] = [
            {
                name: "Overview",
                path: "/overview/",
                order: 0,
            },
            {
                name: "Device Dashboard",
                path: "/dashboard/",
                order: 0.1,
            },
            {
                name: "Device Catalog",
                path: "/devices/",
                order: 0.2,
            },
            {
                name: "Service Catalog",
                path: "/services/",
                order: 0.3,
            },
            {
                name: "Client Programming",
                path: "/clients/",
                order: 0.5,
            },
            {
                name: "Web Tools",
                path: "/tools/",
                order: 0.6,
            },
            {
                name: "Device Development",
                path: "/ddk/",
                order: 0.8,
            },
            {
                name: "Specifications",
                path: "/reference/",
                order: 0.81,
            },
            {
                name: "FAQ",
                path: "/faq/",
                order: 0.85,
            },
        ]

        data.allMdx.edges
            .map(node => node.node)
            .filter(
                node => !!node.frontmatter?.title && node.fields.slug !== "/"
            )
            .filter(node => !node.frontmatter || !node.frontmatter?.hideToc)
            .map(node => {
                const r = {
                    name: node.frontmatter?.title || node.headings[0].value,
                    path: node.fields.slug,
                    order:
                        node.frontmatter?.order !== undefined
                            ? node.frontmatter?.order
                            : 50,
                }
                return r
            })
            .forEach(node => toc.push(node))
        const { tree } = treeifyToc(toc)
        return tree
    }, [])

    const TocListItem = (props: { entry: TocNode; level: number }) => {
        const { entry, level } = props
        const { path, children, name } = entry
        const selected =
            pagePath === path || (pagePath === "/" && path === "/overview/")
        const sub = level === 1 || !!children?.length
        const showSub = sub && !!children?.length && pagePath.startsWith(path)

        return (
            <>
                <ListItem
                    component="li"
                    selected={selected}
                    key={"tocitem" + path}
                    sx={{ ml: Math.max(0, level - 1) }}
                >
                    <Link
                        style={{ color: theme.palette.text.primary }}
                        onClick={handleClick}
                        to={path}
                        underline="none"
                    >
                        <ListItemText
                            primary={
                                <Typography
                                    variant={sub ? "button" : "caption"}
                                >
                                    {name}
                                </Typography>
                            }
                        />
                    </Link>
                </ListItem>
                {showSub &&
                    children?.map(child => (
                        <TocListItem
                            key={child.path}
                            entry={child}
                            level={level + 1}
                        />
                    ))}
            </>
        )
    }

    return (
        <StyledList dense className={classes.root}>
            {tree.map(entry => (
                // eslint-disable-next-line react/prop-types
                <TocListItem key={entry.path} entry={entry} level={1} />
            ))}
        </StyledList>
    )
}
