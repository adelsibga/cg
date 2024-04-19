import * as THREE from 'https://cdn.skypack.dev/three@0.136.0'

let scene = new THREE.Scene()
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 7

let renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

function starGeometry(n) {
    n *= 2

    const geometry = new THREE.BufferGeometry()
    const vertices = []
    const smallRadius = 0.5

    for (let i = 0; i < n; i++) {
        const angle = (i / n) * Math.PI * 2
        const radius = i % 2 === 0 ? 1 : smallRadius

        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        vertices.push(x, y, 0)
    }

    vertices.push(vertices[0], vertices[1], 0)
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

    return geometry
}

const material = new THREE.LineBasicMaterial({
    color: 0xff55ff
})

const starPoint1 = 5,
    starPoint2 = starPoint1 + 1,
    starPoint3 = starPoint1 + 2,
    starPoint4 = starPoint1 + 3

const leftX = -1.5,
    rightX = -leftX,
    topY = 1.5,
    bottomY = -topY,
    commonY = 3

const star = new THREE.Line(starGeometry(starPoint1), material)
scene.add(star)
star.position.set(leftX, topY, commonY)

const star2 = new THREE.Line(starGeometry(starPoint2), material)
scene.add(star2)
star2.position.set(rightX, topY, commonY)

const star3 = new THREE.Line(starGeometry(starPoint3), material)
scene.add(star3)
star3.position.set(leftX, bottomY, commonY)

const star4 = new THREE.Line(starGeometry(starPoint4), material)
scene.add(star4)
star4.position.set(rightX, bottomY, commonY)

function animate() {
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
