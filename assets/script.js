// Attend que le DOM soit entièrement chargé avant d'exécuter le script
document.addEventListener("DOMContentLoaded", function() {
    // Utiliser un tableau d'objets pour stocker les informations des slides
    const slidesData = [
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

    let currentSlide = 0; // Variable pour suivre l'index de la slide actuelle
    const slidesContainer = document.querySelector('#banner .slides'); // Conteneur des slides
    const dotsContainer = document.querySelector('#banner .dots'); // Conteneur des points de navigation
    const arrowRight = document.querySelector('#banner .arrow_right'); // Flèche de droite pour changer de slide
    const arrowLeft = document.querySelector('#banner .arrow_left'); // Flèche de gauche pour changer de slide

    // Vide le conteneur des dots avant de les créer
    dotsContainer.innerHTML = '';

    // Crée les slides dynamiquement
    slidesData.forEach((slide, index) => {
    const slideElement = document.createElement('div'); // Création d'un élément de slide
    slideElement.classList.add('slide'); // Ajout de la classe 'slide'

    // Masque toutes les slides sauf la première
    if (index !== 0) slideElement.style.display = 'none';

    // Crée une balise <img> pour l'image de la slide
    const img = document.createElement('img');
    img.classList.add('banner-img'); // Ajout de la classe 'banner-img'
    img.src = slide.image; // Chemin de l'image
    img.alt = `Slide ${index + 1}`; // Texte alternatif de l'image

    // Crée une balise <p> pour le texte de la slide (avec HTML potentiel)
    const p = document.createElement('p');
    p.innerHTML = slide.tagLine; // Contenu HTML du texte de la slide

    // Ajoute l'image et le texte à l'élément de slide
    slideElement.appendChild(img);
    slideElement.appendChild(p);

    // Ajoute l'élément de slide au conteneur des slides
    slidesContainer.appendChild(slideElement);

    // Crée un dot (point de navigation) correspondant à chaque slide
    const dot = document.createElement('div');
    dot.classList.add('dot'); // Ajout de la classe 'dot'

    // Sélectionne le dot correspondant à la première slide
    if (index === 0) dot.classList.add('dot_selected');

    // Ajoute le dot au conteneur des dots
    dotsContainer.appendChild(dot);

    // Ajoute un événement de clic au dot pour naviguer vers la slide correspondante
    dot.addEventListener('click', function() {
         updateSlides(index);
    });
 });

    // Logue le nombre de dots créés pour vérification
    console.log(`Number of dots created: ${dotsContainer.childElementCount}`);

    const slides = document.querySelectorAll('#banner .slide'); // Sélectionne toutes les slides
    const dots = document.querySelectorAll('#banner .dot'); // Sélectionne tous les dots
    const totalSlides = 4; // Nombre total de slides (constante)

    // Fonction pour mettre à jour les slides affichées
    function updateSlides(index) {
         // Cache toutes les slides
        slides.forEach(slide => slide.style.display = 'none');
 
        // Désélectionne tous les dots
        dots.forEach(dot => dot.classList.remove('dot_selected'));
 
        // Affiche la slide correspondante et sélectionne le dot correspondant
        if (slides[index]) {
        slides[index].style.display = 'block';
        dots[index].classList.add('dot_selected');
        }
        currentSlide = index; // Met à jour l'index de la slide actuelle
    }

    // Initialisation : affiche la première slide au chargement
    updateSlides(currentSlide);

    //événements pour les flèches de navigation
    arrowRight.addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlides(currentSlide);
 });
 
    arrowLeft.addEventListener('click', function() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlides(currentSlide);
 });
});