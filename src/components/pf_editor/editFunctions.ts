import * as THREE from "three"
import PF from "pathfinding"

const resolution = 10 // resolution for routing

let myScene

const addDebugCube = (vec: { x: number; y: number; z: number }) => {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff })
    const cube = new THREE.Mesh(geometry, material)

    console.log("adding cube... at: ", vec)
    //cube.position.set(vec.x, vec.y, vec.z)
    cube.position.set(vec.x, vec.y, vec.z)
    myScene.add(cube)
}

export const roundBy = (x, amt = 5) => {
    return Math.ceil(x / amt) * amt
}

export const generateEnclosure = scene => {
    myScene = scene

    // generate bounding boxes for all objects in scene with a geometry
    scene.traverse(obj => {
        if (obj.geometry) {
            obj.geometry.computeBoundingBox()
        }
    })
}

export const getModuleInfo = scene => {
    console.log("scene in getModInfo")
    console.log(scene)
    const moduleSizes = []
    scene.traverse(obj => {
        if (obj.userData.isModule) {
            console.log("think im a module")
            console.log(obj.userData)

            console.log("obj: ", obj)
        }
    })
}

export const collectMountingHoleLocations = scene => {
    const mountingHoleData = []

    scene.traverse(sceneChild => {
        if (sceneChild.userData.routeMe) {
            sceneChild.traverse(obj => {
                const worldPosTest = new THREE.Vector3()

                obj.updateMatrixWorld()
                obj.getWorldPosition(worldPosTest)

                // const newPos = [(worldPosTest.x), (worldPosTest.y), (worldPosTest.z)]

                if (obj.name.includes("JD")) {
                    mountingHoleData.push({
                        moduleID: sceneChild.name,
                        mountingHoleNet: obj.name.substring(3),
                        mountingHolePosition: worldPosTest,
                    })

                    const geometry = new THREE.BoxGeometry(1, 1, 1)
                    const material = new THREE.MeshBasicMaterial({
                        color: 0xff0000,
                    })
                    const cube = new THREE.Mesh(geometry, material)

                    console.log("adding cube... at: ", worldPosTest)
                    cube.position.set(
                        worldPosTest.x,
                        worldPosTest.y,
                        worldPosTest.z
                    )
                    scene.add(cube)

                    console.log("heres my cube: ", cube)
                }
            })
        }
    })

    return mountingHoleData
}

export const collectCarrierPCBData = scene => {
    let carrierPCBDimensions
    scene.traverse(sceneChild => {
        if (sceneChild.name.includes("carrierPCB")) {
            carrierPCBDimensions = {
                width: sceneChild.children[0].geometry.parameters.width,
                height: sceneChild.children[0].geometry.parameters.height,
            }
        }
    })

    return carrierPCBDimensions
}

export const generatePCBMatrix = carrierPCBDimensions => {
    const h = carrierPCBDimensions.height
    const w = carrierPCBDimensions.width

    const arr = []

    for (let i = 0; i < h; i++) {
        arr[i] = []
        for (let j = 0; j < w; j++) {
            arr[i][j] = 0
        }
    }
    return arr
}

export function rotateX(obj: THREE.Object3D | undefined): void {
    if (obj === undefined) {
        console.log("Cant rotate: no object has been selected")
    } else {
        obj.rotateY(Math.PI / 2)
    }
}

export function flip(obj: THREE.Object3D | undefined): void {
    if (obj === undefined) {
        console.log("Cant rotate: no object has been selected")
    } else {
        obj.rotateX(Math.PI / 2)
    }
}

export function editZIndex(obj: THREE.Object3D) {
    console.log("z-index userData")
    console.log(obj.userData)
}

export function deleteObject(obj: THREE.Object3D, objectRefs: []) {
    for (let i = 0; i < objectRefs.length; i++) {
        const currObjRef = objectRefs[i].props
        const selectedObjTopLevelUUID = obj.parent.name // note we have to check parent as we are one more group
        const currentObjTopLevelUUID = currObjRef.name

        if (selectedObjTopLevelUUID === currentObjTopLevelUUID) {
            objectRefs.splice(i, 1)
            obj.parent.parent.remove(obj.parent)
        }
    }
}

