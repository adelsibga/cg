import * as THREE from 'https://cdn.skypack.dev/three@0.136.0'

let scene = new THREE.Scene()
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 4

let renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// odd = (n-1)/2
// even = (n/2 -1) сделать два раза если
// строить звезды прямыми линиями как строится 5конечная звезда не отрывая руки
const _ = undefined
const INNER_RADIUS = 0.5
const OUTER_RADIUS = 1
const STAR_POINTS = 5

const STARS_COLOR = 0xff55ff
const STARS_COLOR_ARR = [0xffd700, 0xff55ff, 0x00ff00, 0x0000ff]

const STARS_POSITIONS_ARR = [
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

function drawShapes(isDrawingStars = true, isDrawingCircle = false, isDrawingPolygon = false) {
    STARS_POSITIONS_ARR.forEach((position, index) => {
        if (isDrawingStars) {
            let geometry = createStarGeometry(STAR_POINTS + index, INNER_RADIUS, OUTER_RADIUS)
            let material = new THREE.MeshBasicMaterial({color: STARS_COLOR_ARR[index], side: THREE.DoubleSide})
            let star = new THREE.Mesh(geometry, material)

            star.position.copy(position)
            scene.add(star)
        }

        if (isDrawingCircle) {
            let circleGeometry = new THREE.CircleGeometry(OUTER_RADIUS, 32)
            let circleMaterial = new THREE.LineBasicMaterial({color: 0xffffff})
            let circle = new THREE.Line(circleGeometry, circleMaterial)

            circle.position.copy(position)
            scene.add(circle)
        }

        if (isDrawingPolygon) {
            let polygonGeometry = new THREE.CircleGeometry(OUTER_RADIUS, STAR_POINTS + index)
            let polygonMaterial = new THREE.LineBasicMaterial({color: 0xffffff})
            let polygon = new THREE.Line(polygonGeometry, polygonMaterial)

            polygon.position.copy(position)
            scene.add(polygon)
        }
    })
}

drawShapes()

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
