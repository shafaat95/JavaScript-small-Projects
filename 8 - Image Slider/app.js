const slides = document.querySelectorAll(".slide");
var counter = 0;
const maxSlides = slides.length - 1;

slides.forEach(
        (slide,index) => {
            slide.style.left = `${index * 100}%`;
        }
)
const goNext = () => {
    if(counter < maxSlides){
        counter++;
        slideImage();
    }
}
const goPrev = () => {
    if(counter > 0){
        counter--;
        slideImage();
    }
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        }
    )
}