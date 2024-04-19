import * as THREE from 'https://cdn.skypack.dev/three@0.136.0'

let scene = new THREE.Scene()
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 7

let renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

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

const innerMaterial = new THREE.MeshBasicMaterial({
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

const innerRadius = 0.5
const outerRadius = 1

const starMesh = new THREE.Mesh(starGeometry(starPoint1, innerRadius, outerRadius), innerMaterial)
scene.add(starMesh)
starMesh.position.set(leftX, topY, commonY)

const starMesh2 = new THREE.Mesh(starGeometry(starPoint2, innerRadius, outerRadius), innerMaterial)
scene.add(starMesh2)
starMesh2.position.set(rightX, topY, commonY)

const starMesh3 = new THREE.Mesh(starGeometry(starPoint3, innerRadius, outerRadius), innerMaterial)
scene.add(starMesh3)
starMesh3.position.set(leftX, bottomY, commonY)

const starMesh4 = new THREE.Mesh(starGeometry(starPoint4, innerRadius, outerRadius), innerMaterial)
scene.add(starMesh4)
starMesh4.position.set(rightX, bottomY, commonY)

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
