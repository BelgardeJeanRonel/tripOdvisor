import { getItemInLocalStorage, isActive, moveToLocalStorage } from "./functions.js";

export const themeMode = {
    themeSwitch : document.querySelector("#theme-switch"),
    body : document.querySelector("body"),
    classTheme : "theme-dark",

    init : function() {
        themeMode.addEvents(themeMode.themeSwitch, themeMode.body, themeMode.classTheme);

        themeMode.loadDarkModeInStorage();
    },

    addEvents : function(themeName, body, classTheme) {
        themeName.addEventListener("click", function (){
            body.classList.toggle(classTheme);
            themeMode.saveDarkModeInStorage();
        })
    },

    saveDarkModeInStorage : function() {

        const isDarkMode = isActive(themeMode.body, "theme-dark");

        moveToLocalStorage("darkMode", isDarkMode)
    },

    loadDarkModeInStorage : function() {
        const isDarkMode = getItemInLocalStorage("darkMode");

        if (isDarkMode) {
            document.body.classList.add("theme-dark");
        }

    }
}



export const themeColor = {
    themeGreen : document.querySelector("#theme-green"),
    themeRed : document.querySelector("#theme-red"),
    themeBlue : document.querySelector("#theme-blue"),
    classGreen : "theme-green",
    classRed : "theme-red",
    classBlue : "theme-blue",
    img : document.querySelector(".logo__image"),
    logoImages : [
        "logo-theme-green.png",
        "logo-theme-red.png",
        "logo-theme-blue.png"
    ],

    init : function() {
        themeColor.eventClickThemeColor(themeColor.themeGreen, themeMode.body, themeColor.classGreen, themeColor.classRed, themeColor.classBlue, themeColor.img, themeColor.logoImages[0], "colorGreen", "colorRed", "colorBlue");

        themeColor.eventClickThemeColor(themeColor.themeRed, themeMode.body, themeColor.classRed, themeColor.classGreen, themeColor.classBlue, themeColor.img, themeColor.logoImages[1], "colorRed", "colorGreen", "colorBlue");

        themeColor.eventClickThemeColor(themeColor.themeBlue, themeMode.body, themeColor.classBlue, themeColor.classRed, themeColor.classGreen, themeColor.img, themeColor.logoImages[2], "colorBlue", "colorGreen", "colorRed");

        themeColor.loadDarkModeInStorage();
    },

    eventClickThemeColor : function(themeName, body, classThemePrimary, classthemeSecondary1, classthemeSecondary2, img, source, keyColorPrimary, keyColorSec1, keyColorSec2) {
        themeName.addEventListener("click", function(){
            body.classList.add(classThemePrimary);
            body.classList.remove(classthemeSecondary1);
            body.classList.remove(classthemeSecondary2);
    
            img.src = "img/" + source;

            themeColor.saveDarkModeInStorage(body, classThemePrimary, classthemeSecondary1, classthemeSecondary2, keyColorPrimary, keyColorSec1, keyColorSec2);
        })
    },

    saveDarkModeInStorage : function(body, classThemePrimary, classthemeSecondary1, classthemeSecondary2, keyColorPrimary, keyColorSec1, keyColorSec2) {
        const isThemePrimary = isActive(body, classThemePrimary);
        moveToLocalStorage(keyColorPrimary, isThemePrimary);

        const isThemeSecondary1 = isActive(body, classthemeSecondary1);
        moveToLocalStorage(keyColorSec1, isThemeSecondary1);

        const isThemeSecondary2 = isActive(body, classthemeSecondary2);
        moveToLocalStorage(keyColorSec2, isThemeSecondary2);
        
    },

    loadDarkModeInStorage : function() {

        const isThemeRed = getItemInLocalStorage("colorRed");
        if (isThemeRed) {
            document.body.classList.add("theme-red");
            themeColor.img.src = "img/" + themeColor.logoImages[1];
        }

        const isThemeGreen = getItemInLocalStorage("colorGreen");
        if (isThemeGreen) {
            document.body.classList.add("theme-green");
            themeColor.img.src = "img/" + themeColor.logoImages[0];
        }

        const isThemeBlue = getItemInLocalStorage("colorBlue");
        if (isThemeBlue) {
            document.body.classList.add("theme-blue");
            themeColor.img.src = "img/" + themeColor.logoImages[2];
        }

    }
}