const letters = document.querySelectorAll('svg')

const ANIMATION_NAME = 'animateLetter'
const ANIMATION_DURATION = 1
const ANIMATION_PROPS = 'cubic-bezier(0.215, 0.61, 0.355, 1) alternate infinite'
const TIME_OUT = 300

function animation() {
    let letterIndex = 0

    const interval = setInterval(() => {
        if (letterIndex === letters.length - 1) {
            clearInterval(interval)
        }

        letters[letterIndex++].style.animation = `${ANIMATION_NAME} ${ANIMATION_DURATION}s ${ANIMATION_PROPS}`
    }, TIME_OUT)
}

animation()