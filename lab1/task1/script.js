const letters = document.querySelectorAll('svg')

const ANIMATION_NAME = 'animateLetter'
const ANIMATION_TIME_IN_SEC = 1
const ANIMATION_PROPS = 'cubic-bezier(0.215, 0.61, 0.355, 1) alternate infinite'

function animation() {
    let letterIndex = 0

    const interval = setInterval(() => {
        if (letterIndex === letters.length - 1) {
            clearInterval(interval)
        }
        
        letters[letterIndex++].style.animation = `${ANIMATION_NAME} ${ANIMATION_TIME_IN_SEC}s ${ANIMATION_PROPS}`
    }, 300)
}

animation()