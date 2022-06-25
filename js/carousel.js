const CarouselJS = {
    carousel: document.querySelector("#carousel-initial"),
    carouselItem: document.querySelectorAll(".carousel-item"),
    btnPrev: document.querySelector("#btnPrevious"),
    btnNext: document.querySelector("#btnNext"),
    fillInCarousel: (dataCarousel) => {
        if (dataCarousel != null && dataCarousel != undefined) {

        }
    },
    moveNextTheImage: () => {
        let carouselImageFirst = document.querySelectorAll(".carousel-item")[0];
        CarouselJS.carousel.style.marginLeft = "-200%";
        CarouselJS.carousel.style.transition = "all 0.5s";
        setTimeout(() => {
            CarouselJS.carousel.style.transition = "none";
            CarouselJS.carousel.insertAdjacentElement('beforeend', carouselImageFirst);
            CarouselJS.carousel.style.marginLeft = "-100%";
        }, 500);
    },
    movePrevTheImage: () => {
        let carouselItem = document.querySelectorAll(".carousel-item");
        let carouselImageLast = carouselItem[carouselItem.length - 1];
        CarouselJS.carousel.style.marginLeft = "0";
        CarouselJS.carousel.style.transition = "all 0.5s";
        setTimeout(() => {
            CarouselJS.carousel.style.transition = "none";
            CarouselJS.carousel.insertAdjacentElement('afterbegin', carouselImageLast);
            CarouselJS.carousel.style.marginLeft = "-100%";
        }, 500);
    }

};
addEventListener('DOMContentLoaded', (e) => {
    CarouselJS.carousel.insertAdjacentElement('afterbegin', CarouselJS.carouselItem[CarouselJS.carouselItem.length - 1]);
    CarouselJS.btnNext.addEventListener('click', CarouselJS.moveNextTheImage);
    CarouselJS.btnPrev.addEventListener('click', CarouselJS.movePrevTheImage);
    setInterval(() => {
        CarouselJS.moveNextTheImage();
    }, 5000);
    e.preventDefault();
});



// window.onload = () => {
//     alert("asdasd2")
// }