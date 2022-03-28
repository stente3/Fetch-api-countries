import { createCards } from "./fetch-API.js";

// Variables
let arrowDown = document.querySelector(".arrow-down");
let firstCountry = 20;
let lastCountry = 40;


// Funcions
function showFooter(){
    arrowDown.classList.remove("hide");
}

function moreCountries(data){
    arrowDown.addEventListener("click", () =>{
        if( lastCountry < data.length ){
            createCards(data, firstCountry, lastCountry);
            firstCountry += 20;
            lastCountry += 20;
        } else{
            let lessCountries = lastCountry - data.length;
            lastCountry -= lessCountries;
            createCards(data, firstCountry, lastCountry);
            arrowDown.classList.add("hide");
        }    
    })
}


export { showFooter, moreCountries };
