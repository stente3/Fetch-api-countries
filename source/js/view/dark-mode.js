// Variables
let body = document.querySelector(".body");
let filterSection = document.querySelector(".filter-section");
let main = document.querySelector(".main");
let buttonMode = document.querySelectorAll(".dark-mode--change");
let darkModeImage = document.querySelector(".dark-mode__img");

// Functions
function listener(){
        buttonMode.forEach(element =>{
        element.addEventListener("click", (e) =>{
            darkMode();
        })
    })
}

function darkMode(){
    filterSection.classList.toggle("filter-section--dark");
    body.classList.toggle("body-dark");
    main.classList.toggle("main-dark");
    darkImage();
    localMode();
}

function darkImage(){
    if( !!body.classList.contains("body-dark") === true ){
        darkModeImage.src = "./public/assets/img/moon-dark-mode.svg";
    }
    else{
        darkModeImage.src = "./public/assets/img/moon-white-mode.svg";
    }
}

// LocalStorage Dark-Mode
function localMode(){
    if( !!body.classList.contains("body-dark") === true ){
        localStorage.setItem("mode", "dark");
    } else{
        localStorage.setItem("mode", "white");
    }
}
// Look at the localstorage and if it has mode "dark", it makes the page dark mode again
function localDarkMode(){
        if(localStorage.getItem("mode") === "dark"){
        filterSection.classList.add("filter-section--dark");
        body.classList.add("body-dark");
        main.classList.add("main-dark");
        darkImage();
    }
}

export { listener, localDarkMode };
