const canvasSketch = require('canvas-sketch')

global.THREE = require('three')

require('three/examples/js/controls/OrbitControls')

const settings = {
    animate: true,
    context: 'webgl',
    attributes: {antialias: true}
}

const sketch = ({context}) => {
    const renderer = new THREE.WebGLRenderer({
        context
    })

    renderer.setClearColor('#fff', 1)

    const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 100)
    camera.position.set(2, 2, 1)
    camera.lookAt(0,0,0)

    const controls = new THREE.OrbitControls(camera, context.canvas)

    const scene = new THREE.Scene()

    const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshPhysicalMaterial({
            color: 'white',
            roughness: 0.75,
            flatShading: true
        })
    )
    scene.add(mesh)

    scene.add(new THREE.AmbientLight('#ffcc00'))

    const light = new THREE.PointLight('#45caf7', 1, 15.5)
    light.position.set(2, 2, -4).multiplyScalar(1.5)
    scene.add(light)

    return {
        resize({pixelRatio, viewportWidth, viewportHeight}) {
            renderer.setPixelRatio(pixelRatio)
            renderer.setSize(viewportWidth, viewportHeight)
            camera.aspect = viewportWidth / viewportHeight
            camera.updateProjectionMatrix()
        },
        render() {
            controls.update()
            renderer.render(camera)
        }
    }
}

canvasSketch(sketch, settings)
