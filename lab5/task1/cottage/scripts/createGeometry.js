import * as THREE from 'https://cdn.skypack.dev/three@0.136.0'
import {rotateAroundObjectAxis} from './helpers.js'

function createBoxGeometry(texture, offsetX, offsetY, offsetZ, transparent) {
    const box = new THREE.BoxGeometry(1, 1, 1)

    return createObject(box, texture, offsetX, offsetY, offsetZ, transparent)
}

function createPlaneGeometry(widthX, widthY, texture, offsetX, offsetY, offsetZ, transparent, isArea, isGlass, isRotateY) {
    const plane = new THREE.PlaneGeometry(widthX, widthY)

    return createObject(plane, texture, offsetX, offsetY, offsetZ, transparent, isArea, isGlass, isRotateY)
}

function createObject(geometry, texture, offsetX, offsetY, offsetZ, transparent, isArea, isGlass, isRotateY, isStairs, isRotateX) {
    const material = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        map: new THREE.TextureLoader().load(texture),
        transparent: transparent
    })

    let object = new THREE.Mesh(geometry, material)
    object.position.x = offsetX
    object.position.y = offsetY
    object.position.z = offsetZ
    // TODO: организовать switch case
    if (isArea) {
        rotateAroundObjectAxis(object, new THREE.Vector3(1, 0, 0), Math.PI / 2)
    }
    else if (isGlass && isRotateY) {
        rotateAroundObjectAxis(object, new THREE.Vector3(0, 1, 0), Math.PI / 2)
    }
    else if (isStairs && isRotateX) {
        rotateAroundObjectAxis(object, new THREE.Vector3(1, 0, 0), Math.PI / 2)
    }

    return object
}

function createStairsGeometry(texture, offsetX, offsetY, offsetZ, isRotate) {
    const stairs = new THREE.BoxGeometry(1, 1, 0.5)
    return createObject(stairs, texture, offsetX, offsetY, offsetZ, false, false, false, false, true, isRotate)
}

function createFlashLightHull(texture, offsetX, offsetY, offsetZ) {
    const box = new THREE.BoxGeometry(0.25, 1, 0.25)

    return createObject(box, texture, offsetX, offsetY, offsetZ, false)
}

export {
    createBoxGeometry,
    createPlaneGeometry,
    createStairsGeometry,
    createFlashLightHull
}