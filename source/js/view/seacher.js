// Imports
import { rmMainSection } from "./remove-elements.js";
import { createCards } from "./fetch-API.js";

// Variables
export let nSearch = 0;
let filter = document.querySelector(".filter-section__searcher");
let mainContent = document.querySelector(".main");
let footer = document.querySelector(".footer");

function search(data){
    filter.addEventListener("input", (e) =>{
        nSearch += 1;
        if(e.target.value == " " || e.target.value.length == 0){
            rmMainSection();
            createCards(data, 0, 20);
            footer.classList.remove("hide");
        } else{
            rmMainSection();
            for(let i=0; i < data.length; i++){
                // Make in capitalize the first letter of the paragraph 
                let palabra = e.target.value[0].toUpperCase() + e.target.value.slice(1);
                if(data[i].name.common.includes(palabra)){
                    createCard(data, i);
                } 
            }  
        }
    })
}

function createCard(data, i){
    let card = document.createElement("div");
    card.classList.add("card");
    mainContent.appendChild(card);
    card.innerHTML = `         
    <div class="card-container__img">
            <img src="${data[i].flags.png}" class="card__image"></img>
        </div>
        <div class="information">
            <h3 class="information__heading"> ${data[i].name.common} 
            </h3>
            <p class="information__paragraph">
                <span>Population: </span> ${data[i].population}
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
export { search, createCard };