export function route(scene) {
    generateEnclosure(scene) //test for now

    console.log("auto-routing...")

    console.log("scene")
    console.log(scene)

    // initialise data and power paths
    const dataPaths = []
    const powerPaths = []

    let powerGoals = []
    //const dataGoals = [];

    const carrierPCBDimensions = collectCarrierPCBData(scene)

    const mountingHoleData = collectMountingHoleLocations(scene)

    let routingMatrix = generatePCBMatrix(carrierPCBDimensions)

    mountingHoleData.forEach(mountingHole => {
        routingMatrix = fillMatrixSection(
            routingMatrix,
            { h: 3, w: 3 },
            mountingHole.mountingHolePosition,
            carrierPCBDimensions.height,
            carrierPCBDimensions.height,
            "mountingHole",
            mountingHole.mountingHoleNet
        )
    })

    console.log("routing matrix returned: ")
    console.log(JSON.parse(JSON.stringify(routingMatrix)))

    let points = []

    mountingHoleData.forEach(mountingHole => {
        let path = []
        let matrixForPathfinder

        const convertedPosition = {
            x: Math.abs(
                parseFloat(
                    Math.ceil(mountingHole.mountingHolePosition.x).toFixed(0)
                ) +
                    carrierPCBDimensions.width / 2
            ),
            y: Math.abs(
                parseFloat(
                    Math.ceil(mountingHole.mountingHolePosition.y).toFixed(0)
                ) +
                    carrierPCBDimensions.height / 2
            ),
            z: Math.abs(
                parseFloat(
                    Math.ceil(mountingHole.mountingHolePosition.z).toFixed(0)
                ) +
                    carrierPCBDimensions.height / 2
            ),
        }

        // get closest goal
        //let powerGoal;

        //if (powerGoals.length < 1){
        const powerGoal = [0, carrierPCBDimensions.width / 2]
        powerGoals.push(powerGoal)
        //}
        //else {

        // powerGoal = [getClosestGoal(convertedPosition, powerGoals).point.x, getClosestGoal(convertedPosition, powerGoals).point.y]

        // }

        //if (dataPaths.length < 1){
        const dataGoal = [
            carrierPCBDimensions.height - 1,
            carrierPCBDimensions.width / 2,
        ]
        //} else {
        //   dataGoal = getClosestGoal(convertedPosition, dataPaths);
        //}

        switch (mountingHole.mountingHoleNet) {
            case "PWR":
                matrixForPathfinder = maskMatrix(routingMatrix, "power")
                console.log("matrix for path finder (power): ")
                console.log(JSON.parse(JSON.stringify(matrixForPathfinder)))
                path = pathfinder(
                    matrixForPathfinder,
                    { x: convertedPosition.x, y: convertedPosition.z },
                    { x: powerGoal[1], y: powerGoal[0] }
                )

                powerPaths.push(path)
                powerGoals = powerGoals.concat(
                    JSON.parse(JSON.stringify(path)).splice(5, path.length - 1)
                )
                points = path

                for (let p = 0; p < path.length; p++) {
                    const point = path[p]

                    routingMatrix[point[1]][point[0]] = "PWRline"
                }
                break
            case "DATA":
                matrixForPathfinder = maskMatrix(routingMatrix, "data")
                path = pathfinder(
                    matrixForPathfinder,
                    { x: convertedPosition.x, y: convertedPosition.z },
                    { x: dataGoal[1], y: dataGoal[0] }
                )
                dataPaths.push(path)
                points = path
                for (let p = 0; p < path.length; p++) {
                    const point = path[p]
                    routingMatrix[point[1]][point[0]] = "DATAline"
                }
                break
        }
    })

    for (let p = 0; p < powerPaths.length; p++) {
        const powerPoints = []
        const path = powerPaths[p]

        for (let point = 0; point < path.length; point++) {
            powerPoints.push(
                new THREE.Vector3(
                    path[point][0] - carrierPCBDimensions.width / 2,
                    3,
                    path[point][1] - carrierPCBDimensions.height / 2
                )
            )
        }

        const geometry = new THREE.BufferGeometry().setFromPoints(powerPoints)

        const material = new THREE.LineBasicMaterial({ color: 0x0000ff })

        const line = new THREE.Line(geometry, material)

        scene.add(line)
    }

    for (let p = 0; p < dataPaths.length; p++) {
        const dataPoints = []
        const path = dataPaths[p]

        for (let point = 0; point < path.length; point++) {
            dataPoints.push(
                new THREE.Vector3(
                    path[point][0] - carrierPCBDimensions.width / 2,
                    3,
                    path[point][1] - carrierPCBDimensions.height / 2
                )
            )
        }

        const geometry = new THREE.BufferGeometry().setFromPoints(dataPoints)

        const material = new THREE.LineBasicMaterial({ color: 0x013220 })

        const line = new THREE.Line(geometry, material)

        scene.add(line)
    }
}

