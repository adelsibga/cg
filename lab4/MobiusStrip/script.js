import * as THREE from './libs/three.module.js'
import {Cache as scene} from './libs/three.module.js'

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight

window.onload = () => {
    const canvas = document.getElementById('canvas')
    canvas.width = WIDTH
    canvas.height = HEIGHT

    let geometry = new THREE.TorusGeometry(10, 3, 16, 100)
    let material = new THREE.MeshBasicMaterial({color: 0xffff00})
    let torus = new THREE.Mesh(geometry, material)
    scene.add(torus)
}