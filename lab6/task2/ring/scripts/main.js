import * as THREE from 'https://cdn.skypack.dev/three@0.136.0'
import {OrbitControls} from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls'

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const CLEAR_COLOR = 0xffffff

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(100, WIDTH / HEIGHT, 1, 1000)
camera.position.set(0, 0, 500)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(WIDTH, HEIGHT)
renderer.setClearColor(CLEAR_COLOR)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.screenSpacePanning = false
controls.minDistance = 200
controls.maxDistance = 1000

const center = {
    x: WIDTH / 1.3,
    y: HEIGHT / 2
}

const centerSecond = {
    x: WIDTH / 2,
    y: HEIGHT / 2
}

const geometry = new THREE.PlaneGeometry(WIDTH / 2, HEIGHT / 2)
const material = new THREE.ShaderMaterial({
    uniforms: {
        res: {
            value: new THREE.Vector2(WIDTH, HEIGHT)
        },
        center: {
            value: center
        },
        offset: {
            value: centerSecond
        }
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader
})

const ring = new THREE.Mesh(geometry, material)
scene.add(ring)

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
