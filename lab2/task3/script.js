const dragItems = document.querySelectorAll('.dragItem')
const dropZones = document.querySelectorAll('.dropZone')

const closeStartModal = document.querySelector('.js-close-modal-window-btn-start')
const openStartModal = document.querySelector('.js-open-modal-window-btn-start')
const startModal = document.querySelector('.js-modal-window-start')
const modalOverlay = document.querySelector('.js-modal-overlay')
const levelPassedModal = document.querySelector('.js-modal-window-level-passed')

let dropZoneGroupGlobal = ''

let draggedItem = null
let droppedItem = null

const levelNumber = window.location.pathname.slice(-6, -5)

dragItems.forEach((dragItem) => {
    dragItem.addEventListener('dragstart', handleDragstart)
    dragItem.addEventListener('dragend', handleDragend)
    dragItem.addEventListener('drag', handleDrag)

    dragItem.addEventListener('dragenter', () => {
        if (draggedItem !== droppedItem) {
            droppedItem = dragItem
        }
    })

    dragItem.addEventListener('dragleave', () => {
        droppedItem = null
    })
})

dropZones.forEach((dropZone) => {
    dropZone.addEventListener('dragenter', handleDragenter)
    dropZone.addEventListener('dragleave', handleDragleave)
    dropZone.addEventListener('dragover', handleDragover)
    dropZone.addEventListener('drop', handleDrop)
})

function handleDragstart() {
    this.classList.add('dragItem--active')
    draggedItem = this
}

function handleDragend() {
    const dataDragItem = this.getAttribute('data-pair')
    if (dropZoneGroupGlobal === dataDragItem) {
        playSoundPuk(levelNumber)
        this.setAttribute('draggable', 'false')
    }

    this.classList.remove('dragItem--active')
    draggedItem = null

    const nonDraggableItems = document.querySelectorAll('[draggable="false"]')
    if (nonDraggableItems.length === dragItems.length) {
        levelPassedModal.classList.remove('hidden')
        modalOverlay.classList.remove('hidden')
    }
}

function handleDrag(event) {
}

function handleDragenter(event) {
    event.preventDefault()
    this.classList.add('dropZone--active')
}

function handleDragleave() {
    this.classList.remove('dropZone--active')
}

function handleDragover(event) {
    event.preventDefault()
}

function handleDrop() {
    if (droppedItem) {
        if (droppedItem.parentElement === draggedItem.parentElement) {
            const children = Array.from(droppedItem.parentElement.children)
            const draggedIndex = children.indexOf(draggedItem)
            const droppedIndex = children.indexOf(droppedItem)

            if (draggedIndex > droppedIndex) {
                draggedItem.parentElement.insertBefore(draggedItem, droppedItem)
            }
            else {
                draggedItem.parentElement.insertBefore(
                    draggedItem,
                    droppedItem.nextElementSibling
                )
            }
        }
        else {
            this.insertBefore(draggedItem, droppedItem)
        }
    }
    else {
        this.append(draggedItem)
    }

    dropZones.forEach((x) => x.classList.remove('dropZone--active'))

    dropZoneGroupGlobal = this.getAttribute('data-zone')
}

closeModalWindow(closeStartModal, startModal)
openModalWindow(openStartModal, startModal)

function closeModalWindow(closeBtn, modalWindow) {
    closeBtn.addEventListener('click', () => {
        modalWindow.classList.add('hidden')
        modalOverlay.classList.add('hidden')
    })
}

function openModalWindow(openBtn, modalWindow) {
    openBtn.addEventListener('click', () => {
        modalWindow.classList.remove('hidden')
        modalOverlay.classList.remove('hidden')
    })
}

function playSoundPuk(level) {
    let url = ''

    const audio = new Audio()
    switch (level) {
        case '1':
            url = './assets/sound/soundPuk.mp3'
            break
        case '2':
            url = './assets/sound/soundLetsGo.mp3'
            break
        case '3':
            url = './assets/sound/soundKefteme.mp3'
            break
        default:
            url = './assets/sound/soundWin.mp3'
            break
    }
    audio.src = url
    audio.autoplay = true
}