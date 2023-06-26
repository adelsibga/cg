import * as THREE from 'https://cdn.skypack.dev/three@0.136.0'
import {OrbitControls} from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls'

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const TEST_COLOR = 0xff55ff
const BLACK_COLOR = 0x000000
const WHITE_COLOR = 0xffffff

function aspect() {
    return WIDTH / HEIGHT
}

let scene = new THREE.Scene()

let camera = new THREE.PerspectiveCamera(75, aspect(), 1, 1000)
camera.position.set(1, 3, -5)

let renderer = new THREE.WebGLRenderer()
renderer.setSize(WIDTH, HEIGHT)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

function createShip() {
    const SHIP_TEXTURE_1 = 'https://threejs.org/examples/textures/transition/transition4.png'
    const SHIP_TEXTURE_2 = 'https://threejs.org/examples/textures/water.jpg'
    const SHIP_TEXTURE_LEGO = '1.webp'

    const ship = new THREE.Object3D()
    const hull = new THREE.Object3D()
    hull.scale.x = 2
    hull.scale.y = 0.5
    hull.scale.z = 3

    const hullMaterial = new THREE.MeshBasicMaterial({
        color: 0x949494,
        map: new THREE.TextureLoader().load(SHIP_TEXTURE_2)
    })

    const hullMesh = new THREE.Mesh(new THREE.TetrahedronGeometry(1, 0), hullMaterial)
    hullMesh.position.z = 0.335
    hullMesh.position.y = -0.05
    hullMesh.rotation.y = Math.PI / 4
    hullMesh.rotation.x = 3.76
    hullMesh.rotation.z = 0
    hull.add(hullMesh)

    ship.add(hull)

    return ship
}

// function createJet() {
//    
// }

function createSpace() {
    const SKY_DAY = 'https://threejs.org/examples/textures/cube/skyboxsun25deg/nx.jpg'
    const SKY_MILKY_WAY = 'https://threejs.org/examples/textures/cube/MilkyWay/dark-s_px.jpg'

    return scene.background = new THREE.TextureLoader().load(SKY_DAY)
}

scene.add(createShip())
// scene.add(createJet())
scene.add(createSpace())

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    controls.update()
}

animate()