const slides = document.querySelectorAll('.slide')

slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        clearActiveSlides()
        slide.classList.add('active')
    })
})

// for (const slide of slides) {
//     })

const clearActiveSlides = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}