
// navbar js started 

// Slider js started
let slider = document.querySelectorAll(".slider-image");
let sliderNo = 0;
function slideshower() {
    slider[sliderNo].classList.remove('active');
    if (sliderNo < slider.length - 1) {
        sliderNo++;
    } else {
        sliderNo = 0;
    }

    slider[sliderNo].classList.add('active')
};

setInterval(() => {
    slideshower()
}, 4000);
// slider js ended

// cart js started
cart = document.querySelector('.cart-pannel');
let cartOpener = document.getElementById('cart-opener');
cartOpener.addEventListener('click', () => {
    cart.classList.add('show-pannel')
});
let cartCloser = document.getElementById('close-pannel');
cartCloser.addEventListener('click', () => {
    cart.classList.remove('show-pannel')
});
// cart js ended

//  our collection Slider Started

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let cardSlide = document.querySelector(".cards");
let movingspace = cardSlide.clientWidth;
next.addEventListener('click', () => {
    cardSlide.scrollBy({ left: movingspace, top: 0, behavior: "smooth" });

})
prev.addEventListener('click', () => {
    cardSlide.scrollBy({ left: -movingspace, top: 0, behavior: "smooth" })
})
//  our collection slider ended


