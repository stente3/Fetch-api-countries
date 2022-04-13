import { hideArrow, footer } from "./remove-elements.js";
import { createCards } from "./fetch-API.js";
import { nSearch } from "./seacher.js";

// Variables
let arrowDown = document.querySelector(".arrow-down");
let firstCountry = 20;
let lastCountry = 40;

// Funcions
function showFooter(){
    footer.classList.remove("hide");
}
// Shows 20 new countries on the screen
function moreCountries(data){
    arrowDown.addEventListener("click", () =>{
        if( lastCountry < data.length ){
            //if the user uses the searcher, the firstCountry and lastCountry return to their default options
            if (nSearch > 0){
                firstCountry = 20;
                lastCountry = 40;
            }
            createCards(data, firstCountry, lastCountry);
            firstCountry += 20;
            lastCountry += 20;
        } else {
            let lessCountries = lastCountry - data.length;
            lastCountry -= lessCountries;
            createCards(data, firstCountry, lastCountry);
            hideArrow();
        }
    })
}

export { showFooter, moreCountries, arrowDown };
