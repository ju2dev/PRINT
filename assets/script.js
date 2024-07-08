const slides = [
    {
        "image": "./assets/images/slideshow/slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "./assets/images/slideshow/slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "./assets/images/slideshow/slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "./assets/images/slideshow/slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

let dots = document.querySelector('#banner .dots');
const img = document.querySelector('#banner .banner-img');
let p = document.querySelector('#banner p');
const arrowRight = document.querySelector('#banner .arrow_right'); // Flèche de droite pour changer de slide
const arrowLeft = document.querySelector('#banner .arrow_left'); // Flèche de gauche pour changer de slide

let currentSlide = 0; // Variable pour suivre l'index de la slide actuelle

function addDot() {
    for (let i = 0; i < slides.length; i++) {
        let dot = document.createElement('div'); 
        dot.className = 'dot';
        dots.appendChild(dot);
    }
}

function slideUpData(currentIndex) {
    img.setAttribute("src", slides[currentIndex].image);
    p.innerHTML = slides[currentIndex].tagLine;
}

function updateDots(currentIndex) {
    let dot = document.querySelectorAll("#banner .dot");
    for (let i = 0; i < slides.length; i++) {
        if (i === currentIndex) {
            dot[i].classList.add('dot_selected');
        } else {
            dot[i].classList.remove('dot_selected');
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    addDot();
    slideUpData(currentSlide);
    updateDots(currentSlide);
});

// Écouteurs d'événements pour les flèches de navigation
arrowRight.addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % slides.length;
    slideUpData(currentSlide);
    updateDots(currentSlide);
});

arrowLeft.addEventListener('click', function() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slideUpData(currentSlide);
    updateDots(currentSlide);
});

