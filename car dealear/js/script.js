/*==== navbar toggle ===*/
let navBar = document.querySelector('.navLink');
let menuBar = document.querySelector('#menuBtn');

menuBar.onclick = () => {
 navBar.classList.toggle('active');
}

/*----scroll section and sticky navbar---*/

window.onscroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrolly > 100);
}

/*=== swiper js ===*/

var swiper = new Swiper(".myHome", {
    spaceBetween: 30,
    centeredSlides: true,  
    loop: true,
    autoplay: {
          delay: 3500,
          disableOnInteraction: false,
    },
pagination: {
    el: ".swiper-pagination",    
    clickable: true,    
    },
navigation: {    
    nextEl: ".swiper-button-next",    
    prevEl: ".swiper-button-prev",   
    },
});

/* ---counter section start--- */
let valueDisplay = document.querySelectorAll('.num');
let interval = 1000;

valueDisplay.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-value"));

    let duration = Math.floor(interval/endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});

