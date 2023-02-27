const letters = document.querySelectorAll('svg')

const ANIMATION_NAME = 'animateLetter'
const ANIMATION_TIME_IN_SEC = 3
const ANIMATION_TYPE = 'infinite'

function animation() {
    let letterIndex = 0

    const interval = setInterval(() => {
        if (letterIndex === letters.length - 1) {
            clearInterval(interval)
        }
        letters[letterIndex++].style.animation = `${ANIMATION_NAME} ${ANIMATION_TIME_IN_SEC}s ${ANIMATION_TYPE}`
    }, 300)
}

animation()