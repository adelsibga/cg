const scene = new THREE.Scene()
scene.background = new THREE.Color(0x000000)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 6
scene.add(camera)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const stripWidth = 2
const stripHeight = 2
const stripSegments = 64

// TODO: correct the formula
const stripGeometry = new THREE.ParametricGeometry(function (u, v, out) {
    const t = u * Math.PI * 2
    const x = (stripWidth + v * Math.cos(t / 2)) * Math.cos(t)
    const y = (stripHeight + v * Math.cos(t / 2)) * Math.sin(t)
    const z = v * Math.sin(u)
    out.set(x, y, z)

}, stripSegments, stripSegments)

const stripMaterial = new THREE.LineBasicMaterial({color: 0xffffff})
const stripMesh = new THREE.LineSegments(stripGeometry, stripMaterial)

stripMesh.rotation.x = 2
scene.add(stripMesh)

const controls = new THREE.OrbitControls(camera, renderer.domElement)

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    controls.update()
}

animate()