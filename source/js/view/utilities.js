// Imports
import { mainContent } from "./fetch-API.js";
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
/* Loaders */
function startLoader(){
    loaderContainer = document.createElement("div");
    loaderContainer.classList.add("loader");
    mainContent.appendChild(loaderContainer);
}

function endLoader(){
    loaderContainer.remove("loader");
}

/* To clean the Searcher */
function clearSearcher(){
    nSearch.value = "";
}
/* To show footer */
function showFooter(){
    footer.classList.remove("hide");
}

// Exports
export { hideFilterSection, hideMainSection, rmMainSection, footer, hideArrow, startLoader, endLoader, clearSearcher, showFooter };
