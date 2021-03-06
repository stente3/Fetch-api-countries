// Imports
import { rmMainSection, clearSearcher, dots } from "./utilities.js";
import { createCards, mainContent } from "./fetch-API.js";
import { showFooter } from "./more-countries.js";
import { fetchApiregions, defaultOption } from "./filter-section.js";
import { detailsCountry } from "./details.js";

// Variables
let nSearch = document.querySelector(".filter-section__searcher");
let filter = document.querySelector(".filter-section__searcher");

function search(data){
    filter.addEventListener("input", (e) =>{
        nSearch.id ++;
        rmMainSection();
        if(e.target.value == " " || e.target.value.length == 0){
            if(defaultOption.textContent == "Filter by Region" || defaultOption.textContent == "All"){
                createCards(data, 0, 20);
                showFooter();
            } else{
                fetchApiregions(defaultOption.textContent.toLowerCase().trim())
            }
        } else{
            for(let i=0; i < data.length; i++){
                // Make in capitalize the first letter of the paragraph 
                let palabra = e.target.value[0].toUpperCase() + e.target.value.slice(1);
                if(data[i].name.common.includes(palabra)){
                    // If one or more countries coincide with the search carried out, the card of each matching country is created
                    createCard(data, i);
                } 
            }  
            detailsCountry(0, mainContent.children.length);
        }
    })
}

function createCard(data, i){
    let card = document.createElement("div");
    card.classList.add("card");
    mainContent.appendChild(card);
    card.innerHTML = `         
    <div class="card-container__img" id="${data[i].cca3}">
            <img src="${data[i].flags.svg}" class="card__image"></img>
        </div>
        <div class="information">
            <h3 class="information__heading"> ${data[i].name.common} 
            </h3>
            <p class="information__paragraph">
                <span>Population: </span> ${dots(data[i].population)}
            </p>
            <p class="information__paragraph">
                <span>Region: </span> ${data[i].region}
            </p>
            <p class="information__paragraph">
                <span>Capital: </span>${data[i].capital}
            </p>
    </div>
            `;
}


// Exports
export { search, createCard, nSearch, clearSearcher };
