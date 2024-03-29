import * as THREE from 'https://cdn.skypack.dev/three@0.136.0'
import {OrbitControls} from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls'

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
controls.enableDamping = true

const geometry = new THREE.DodecahedronGeometry(RADIUS, 0)

const step = 2
let colors = []
for (let r = 0; r <= step; r++) {
    for (let g = 0; g <= step; g++) {
        for (let b = 0; b <= step; b++) {
            colors.push([(r / step), (g / step), (b / step)])
            colors.push([(r / step), (g / step), (b / step)])
            colors.push([(r / step), (g / step), (b / step)])
        }
    }
}
const colorsFloat = new Float32Array(colors.flat())
geometry.setAttribute('color', new THREE.BufferAttribute(colorsFloat, 3))

const material = new THREE.MeshPhongMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.5,
    side: THREE.DoubleSide
})

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const materialWireframe = new THREE.MeshPhongMaterial({
    color: BLACK_COLOR,
    wireframe: true,
    transparent: true
})

const meshColor = new THREE.Mesh(geometry, materialWireframe)
scene.add(meshColor)

const light = new THREE.DirectionalLight(WHITE_COLOR, 1)
light.position.set(3, 3, 3)
scene.add(light)

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    controls.update()
}

animate()