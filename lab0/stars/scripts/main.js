import * as THREE from 'https://cdn.skypack.dev/three@0.136.0'

let scene = new THREE.Scene()
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 4

let renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const STARS_COLOR = 0xff55ff
const INNER_RADIUS = 0.5
const OUTER_RADIUS = 1
const STAR_POINTS = 5

const positions = [
    new THREE.Vector3(-1.5, 1.5, 0),
    new THREE.Vector3(1.5, 1.5, 0),
    new THREE.Vector3(-1.5, -1.5, 0),
    new THREE.Vector3(1.5, -1.5, 0)
]

function starGeometry(n, innerRadius, outerRadius) {
    n *= 2
    const shape = new THREE.Shape()

    for (let i = 0; i < n; i++) {
        const angle = Math.PI * 2 / n * i
        const radius = i % 2 === 0 ? outerRadius : innerRadius

        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        if (i === 0) {
            shape.moveTo(x, y)
        }
        else {
            shape.lineTo(x, y)
        }
    }

    return new THREE.ShapeGeometry(shape)
}

function createStarGeometry(n, innerRadius, outerRadius) {
    return starGeometry(n, innerRadius, outerRadius)
}

positions.forEach((position, index) => {
    let geometry = createStarGeometry(STAR_POINTS + index, INNER_RADIUS, OUTER_RADIUS)
    let material = new THREE.MeshBasicMaterial({color: STARS_COLOR, side: THREE.DoubleSide})
    let star = new THREE.Mesh(geometry, material)

    star.position.copy(position)
    scene.add(star)
})

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
