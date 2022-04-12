// Variables
let mainSection = document.querySelector(".main");
let footer = document.querySelector(".footer");
let filter = document.querySelector(".filter-section");


/* Hide arrow down */
function hideArrow(){
    if(!footer.classList.contains("hide")){
        footer.classList.add("hide");
    }
}
/* Hide mainSection */
function hideMainSection(){
    mainSection.classList.add("hide");
    footer.classList.add("hide");
}

/* Hide all since filter section */
function hideFilterSection(){
    filter.classList.add("hide");
    mainSection.classList.add("hide");
    footer.classList.add("hide");
}
/* Remove cards of main section and hide arrow down */
function rmMainSection(){
    while(mainSection.children.length > 0){
        let i = 0;
        mainSection.children[i].remove();
        i++;
    }
    hideArrow();
}
// Exports
export { hideFilterSection, hideMainSection, rmMainSection, footer, hideArrow };
