// Imports
import { mainContent, countriesLength } from "./fetch-API.js";
import { defaultOption } from "./filter-section.js";
import { nSearch } from "./seacher.js";

// Variables
let footer = document.querySelector(".footer");
let filter = document.querySelector(".filter-section");
let loaderContainer;

/* Hide arrow down */
function hideArrow(){
    if(!footer.classList.contains("hide")){
        footer.classList.add("hide");
    }
}

/* Hide mainContent */
function hideMainSection(){
    mainContent.classList.add("hide");
    footer.classList.add("hide");
}

/* Hide all since filter section */
function hideFilterSection(){
    filter.classList.add("hide");
    mainContent.classList.add("hide");
    footer.classList.add("hide");
}

/* Remove cards of main section and hide arrow down */
function rmMainSection(){
    while(mainContent.children.length > 0){
        let i = 0;
        mainContent.children[i].remove();
        i++;
    }
    hideArrow();
}

/* To clean the Searcher */
function clearSearcher(){
    nSearch.value = "";
}

/* To show footer */
function showFooter(){
    footer.classList.remove("hide");
}

/* To show main, filter and footer section */
function showMainContent(){
    filter.classList.remove("hide");
    mainContent.classList.remove("hide");
    if(mainContent.children.length != countriesLength && nSearch.id == 0){
        footer.classList.remove("hide");
        if(defaultOption.textContent != "Filter by Region"){
            footer.classList.add("hide");
        }
    } 
}

// Loaders 
function startLoader(){
    loaderContainer = document.createElement("div");
    loaderContainer.classList.add("loader");
    mainContent.appendChild(loaderContainer);
}

function endLoader(){
    loaderContainer.remove("loader");
}

/* To come back to main menu */
function comeBackButton(){
    let backButton = document.querySelector(".backButton");
    let containerDetails = document.querySelector(".containerDetails");
    backButton.addEventListener("click", () =>{
        containerDetails.remove();
        showMainContent();
    })
}

function dots(number){
    number = number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    return number;
}
// Exports
export { hideFilterSection, hideMainSection, rmMainSection, footer, hideArrow, startLoader, endLoader, clearSearcher, showFooter, comeBackButton, dots };
