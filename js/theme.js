
export const themeMode = {
    themeSwitch : document.querySelector("#theme-switch"),
    body : document.querySelector("body"),
    classTheme : "theme-dark",

    init : function() {
        themeMode.addEvents(themeMode.themeSwitch, themeMode.body, themeMode.classTheme);
    },

    addEvents : function(themeName, body, classTheme) {
        themeName.addEventListener("click", function (){
            body.classList.toggle(classTheme);
        })
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
        themeColor.eventClickThemeColor(themeColor.themeGreen, themeMode.body, themeColor.classGreen, themeColor.classRed, themeColor.classBlue, themeColor.img, themeColor.logoImages[0]);

        themeColor.eventClickThemeColor(themeColor.themeRed, themeMode.body, themeColor.classRed, themeColor.classGreen, themeColor.classBlue, themeColor.img, themeColor.logoImages[1]);

        themeColor.eventClickThemeColor(themeColor.themeBlue, themeMode.body, themeColor.classBlue, themeColor.classRed, themeColor.classGreen, themeColor.img, themeColor.logoImages[2]);
    },

    eventClickThemeColor : function(themeName, body, classThemePrimary, classthemeSecondary1, classthemeSecondary2, img, source) {
        themeName.addEventListener("click", function(){
            body.classList.add(classThemePrimary);
            body.classList.remove(classthemeSecondary1);
            body.classList.remove(classthemeSecondary2);
    
            img.src = "img/" + source;
        })
    }
}