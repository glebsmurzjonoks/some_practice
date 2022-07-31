const arrowUp = document.querySelector('.up-button');
const arrowDown = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')
const countSlides = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0


sidebar.style.top = `-${(countSlides -1 ) * 100}vh`

arrowUp.addEventListener('click', () => {
    changeSlide('up')
})
arrowDown.addEventListener('click', () => {
    changeSlide('down')
})

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowDown') {
        changeSlide('down')
    } else if (event.key === 'ArrowUp'){
        changeSlide('up')
    }
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === countSlides)
        {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = countSlides -1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}