export const getClosestGoal = (startPosition, paths) => {
    //paths = paths[0]
    console.log("start pos")
    console.log(startPosition)

    console.log("paths")
    console.log(paths)

    const whereShortest = {
        point: { x: paths[0][0], y: paths[0][1] },
        distance: 9999999,
    }
    console.log("whereShortest: ")
    console.log(whereShortest)

    //paths.forEach(path => {

    paths.forEach(point => {
        console.log("point: ")
        console.log(point)

        const distance = Math.sqrt(
            (startPosition.x - point[0]) ^
                (2 + (startPosition.y - point[1])) ^
                2
        )
        console.log("distance")
        console.log(distance)
        console.log("my point...")
        console.log(point)
        if (distance < whereShortest.distance) {
            whereShortest.distance = distance
            whereShortest.point = { x: point[0], y: point[1] }

            console.log("new where shortest")
            console.log(whereShortest)
        }

        //  pointCounter++
    })
    //})

    console.log("SHORTEST: ", whereShortest)

    return whereShortest
}

export const maskMatrix = (matrix, type) => {
    const maskMatrix = []
    for (let i = 0; i < matrix.length; i++) {
        maskMatrix.push(new Array(matrix[0].length).fill(0))
    }

    const symbolsToPath = []

    if (type === "data") {
        // this is data
        symbolsToPath.push("DATApad")

        symbolsToPath.push("DATAline")
    } else if (type === "power") {
        // this is power
        symbolsToPath.push("PWRpad")

        symbolsToPath.push("PWRline")
    } else {
        console.error("incorrect type ")
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            const value = matrix[i][j]

            if (value !== 0 && !symbolsToPath.includes(value)) {
                maskMatrix[i][j] = 1
            } else if (symbolsToPath.includes(value)) {
                maskMatrix[i][j] = 0
            }
        }
    }

    return maskMatrix
}

export function pathfinder(matrix, startPoint, endPoint): number[] {
    console.log("variables for path finder")
    console.log("matrix: ", matrix)
    console.log("startPoint: ", startPoint)
    console.log("endPoint: ", endPoint)

    const grid = new PF.Grid(matrix)

    grid.setWalkableAt(0, 1, false)

    const finder = new PF.JumpPointFinder({
        allowDiagonal: false,
        dontCrossCorners: true,
        heuristic: PF.Heuristic.chebyshev,
    })
    /* 
    const finder = new PF.DijkstraFinder(
        {
            allowDiagonal: true,
            dontCrossCorners: true , 
            heuristic: PF.Heuristic.chebyshev
        }
    ); */

    const path = finder.findPath(
        startPoint.x,
        startPoint.y,
        endPoint.x,
        endPoint.y,
        grid
    )

    //let newPath = PF.Util.smoothenPath(grid, path);

    return path
}

