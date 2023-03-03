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

function dragAndDrop(e, X, Y) {
    const transforms = e.style.transform.split(' ')
    const translateX = transforms.find(x => x.includes('translateX'))
    const translateY = transforms.find(x => x.includes('translateY'))

    const x = getCoordinate(translateX)
    const y = getCoordinate(translateY)

    e.style.transform = `translateX(${X + x}px) translateY(${Y + y}px)`
}

function initListeners() {
    const groupList = document.querySelectorAll('g')

    for (let i = 0; i < groupList.length; i++) {
        groupList[i].addEventListener('mousedown', () => {
            if (groupList[i] === fence) {
                fenceDragging = true
            }
            else {
                houseDragging = true
            }
        })
    }

    document.addEventListener('mouseup', () => {
        fenceDragging = houseDragging = false
    })

    document.addEventListener('mousemove', (e) => {
        if (fenceDragging) {
            Array.from(fence.children).forEach(c => dragAndDrop(c, e.movementX, e.movementY))
        }
        else if (houseDragging) {
            Array.from(house.children).forEach(c => dragAndDrop(c, e.movementX, e.movementY))
        }
    })
}

initListeners()