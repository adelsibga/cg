const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
const cellDimensions = 50

const drawLetter = () => {
    const Letter = new Path2D()
    Letter.rect(2 * cellDimensions, cellDimensions, 2 * cellDimensions, cellDimensions)
    Letter.rect(cellDimensions, cellDimensions, cellDimensions, 5 * cellDimensions)
    Letter.rect(2 * cellDimensions, 5 * cellDimensions, 2 * cellDimensions, cellDimensions)
    ctx.fillStyle = '#93e69f'
    ctx.fill(Letter)
}

const drawSecondLetter = () => {
    ctx.beginPath()
    ctx.moveTo(8 * cellDimensions, cellDimensions)
    ctx.lineTo(7 * cellDimensions, cellDimensions)
    ctx.lineTo(5 * cellDimensions, 6 * cellDimensions)
    ctx.lineTo(6 * cellDimensions, 6 * cellDimensions)
    ctx.lineTo(7 * cellDimensions, 4 * cellDimensions)
    ctx.lineTo(8 * cellDimensions, 4 * cellDimensions)
    ctx.lineTo(9 * cellDimensions, 6 * cellDimensions)
    ctx.lineTo(10 * cellDimensions, 6 * cellDimensions)
    ctx.lineTo(8 * cellDimensions, cellDimensions)
    ctx.fillStyle = '#9b52b5'
    ctx.fill()

    ctx.beginPath()
    ctx.fillStyle = '#fff'
    ctx.lineTo(7.5 * cellDimensions, 2 * cellDimensions)
    ctx.lineTo(7 * cellDimensions, 3 * cellDimensions)
    ctx.lineTo(8 * cellDimensions, 3 * cellDimensions)
    ctx.lineTo(7.5 * cellDimensions, 2 * cellDimensions)
    ctx.fill()
}

const drawThirdLetter = () => {
    const Letter = new Path2D()
    Letter.rect(11 * cellDimensions, cellDimensions, cellDimensions, 5 * cellDimensions)

    ctx.beginPath()
    ctx.moveTo(12 * cellDimensions, 6 * cellDimensions)
    ctx.lineTo(15 * cellDimensions, 2 * cellDimensions)
    ctx.lineTo(15 * cellDimensions, cellDimensions)
    ctx.lineTo(12 * cellDimensions, 5 * cellDimensions)
    ctx.fillStyle = '#f5f'
    ctx.fill()

    Letter.rect(15 * cellDimensions, cellDimensions, cellDimensions, 5 * cellDimensions)

    ctx.fillStyle = '#f5f'
    ctx.fill(Letter)
}

drawLetter()
drawSecondLetter()
drawThirdLetter()