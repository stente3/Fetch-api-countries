import { mainContent } from "./fetch-API.js";

// Variables
let footer = document.querySelector(".footer");
let filter = document.querySelector(".filter-section");

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
// Exports
export { hideFilterSection, hideMainSection, rmMainSection, footer, hideArrow };
