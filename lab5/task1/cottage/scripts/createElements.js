import {
    createBoxGeometry,
    createPlaneGeometry,
    createStairsGeometry
} from './createGeometry.js'

const GRASS = './images/planes/grass.png'
const COBBLESTONE = './images/blocks/cobblestone.png'
const MOSSY_COBBLESTONE = './images/blocks/mossy-cobblestone.png'
const DOOR = './images/planes/door.png'
const WOOD = './images/blocks/woodPlank.png'
const GLASS = './images/planes/glass.png'

function createArea(widthX, widthY) {
    return createPlaneGeometry(widthX, widthY, GRASS, 0, -0.51, 0, false, true)
}

function createCobblestone(offsetX, offsetY, offsetZ) {
    return createBoxGeometry(COBBLESTONE, offsetX, offsetY, offsetZ, false)
}

function createMossyCobblestone(offsetX, offsetY, offsetZ) {
    return createBoxGeometry(MOSSY_COBBLESTONE, offsetX, offsetY, offsetZ, false)
}

function createDoor(offsetX, offsetY, offsetZ) {
    return createPlaneGeometry(1, 2, DOOR, offsetX, offsetY, offsetZ, true, false)
}

function createWood(offsetX, offsetY, offsetZ) {
    return createBoxGeometry(WOOD, offsetX, offsetY, offsetZ, false)
}

function createGlass(offsetX, offsetY, offsetZ, isRotateY) {
    return createPlaneGeometry(1, 1, GLASS, offsetX, offsetY, offsetZ, true, false, true, isRotateY)
}

function createWoodStairs(offsetX, offsetY, offsetZ, isRotate) {
    return createStairsGeometry(WOOD, offsetX, offsetY, offsetZ, isRotate)
}

function createCobblestoneStairs(offsetX, offsetY, offsetZ, isRotate) {
    return createStairsGeometry(COBBLESTONE, offsetX, offsetY, offsetZ, isRotate)
}

export {
    createArea,
    createCobblestone,
    createMossyCobblestone,
    createDoor,
    createWood,
    createGlass,
    createWoodStairs,
    createCobblestoneStairs
}