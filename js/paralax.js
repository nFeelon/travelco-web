const BACKGROUND_IMAGE_CHANGE_INTERVAL = 15*1000;

const header = document.getElementById("header");
const header_text = document.getElementById("header-text");

const backgrounds = [
    'images/paralax/Tokyo.png',
    'images/paralax/Minsk.png',
    'images/paralax/Paris.png'
];
const backgrounds_text = [
    'Токио, Япония',
    'Минск, Беларусь',
    'Париж, Франция'
];


let currentImage = 0;

//Смена фона на странице
(function changeBgImg(){ 
    header.style.backgroundImage = `url(${backgrounds[currentImage]})`;
    header_text.textContent = backgrounds_text[currentImage];
    currentImage = (currentImage + 1) % backgrounds.length;
    setTimeout(changeBgImg, BACKGROUND_IMAGE_CHANGE_INTERVAL);
})();

// Предварительная загрузка нужных картинок
document.addEventListener("DOMContentLoaded", () => {
    const images = new Array();
    function preloadImages(...images) {
        images.forEach((image, i) => {
            image = new Image();
            image.src = preloadImages.arguments[i];
        });
    };
    preloadImages("images/paralax/Minsk.png", "images/paralax/Tokyo.png", "images/paralax/Paris.png");
});