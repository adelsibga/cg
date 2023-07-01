import * as THREE from 'https://cdn.skypack.dev/three@0.136.0'
import {OrbitControls} from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls'
import {draw} from './draw.js'

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const loader = new THREE.TextureLoader()

const FOG_COLOR = 0xcccccc
const SKY_DAY = './images/anotherTexture/sky.jpg'
const DEBUG_COLOR = 0xff55ff

const scene = new THREE.Scene()
scene.background = loader.load(SKY_DAY)
scene.fog = new THREE.FogExp2(FOG_COLOR, 0.1, 15)

const camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 1, 1000)
camera.position.set(0, 7, 15)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(WIDTH, HEIGHT)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
// TODO: fix this
const light = new THREE.DirectionalLight(0xffffff, 0.5);
light.position.setScalar(10);
scene.add(light);
scene.add(new THREE.AmbientLight(0xffffff, 0.5));

draw(scene)

function animate() {
    requestAnimationFrame(animate)
    scene.rotation.y += 0.004
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