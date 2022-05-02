// Imports 
import { mainContent } from "./fetch-API.js";

// Variables
let body = document.querySelector(".body");
let filterSection = document.querySelector(".filter-section");
let buttonMode = document.querySelectorAll(".dark-mode--change");

// Functions
function listener(){
        buttonMode.forEach(element =>{
        element.addEventListener("click", () =>{
            darkMode();
            // If "Container Details" exists, it toggles between dark mode and white mode
            if(body.lastElementChild.classList.contains("containerDetails")){
                body.lastElementChild.classList.toggle("containerDetails-dark");
            }
        })
    })
}

function darkMode(){
    filterSection.classList.toggle("filter-section--dark");
    body.classList.toggle("body-dark");
    mainContent.classList.toggle("main-dark");
    localMode();
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
            mainContent.classList.add("main-dark");
        }
}

// Exports 
export { listener, localDarkMode };
