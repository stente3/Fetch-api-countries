// Imports
import { rmMainSection } from "./remove-elements.js";
import { createCards } from "./fetch-API.js";

// Variables
let filter = document.querySelector(".filter-section__searcher");
let mainContent = document.querySelector(".main");
let footer = document.querySelector(".footer");

function search(data){
    filter.addEventListener("input", (e) =>{
        if(e.target.value == " " || e.target.value.length == 0){
            if(mainContent.children.length < 19){
                rmMainSection();
                createCards(data, 0, 20);
                footer.classList.remove("hide");
            }
        } else{
            rmMainSection();
            for(let i=0; i < data.length; i++){
                if(data[i].name.includes(e.target.value)){
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
            <img src="${data[i].flag}" class="card__image"></img>
        </div>
        <div class="information">
            <h3 class="information__heading"> ${data[i].name} 
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
export { search };