export function fillMatrixSection(
    matrix,
    dimensions,
    position,
    pcbHeight,
    pcbWidth,
    type,
    ref = null
) {
    console.log("pcbHeight")
    console.log(pcbHeight)
    console.log("pcbWidth")
    console.log(pcbWidth)

    const resolution = 0

    position = {
        x: parseFloat(position.x.toFixed(resolution)),
        y: parseFloat(position.y.toFixed(resolution)),
        z: parseFloat(position.z.toFixed(resolution)),
    }

    console.log("POSITION: ", position)

    console.log(
        "route pos: ",
        Math.abs(position.z + pcbHeight / 2),
        ", ",
        Math.abs(position.x + pcbWidth / 2)
    )
    const m_start = Math.abs(position.z + pcbHeight / 2) - 1 //bc m is down
    const n_start = Math.abs(position.x + pcbWidth / 2) - 1 //bc n is across

    console.log("MATRIX SECTION")
    console.log("type")
    console.log(type)

    const m_end = Math.abs(m_start + dimensions.h) + 1
    const n_end = Math.abs(n_start + dimensions.w) + 1

    // console.log(dimensions)
    console.log("m_start: ", m_start)
    console.log("m_end: ", m_end)

    //  console.log(`m_end: ${m_end}, n_end: ${n_end}`);

    for (let m = m_start; m < m_end; m++) {
        for (let n = n_start; n < n_end; n++) {
            try {
                if (type === "mountingHole") {
                    if (
                        (m === m_start || m === m_end - 1) &&
                        (n === n_start || n === n_end - 1)
                    ) {
                        matrix[m][n] = "corner"
                        continue
                    }

                    //fill center of mounting hole assuming 3x3;
                    if (m === m_start + 1 && n === n_start + 1) {
                        matrix[m][n] = "center"

                        const padSet = [
                            [m - 2, n - 1],
                            [m - 2, n],
                            [m - 2, n + 1],
                            [m - 1, n - 2],
                            [m, n - 2],
                            [m + 1, n - 2],
                            [m - 1, n + 2],
                            [m, n + 2],
                            [m + 1, n + 2],
                            [m + 2, n - 1],
                            [m + 2, n],
                            [m + 2, n + 1],
                        ]

                        padSet.forEach(set => {
                            console.log(set)

                            if (ref === "PWR") {
                                matrix[set[0]][set[1]] = "PWRpad"

                                addDebugCube({
                                    z: set[0] - pcbHeight / 2,
                                    y: 8,
                                    x: set[1] - pcbWidth / 2,
                                })
                            } else if (ref === "DATA") {
                                matrix[set[0]][set[1]] = "DATApad"

                                addDebugCube({
                                    z: set[0] - pcbHeight / 2,
                                    y: 8,
                                    x: set[1] - pcbWidth / 2,
                                })
                            } else if (ref === "GND1" || ref === "GND2") {
                                matrix[set[0]][set[1]] = "GNDpad"
                                addDebugCube({
                                    z: set[0] - pcbHeight / 2,
                                    y: 8,
                                    x: set[1] - pcbWidth / 2,
                                })
                            }
                        })
                    }
                }
            } catch (e) {
                console.log("error: ", e)
                console.log(m)
                console.log(n)
                break
            }
        }
    }

    return matrix
}

/**
 *
 * @param {Array[]} mat Matrix of size pcbHeight x pcbWidth
 * @param {Object} objects Of models present on carrier pcb
 * @param {number} pcbHeight
 * @param {number} pcbWidth
 * @param {string} type 'power' | 'data'
 * @returns
 */
export function fillStartPositions(mat, objects, pcbHeight, pcbWidth, type) {
    console.log("pcbWidth", pcbWidth)
    console.log("pcbHeight", pcbHeight)
    //start at mounting holes or connectors
    const startPositions = []

    //Sort objects based on position on carrier pcb
    objects.sort((a, b) => {
        if (a.position.x - a.position.z > b.position.x - b.position.z) {
            return 1
        } else {
            return -1
        }
    })

    switch (type) {
        case "data":
            break
        case "ground":
            break
        case "power":
            break
    }

    return startPositions
}

/**
 * Finds goal for given trace, if first trace of given type then goal will be
 * edge of board. If 1=< traces exists, then goal will be any point on closest
 * relevent trace.
 * @param {*} matrix routing matrix
 * @param {*} allLines already routed traces of both types
 * @param {*} type trace type of goal to be found
 * @returns all valid goals of a given trace
 */
/* export function findGoals(matrix, allLines, type){
    let possibleGoals = [];
    let correspondingLines;
    if (type === 'power'){
      correspondingLines = allLines.power;
    } else if (type === 'data'){
      correspondingLines = allLines.data
  
    }
  
  
    //if other lines of same type exist, then route to them
    // Every point on any other line of same type is returned
    if (correspondingLines.length > 0){
      for (let l = 0; l<correspondingLines.length; l++){
        if (correspondingLines[l]!== undefined){
          for (let p = 3; p<correspondingLines[l].length; p++){
            possibleGoals.push(correspondingLines[l][p]);
          }
        }
      }
    } else {
      console.log('not larger than one!!!');
    }
  
    return possibleGoals;
  } */
