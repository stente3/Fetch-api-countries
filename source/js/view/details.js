// Imports
import { comeBackButton, hideFilterSection, dots } from "./utilities.js";
import { travelBetweenCountries } from "./travel-across-borders.js";

// Variables
let mainContent = document.querySelector(".main").children;
let body = document.querySelector("body");
let countryDetails = document.querySelector(".countryDetails");
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
                                <span>Population:</span> ${dots(data.population)}
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

    // To check if there are "languages" in the countries
    if(Object.hasOwn(data, "languages")){
        let informationOther = document.querySelector(".information__other");
        let details = document.createElement("p");
        details.classList.add("other__details", "detail");
        details.innerHTML =  `
            <span>Languages: </span> ${Object.values(data.languages).join(", ")}
        `
        informationOther.prepend(details);
    }

    // To check if there are "currencies" in the countries
    if(Object.hasOwn(data, "currencies")){
        let informationOther = document.querySelector(".information__other");
        let details = document.createElement("p");
        details.classList.add("other__details", "detail");
        details.innerHTML =  `
            <span>Currencies: </span> ${Object.values(data.currencies)[0].name}
        `
        informationOther.prepend(details);
    }

    // To check if there are "top level domain" in the countries
    if(Object.hasOwn(data, "tld")){
        let informationOther = document.querySelector(".information__other");
        let details = document.createElement("p");
        details.classList.add("other__detail","detail");
        details.innerHTML = `
            <span>Top Level Domain:</span> ${data.tld[0]}
        `
        informationOther.prepend(details);
    }

    // To check if there are borders in the countries
    if(Object.hasOwn(data, "borders")){
        borders(data.borders)
    } else{
        let borders = document.querySelector(".container__borders");
        borders.remove();
    }

    // To put dark mode
    if(body.classList.contains("body-dark")){
        containerDetails.classList.add("containerDetails-dark");
    }
    comeBackButton();
}

// To create every border the country has
function borders(countries){
    let container = document.querySelector(".borders__container");
    countries.forEach(element =>{
        let country = document.createElement("div");
        country.classList.add("borders__country", "button");
        country.textContent = element;
        container.appendChild(country);
        travelBetweenCountries(country);
    })
}

// Exports
export { detailsCountry, fetchByCcn3 }
