import * as THREE from 'https://cdn.skypack.dev/three@0.136.0'
import {OrbitControls} from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls'

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const TEST_COLOR = 0xff55ff
const BLACK_COLOR = 0x000000
const WHITE_COLOR = 0xffffff
const loader = new THREE.TextureLoader()

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

function createJet(radius, length, x, y) {
    const vertexShader = `
        varying vec2 vUV;
            
        void main() {
            vUV = uv;  
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `

    function material(fragmentShader) {
        return new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader,
            side: THREE.DoubleSide,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        })
    }

    const starJetMaterial = material(`
        varying vec2 vUV;
        
        void main() {
            vec2 uv = vUV;
            uv -= 0.5;
            
            float jetRadius = atan(uv.y, uv.x) + 0.72;
            float color = 1.0 - length(uv) * (3.0 + sin(jetRadius * 6.0 + sin(0.0) * 0.2) * 0.5);
            gl_FragColor = vec4(color * 0.5, color * 0.5, color * (0.75 + 0.25 * sin(0.0)), color * color);
        }
    `)

    let jetFlame = material(`
        varying vec2 vUV;
        
        void main() {
            vec2 uv = vUV;
            uv.x -= 0.5;
            
            float color = 1.0 - length(uv) * (3.5 + 0.25 * cos(0.0));
            gl_FragColor = vec4(color * 0.5, color * 0.5, color, color) ;
        }
    `)

    const light = new THREE.Object3D()
    const rect = new THREE.PlaneGeometry(radius, length, 1, 1)
    const square = new THREE.PlaneGeometry(radius * 1.3, radius * 1.3, 1, 1)

    let plane = new THREE.Mesh(square, starJetMaterial)
    plane.rotation.x = Math.PI / 2
    plane.position.y = 0.01
    light.add(plane)

    let planesCount = 3
    for (let i = 0; i < planesCount; i++) {
        plane = new THREE.Mesh(rect, jetFlame)
        plane.rotation.y = i * Math.PI / planesCount
        plane.position.y = length / 2
        light.add(plane)
    }
    light.position.x = x
    light.position.y = y || 0
    light.rotation.x = -Math.PI / 2

    return light
}

function createShip() {
    const SHIP_TEXTURE_1 = './images/transition4.png'
    const SHIP_TEXTURE_2 = './images/water.jpg'
    const SHIP_TEXTURE_LEGO = './images/lego.webp'

    const ship = new THREE.Object3D()
    const hull = new THREE.Object3D()
    hull.scale.x = 2
    hull.scale.y = 0.5
    hull.scale.z = 3

    const hullMaterial = new THREE.MeshBasicMaterial({
        color: 0x949494,
        map: loader.load(SHIP_TEXTURE_LEGO)
    })

    const hullMesh = new THREE.Mesh(new THREE.TetrahedronGeometry(1, 0), hullMaterial)
    hullMesh.position.z = 0.335
    hullMesh.position.y = -0.05
    hullMesh.rotation.y = Math.PI / 4
    hullMesh.rotation.x = 3.76
    hullMesh.rotation.z = 0

    hull.add(hullMesh)
    ship.add(hull)

    ship.add(createJet(0.5, 3, -0.5))
    ship.add(createJet(0.7, 7, -0.2, -0.1))
    ship.add(createJet(1, 10, 0, 0.1))
    ship.add(createJet(0.7, 7, 0.2, -0.1))
    ship.add(createJet(0.5, 3, 0.5))

    return ship
}

function createSpace() {
    const SKY_DAY = './images/sky.jpg'
    const SKY_NIGHT_WITH_STARS = './images/space.jpg'

    return scene.background = loader.load(SKY_NIGHT_WITH_STARS)
}

scene.add(createShip())
scene.add(createSpace())

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