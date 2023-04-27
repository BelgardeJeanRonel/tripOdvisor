import { createElement, plusSlides, showSlides, slideIndex } from "./functions.js";
import { themeMode, themeColor } from "./theme.js";

// CHANGER DE THEME


document.addEventListener("DOMContentLoaded", themeMode.init);

document.addEventListener("DOMContentLoaded", themeColor.init);


// SLIDER

const sliderImages = [
    "canyon.jpg",
    "city.jpg",
    "nature.jpg",
    "ocean.jpg",
    "road.jpg",
    "ski.jpg"
]

const sliderSection = document.querySelector(".slider");

for (const image of sliderImages) {
    const img = createElement("img");
    img.src = "img/" + image;
    img.classList.add("slider__img");

    sliderSection.append(img);
    
}

showSlides(slideIndex);

const prev = document.querySelectorAll(".slider__btn")[0];
prev.addEventListener("click", function() {
    plusSlides(-1);
});

const next = document.querySelectorAll(".slider__btn")[1];
next.addEventListener("click", function() {
    plusSlides(1);
});


// NEWSLETTER

const openNewsLetter = document.querySelector(".menu__item:nth-of-type(2)");
const newsLetter = document.querySelector(".newsletter");
const closeNewsLetter = document.querySelector(".newsletter__close");
let indice = 0;

openNewsLetter.addEventListener("click", function(event) {
    event.preventDefault();
    newsLetter.classList.add("newsletter--on");
    indice ++;
})

closeNewsLetter.addEventListener("click", () => {
    newsLetter.classList.remove("newsletter--on");
    indice ++;

    formNewsLetter.reset();
    spanErrorEmail.style.display = "none";

})

window.addEventListener("scroll", function() {
    let scrl = this.scrollY;

    if (!indice) {
        if (scrl >= 300) {
            newsLetter.classList.add("newsletter--on");
        }else{
            newsLetter.classList.remove("newsletter--on");
        }
    }
})


// MESSAGES D'ERREURS

const forbiddenDomains = [
    '@yopmail.com',
    '@yopmail.fr',
    '@yopmail.net',
    '@cool.fr.nf',
    '@jetable.fr.nf',
    '@courriel.fr.nf',
    '@moncourrier.fr.nf',
    '@monemail.fr.nf',
    '@monmail.fr.nf',
    '@hide.biz.st',
    '@mymail.infos.st',
]

const formNewsLetter = document.forms[0];

const spanErrorEmail = createElement("span");
spanErrorEmail.textContent = "Email incorrect!";

spanErrorEmail.style.cssText = `color: red;
    display: none;
    margin-top: 10px;
    border: 1px solid gray;
    padding: .5em 2em;
    background: wheat;
    border-radius: 5px;
`;
formNewsLetter.append(spanErrorEmail);

const input = document.querySelector(".newsletter__field");

formNewsLetter.addEventListener("submit", event => {

    for (const email of forbiddenDomains) {
        if (input.value.endsWith(email)){
            event.preventDefault();
            spanErrorEmail.style.display = "inline-block";
        }else{
            spanErrorEmail.style.display = "none";
        }
    }
})

input.addEventListener("focus", () => {
    spanErrorEmail.style.display = "none";
})


// FAVORIS


const spanErrorFavori = createElement("span");
spanErrorFavori.textContent = "Vous devez être connecté pour gérer vos favoris";

spanErrorFavori.style.cssText = `color: red;
    display: none;
`;

const articles = document.querySelectorAll(".card");
articles.forEach(article => {
    const spanErrorFavori = createElement("span");
    spanErrorFavori.textContent = "Vous devez être connecté pour gérer vos favoris";

    spanErrorFavori.style.cssText = `color: red;
        display: none;
    `;

    article.prepend(spanErrorFavori);
})



const favoris = document.querySelectorAll(".btn.btn__like");

favoris.forEach(favori => {
    favori.addEventListener("click", () => {
        favori.parentElement.parentElement.querySelector("span").style.display = "block";

        setTimeout(function(){
            favori.parentElement.parentElement.querySelector("span").style.display = "none";
        }, 3000)
        
    })
})


// COMMENTAIRES

const inputsCheck = document.querySelectorAll(".filters input");
const comments = document.querySelectorAll(".review");

inputsCheck.forEach(inputCheck => {
    inputCheck.addEventListener("change", function() {

        if (inputCheck.checked){
            comments.forEach(comment => {
                if (inputCheck.value === comment.dataset.rating){
                    comment.style.display = "block";
                }
            })
        }else{
            comments.forEach(comment => {
                if (inputCheck.value === comment.dataset.rating){
                    comment.style.display = "none";
                }
            })
        }
    })
})




