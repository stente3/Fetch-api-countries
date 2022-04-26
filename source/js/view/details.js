// Imports
import { hideFilterSection } from "./remove-elements.js";
//import { startLoader, endLoader } from "./fetch-API.js";

// Variables
let mainContent = document.querySelector(".main").children;
let body = document.querySelector("body");
let loaderContainer;

function detailsCountry(firstN, lastN){
    for(let i = firstN; i < lastN; i++){
        mainContent[i].addEventListener("click", () =>{
            hideFilterSection();
            fetchByCcn3(mainContent[i].firstElementChild.id);
        })
    }
}

function fetchByCcn3(ccn3){
    let url = `https://restcountries.com/v3.1/alpha/${ccn3}`
    // Start Loader
    loaderContainer = document.createElement("div");
    loaderContainer.classList.add("loader");
    body.appendChild(loaderContainer);
    // Fetch API
    fetch(url)
        .then(response => response.json())
        .then(data =>{
            createCardByCcn3(data)
            //End Loader
            loaderContainer.remove("loader");
        }) 
}

function createCardByCcn3(data){
    let containerDetails = document.createElement("section");
    containerDetails.classList.add("containerDetails");
    data = data[0];
    containerDetails.innerHTML = `
         <!-- Button for come back -->
            <div class="backButton button"> 
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z" fill="currentColor" /></svg>
                Back  
            </div>
            <!-- Country details -->
            <article class="countryDetails">
                <img src="${data.flags.svg}" class="countryDetails__flag">
                <div class="countryDetails__container">
                    <!-- Information container -->
                    <div class="container__information">
                        <h2 class="information__heading">${data.name.common}</h2>
                        <div class="information__main">
                            <p class="main__detail detail">
                                <span>Native Name:</span> ${data.name.official}
                            </p>
                            <p class="main__detail detail">
                                <span>Population:</span> ${data.population}
                            </p>
                            <p class="main__detail detail">
                                <span>Region:</span> ${data.region}
                            </p>
                            <p class="main__detail detail">
                                <span>Sub Region:</span> ${data.subregion}
                            </p>
                            <p class="main__detail detail">
                                <span>Capital:</span> ${data.capital}
                            </p>
                        </div>
                        <div class="information__other">
                            <p class="other__detail detail">
                                <span>Top Level Domain:</span> ${data.tld[0]}
                            </p>
                            <p class="other__detail detail">
                                <span>Currencies:</span> ${Object.keys(data.currencies)[0]}
                            </p>
                            <p class="other__detail detail">
                                <span>Languages:</span> ${Object.keys(data.languages)}
                            </p>
                        </div>
                    </div>
                    <!-- Border details -->
                    <div class="container__borders">
                        <h3 class="borders__heading">Border Countries:</h3>
                        <div class="borders__container">

                        </div>
                    </div>
                </div>
            </article>
    `
    body.appendChild(containerDetails)
    borders(data.borders)
}

// To create every border the country has
function borders(countries){
    let container = document.querySelector(".borders__container");
    countries.forEach(element =>{
        let country = document.createElement("div");
        country.classList.add("borders__country", "button");
        country.textContent = element;
        container.appendChild(country);
    })
}

// Exports
export { detailsCountry }
