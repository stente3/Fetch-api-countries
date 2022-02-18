fetch("https://restcountries.com/v2/all")
    .then(response => response.json())
    .then(data => createCard(data) )
// Variables
let mainCard = document.querySelector(".main");
let currentNumber = 20;

// Functions
function createCard(data){
    for(let i = 0; i < currentNumber; i++){
        let card = document.createElement("div");
        card.classList.add("card");
        mainCard.appendChild(card);
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
}
