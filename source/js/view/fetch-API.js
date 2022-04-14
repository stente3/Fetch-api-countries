// Imports
import { showFooter, moreCountries } from "./more-countries.js";
import { search } from "./seacher.js";

// Variables
let mainContent = document.querySelector(".main");
let currentNumber = 20;
let loaderContainer;

// Functions
function fetchApi(){
    document.addEventListener("DOMContentLoaded", () =>{
        let url = "https://restcountries.com/v3.1/all";
        // Shows the loading logo
        startLoader();
        fetch(url)
            .then(response => response.json())
                .then(data => {
                    // Hides the loading logo
                    endLoader()
                    createCards(data, 0, currentNumber);
                    showFooter();
                    moreCountries(data);
                    search(data);
                })
    })
}

function createCards(data, firstN, lastN){
    for(let i = firstN; i < lastN; i++){
        let card = document.createElement("div");
        card.classList.add("card");
        mainContent.appendChild(card);
        card.innerHTML = ` 
        <div class="card-container__img" id="${data[i].cca3}">
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
        mainContent.children[i].addEventListener("click", () =>{
            console.log(mainContent.children[i].firstElementChild.id);
        })
    }
}

function startLoader(){
    loaderContainer = document.createElement("div");
    loaderContainer.classList.add("loader");
    mainContent.appendChild(loaderContainer);
}

function endLoader(){
    loaderContainer.remove("loader");
}

// Exports
export { mainContent, fetchApi, createCards, startLoader, endLoader };
