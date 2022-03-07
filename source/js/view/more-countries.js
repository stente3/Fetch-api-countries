// Variables
let footer = document.querySelector("footer");
let mainContent = document.querySelector("main");
let firstCountry = 20;
let lastCountry = 40;


// Funcions
function createFooter(){
    let arrow = document.createElement("i");
    arrow.classList.add("arrow-down");
    footer.appendChild(arrow);
}
function moreCountries(data){
    footer.addEventListener("click", () =>{
        for(let i = firstCountry; i < lastCountry; i++){
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
        firstCountry = firstCountry + 20;
        lastCountry = lastCountry + 20;
    })
}


// Exports
export{ createFooter, moreCountries};
