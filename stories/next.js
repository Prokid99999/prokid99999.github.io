function start(content=[]) {

    const slides = content
    document.getElementById('story').innerHTML = slides[0]

    let index = 0

    const showSlide = n => {
        document.getElementById('story').innerHTML = slides[n]
    }
    showSlide(index)

    document.getElementById('next').addEventListener('click', () => {
        index = (index + 1) % slides.length
        window.scrollTo(0,0)
        showSlide(index)
    })

    document.getElementById('prev').addEventListener('click', () => {
        index = (index +  slides.length - 1) % slides.length
        window.scrollTo(0,0)
        showSlide(index)
    })

    document.getElementById('next1').addEventListener('click', () => {
        index = (index + 1) % slides.length
        window.scrollTo(0,0)
        showSlide(index)
    })

    document.getElementById('prev1').addEventListener('click', () => {
        index = (index +  slides.length - 1) % slides.length
        window.scrollTo(0,0)
        showSlide(index)
    })
}