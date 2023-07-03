import * as THREE from 'https://cdn.skypack.dev/three@0.136.0'
import {OrbitControls} from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls'

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const CLEAR_COLOR = 0xffffff

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000)
camera.position.set(0, 0, 3)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(WIDTH, HEIGHT)
renderer.setClearColor(CLEAR_COLOR)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)

const geometry = new THREE.BufferGeometry()
const vertices = []
const initialRange = Math.PI
const finalRange = Math.PI / 1000

for (let x = 0; x < 2 * initialRange; x += finalRange) {
    vertices.push(x, 0, 0)
}
geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

const material = new THREE.ShaderMaterial({
    uniforms: {
        res: {
            value: new THREE.Vector2(WIDTH, HEIGHT)
        }
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader
})

const cannabola = new THREE.Line(geometry, material)
scene.add(cannabola)

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    controls.update()
}

animate()

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}

window.addEventListener('resize', onWindowResize, false)
