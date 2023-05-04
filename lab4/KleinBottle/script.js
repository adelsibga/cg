import * as THREE from 'https://cdn.skypack.dev/three@0.136.0'
import {OrbitControls} from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls'
import {ParametricGeometry} from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/geometries/ParametricGeometry'
import {ParametricGeometries} from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/geometries/ParametricGeometries'

let scene = new THREE.Scene()
let camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000)
camera.position.setScalar(10)

let renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)

const geometry = new ParametricGeometry(ParametricGeometries.klein, 25, 25)
const material = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('https://threejs.org/examples/textures/uv_grid_opengl.jpg')})
const klein = new THREE.Mesh(geometry, material)
scene.add(klein)

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    controls.update()
}

animate()