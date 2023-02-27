const fence = document.querySelector('.fence')
const house = document.querySelector('.house')

let fenceDragging = false
let houseDragging = false

function getCoordinate(str) {
    if (!str) {
        return 0
    }

    const openBracket = str.indexOf('(')
    const closeBracket = str.indexOf(')')

    return parseInt(str.slice(openBracket + 1, closeBracket))
}

function handleDragAndDrop(element, deltaX, deltaY) {
    const transforms = element.style.transform.split(' ')
    const translateX = transforms.find(x => x.includes('translateX'))
    const translateY = transforms.find(x => x.includes('translateY'))

    const x = getCoordinate(translateX)
    const y = getCoordinate(translateY)
    
    element.style.transform = `translateX(${deltaX + x}px) translateY(${deltaY + y}px)`
}

function initListeners() {
    document.addEventListener('mouseup', () => {
        fenceDragging = houseDragging = false
    })
    
    fence.addEventListener('mousedown', () => {
        fenceDragging = true
    })
    
    house.addEventListener('mousedown', () => {
        houseDragging = true
    })
    
    document.addEventListener('mousemove', (e) => {
        if (fenceDragging) {
            Array.from(fence.children)
                .forEach(c => handleDragAndDrop(c, e.movementX, e.movementY))
        }
        else if (houseDragging) {
            Array.from(house.children)
                .forEach(c => handleDragAndDrop(c, e.movementX, e.movementY))
        }
    })
}

initListeners()