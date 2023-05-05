import * as THREE from 'https://cdn.skypack.dev/three@0.136.0'
import {OrbitControls} from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls'

// TODO: добавить освещение
// TODO: добавить цвет для фигуры
// TODO: добавить прозрачность для фигуры
// TODO: добавить ресайз окна и смешение фигуры

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const RADIUS = 200

let scene = new THREE.Scene()
scene.background = new THREE.Color(0xffffff)

let camera = new THREE.PerspectiveCamera(40, WIDTH / HEIGHT, 1, 10000)
camera.position.set(250, 30, 800)

// const light = new THREE.DirectionalLight(0xffffff)
// light.position.set(0, 0, 1)
// scene.add(light)

let renderer = new THREE.WebGLRenderer()
renderer.setSize(WIDTH, HEIGHT)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)

const geometry = new THREE.DodecahedronGeometry(RADIUS, 0)
const material = new THREE.MeshBasicMaterial({
    color: 0x000000,
    wireframe: true
})

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)


function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    controls.update()
}

animate()