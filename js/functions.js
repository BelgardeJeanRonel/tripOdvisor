export function eventClickMode (themeName, body, classe) {
    themeName.addEventListener("click", function (){
        body.classList.toggle(classe);
    })
}

export function eventClickThemeColor (themeName, body, classThemePrimary, classthemeSecondary1, classthemeSecondary2, img, source) {
    themeName.addEventListener("click", function(){
        body.classList.add(classThemePrimary);
        body.classList.remove(classthemeSecondary1);
        body.classList.remove(classthemeSecondary2);

        img.src = "img/" + source;
    })
}

export function createElement (tagName) {
    const element = document.createElement(tagName);

    return element;
}

let slideIndex = 1;

export function showSlides (index) {
    let slideImages = document.querySelectorAll(".slider__img");

    if (index > slideImages.length) {
        slideIndex = 1;
    }
    if (index < 1) {
        slideIndex = slideImages.length;
    }
    

    for (const image of slideImages) {
        image.classList.remove("slider__img--current");
    }

    slideImages[slideIndex - 1].classList.add("slider__img--current");

}

export function plusSlides(index) {
    showSlides(slideIndex += index);
}