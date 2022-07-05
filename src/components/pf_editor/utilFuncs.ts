

export function getModulesFromScene(scene){
    const mhLocations = []
    
    scene.traverse(obj => {
        if (obj.userData.isModule) {
            const moduleName = obj.userData.name

            const position = obj.parent.position
            const rotation = obj.rotation

            mhLocations.push({
                position: JSON.parse(JSON.stringify(position)),
                rotation: JSON.parse(JSON.stringify(rotation)),
                moduleName: moduleName,
            })
        }
    })

    return mhLocations; 
}