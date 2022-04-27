// Imports
import { rmMainSection } from "./utilities.js";
import { search, clearSearcher } from "./seacher.js";
import { fetchApi, createCards, startLoader, endLoader } from "./fetch-API.js";

// Variables
let filter = document.querySelector(".filter__container");
let defaultOption = document.querySelector(".filter__default-option .option p");
let optionsContainer = document.querySelectorAll(".select_ul .option");
let currentRegion;

// Function
function optionsFunctionality(){
    filter.addEventListener("click", ()=> {
        filter.classList.toggle("active");
    });
    optionsContainer.forEach(element =>{
        element.addEventListener("click", (element) =>{
            if(element.target.textContent.trim() != defaultOption.textContent){
                if(element.target.textContent.trim() != "All"){
                    currentRegion = element.target.textContent.toLowerCase().trim();
                    fetchApiregions(currentRegion)
                } else {
                    fetchApi();
                }
            }
            defaultOption.textContent = element.target.textContent.trim();
            clearSearcher();
        })
    })
}

// Shows all the countries of the chosen region
function fetchApiregions(region){
    let url = `https://restcountries.com/v3.1/region/${region}`;
    // Shows the loading logo        
    rmMainSection();
    startLoader();
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Hides the loading logo
            endLoader()
            rmMainSection();
            createCards(data, 0, data.length);
            search(data);
        })
}


// Exports
export { optionsFunctionality, defaultOption, fetchApiregions };
