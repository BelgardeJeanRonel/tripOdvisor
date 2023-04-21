import { createElement, eventClickMode, eventClickThemeColor, plusSlides, showSlides, slideIndex } from "./functions.js";

const themeSwitch = document.querySelector("#theme-switch");
const body = document.querySelector("body");

eventClickMode(themeSwitch, body, "theme-dark");

const img = document.querySelector(".logo__image");

const logoImages = [
    "logo-theme-green.png",
    "logo-theme-red.png",
    "logo-theme-blue.png"
]


const themeGreen = document.querySelector("#theme-green");
eventClickThemeColor(themeGreen, body, "theme-green", "theme-red", "theme-blue", img, logoImages[0]);

const themeRed = document.querySelector("#theme-red");
eventClickThemeColor(themeRed, body, "theme-red", "theme-green", "theme-blue", img, logoImages[1]);

const themeBlue = document.querySelector("#theme-blue");
eventClickThemeColor(themeBlue, body, "theme-blue", "theme-green", "theme-red", img, logoImages[2]);



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


