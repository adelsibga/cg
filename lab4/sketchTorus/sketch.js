const canvasSketch = require('canvas-sketch')

global.THREE = require('three')

require('three/examples/js/controls/OrbitControls')

const settings = {
    animate: true,
    context: 'webgl',
    attributes: {antialias: true}
}

const sketch = ({context}) => {
    const WIDTH = window.innerWidth
    const HEIGHT = window.innerHeight

    const renderer = new THREE.WebGLRenderer({
        context
    })

    renderer.setClearColor('#000', 1)

    const camera = new THREE.PerspectiveCamera(100, WIDTH / HEIGHT, 1, 1000)
    camera.position.set(0, 0, 25)

    const controls = new THREE.OrbitControls(camera, context.canvas)

    const scene = new THREE.Scene()

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
    const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true
    })

    const mesh = new THREE.Mesh(
        geometry,
        material
    )
    scene.add(mesh)

    return {
        resize({pixelRatio, viewportWidth, viewportHeight}) {
            renderer.setPixelRatio(pixelRatio)
            renderer.setSize(viewportWidth, viewportHeight)
            camera.aspect = viewportWidth / viewportHeight
            camera.updateProjectionMatrix()
        },
        render({time}) {
            controls.update()
            mesh.rotation.y = time * (10 * Math.PI / 180)
            renderer.render(scene, camera)
        },
        unload() {
            renderer.dispose()
        }
    }
}

canvasSketch(sketch, settings)
