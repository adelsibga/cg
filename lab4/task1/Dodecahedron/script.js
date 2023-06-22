import * as THREE from 'https://cdn.skypack.dev/three@0.136.0'
import {OrbitControls} from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls'

// TODO: добавить цвет для фигуры
// TODO: добавить ресайз окна и смешение фигуры

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const RADIUS = 200
const BLACK_COLOR = 0x000000
const WHITE_COLOR = 0xffffff

let scene = new THREE.Scene()
scene.background = new THREE.Color(WHITE_COLOR)

let camera = new THREE.PerspectiveCamera(40, WIDTH / HEIGHT, 1, 10000)
camera.position.set(250, 30, 800)

let renderer = new THREE.WebGLRenderer()
renderer.setSize(WIDTH, HEIGHT)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)

const geometry = new THREE.DodecahedronGeometry(RADIUS, 0)
const material = new THREE.MeshPhongMaterial({
    color: '#f5f',
    transparent: true, opacity: 0.6
})

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const materialWireframe = new THREE.MeshPhongMaterial({
    color: BLACK_COLOR,
    wireframe: true
})

const meshColor = new THREE.Mesh(geometry, materialWireframe)
scene.add(meshColor)

const light = new THREE.DirectionalLight(WHITE_COLOR, 1)
scene.add(light)
light.position.set(3, 3, 3)

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    controls.update()
}

animate()