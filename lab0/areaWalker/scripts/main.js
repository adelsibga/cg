import * as THREE from 'https://cdn.skypack.dev/three@0.136.0'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.01, 1000)
camera.position.set(0, 3, 0)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(innerWidth, innerHeight)
document.body.appendChild(renderer.domElement)

scene.add(new THREE.GridHelper(500, 100, 0x666666, 0x444444))

let speed = 0.1,
    maxSpeed = 0.1,
    friction = 0.91,
    position = {x: 0, y: 0, z: 0},
    velocity = {x: 0, y: 0, z: 0},
    rotation = 0,
    keyPressed = {}

let update = () => {
    if (keyPressed['w'] && velocity.z > -maxSpeed) velocity.z -= speed
    if (keyPressed['s'] && velocity.z < maxSpeed) velocity.z += speed
    if (keyPressed['a'] && velocity.x > -maxSpeed) velocity.x -= speed
    if (keyPressed['d'] && velocity.x < maxSpeed) velocity.x += speed 

    velocity.z *= friction
    velocity.x *= friction

    position.z += velocity.z * Math.cos(rotation)
    position.x += velocity.z * Math.sin(rotation)

    position.z += velocity.x * Math.cos(rotation + Math.PI / 2)
    position.x += velocity.x * Math.sin(rotation + Math.PI / 2)
}

setInterval(update, 10)

addEventListener('keydown', e => keyPressed[e.key] = true)
addEventListener('keyup', e => keyPressed[e.key] = false)
addEventListener('mousemove', e => rotation = e.x * Math.PI * 2 / innerWidth)

function animate() {
    camera.rotation.y = rotation
    camera.position.x = position.x
    camera.position.z = position.z
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}

animate()

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}

window.addEventListener('resize', onWindowResize, false)
