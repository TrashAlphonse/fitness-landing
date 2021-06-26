const slides = [...document.querySelectorAll(".testimonials__content__slider__slide")];
const indicatorImgs = [...document.querySelectorAll(".testimonials__content__indicator__img")];

for (let i = 0; i < indicatorImgs.length; i++) {
    indicatorImgs[i].addEventListener("click", function() {

        indicatorImgs.forEach((indicatorImg) => indicatorImg.classList.remove("active"));
        this.classList.add("active");

        const id = this.dataset.id;
        slides.forEach((slide) => slide.classList.remove("active"));
        slides[id].classList.add("active");
    })
}