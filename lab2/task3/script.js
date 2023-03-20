const dragItems = document.querySelectorAll('.dragItem')
const dropZones = document.querySelectorAll('.dropZone')

let draggedItem = null
let droppedItem = null

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
    this.classList.remove('dragItem--active')
    draggedItem = null
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

function handleDrop(event) {
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

    const dropZoneGroup = event.target.getAttribute('data-zone')

    console.log(dropZoneGroup)
}