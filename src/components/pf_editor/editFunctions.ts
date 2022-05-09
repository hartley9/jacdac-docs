import * as THREE from "three"

export function rotateX(obj: THREE.Object3D | undefined): void{
    if (obj === undefined){
        console.log('Cant rotate: no object has been selected')
    } else {
        obj.rotateY((Math.PI / 2));
    }
}

export function flip(obj: THREE.Object3D | undefined): void {
    if (obj === undefined){
        console.log('Cant rotate: no object has been selected')
    } else {
        obj.rotateX((Math.PI / 2));
    } 
}

export function editZIndex(obj: THREE.Object3D){
    console.log('z-index userData');
    console.log(obj.userData);
}

export function deleteObject(obj: THREE.Object3D, objectRefs: []){


    console.log('objrefs');
    console.log(objectRefs);

    console.log('obj');
    console.log(obj);


    
    for (let i=0; i<objectRefs.length; i++){
        const currObjRef = objectRefs[i].props;
        const selectedObjTopLevelUUID = obj.parent.name; // note we have to check parent as we are one more group
        const currentObjTopLevelUUID = currObjRef.name;


        console.log('is it: ')
        console.log(currentObjTopLevelUUID)

        if (selectedObjTopLevelUUID === currentObjTopLevelUUID){
            console.log('IVE FOUND IT')
            objectRefs.splice(i, 1);

            console.log('new object refs');
            console.log(objectRefs);

            obj.parent.parent.remove(obj.parent);

        }
    }
}