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

function createJet(r, len, x, y) {
    function defaultVertexShader() {
        return `
            varying vec2 vUv;
            varying vec3 vPos;  
            void main() {
              vUv = uv;  
              vPos = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
            }
        `
    }

    function mat(fragmentShader) {
        return new THREE.ShaderMaterial({
            uniforms: {
                time: {value: 0.0}
            },
            vertexShader: defaultVertexShader(),
            fragmentShader,
            side: THREE.DoubleSide,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        })
    }

    let material_1 = mat(`
        varying vec2 vUv;
        varying vec3 vPos;
        uniform float time;
        void main() {
            vec2 uv = vUv;
            uv -= 0.5;
            float a = atan(uv.y, uv.x)+0.72;
            float c = 1. - length(uv)*(3. + sin(a*6. + sin(time)*0.2)*0.5 + 0.35*sin(time));
            gl_FragColor = vec4(c*0.5,c*0.5,c*(0.75+0.25*sin(time)),c*c);
        }
    `)

    let JET_MATERIAL = mat(`
        varying vec2 vUv;
        varying vec3 vPos;
        uniform float time;
        void main() {
            vec2 uv = vUv;
            uv.x -= 0.5;
            float c = 1. - length(uv)*(3.5+0.25*cos(time));
            gl_FragColor = vec4(c*0.5,c*0.5,c,c) ;
        }
    `)

    let light = new THREE.Object3D()
    let rect = new THREE.PlaneGeometry(r, len, 1, 1)
    let square = new THREE.PlaneGeometry(r * 1.3, r * 1.3, 1, 1)

    let plane = new THREE.Mesh(square, material_1)
    plane.rotation.x = Math.PI / 2
    light.add(plane)
    plane = new THREE.Mesh(square, material_1)
    plane.rotation.x = Math.PI / 2
    plane.position.y = 0.01
    light.add(plane)
    let planesCount = 3
    for (let i = 0; i < planesCount; i++) {
        plane = new THREE.Mesh(rect, JET_MATERIAL)
        plane.rotation.y = i * Math.PI / planesCount
        plane.position.y = len / 2
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
    const SKY_MILKY_WAY = './images/space.jpg'

    return scene.background = loader.load(SKY_DAY)
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