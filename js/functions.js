

export function createElement (tagName) {
    const element = document.createElement(tagName);

    return element;
}

export let slideIndex = 1;

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
