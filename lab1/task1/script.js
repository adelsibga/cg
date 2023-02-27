const letters = document.querySelectorAll('svg')

const ANIMATION_NAME = 'animateLetter'
const ANIMATION_TIME_IN_SEC = 3
const ANIMATION_PROP = 'infinite'

function animation() {
    let letterIndex = 0

    const interval = setInterval(() => {
        if (letterIndex === letters.length - 1) {
            clearInterval(interval)
        }
        
        letters[letterIndex++].style.animation = `${ANIMATION_NAME} ${ANIMATION_TIME_IN_SEC}s ${ANIMATION_PROP}`
    }, 300)
}

animation()