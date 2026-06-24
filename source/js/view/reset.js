//Imports
import { rmMainSection, clearSearcher } from "./utilities.js";
import { defaultOption } from "./filter-section.js";
import { fetchApi, getStoredCountries, mainContent, renderCountries } from "./fetch-API.js";
import { body } from "./details.js";
import { filterSection } from "./dark-mode.js";

let title = document.querySelector(".navegation__header");

function resetEvent(){
    title.addEventListener("click", resetPage)
}

function resetPage(){
    rmContainerDetails()
    rmMainSection();
    defaultOption.textContent = "Filter by Region";
    clearSearcher();
    const countries = getStoredCountries();

    if (countries.length > 0) {
        renderCountries(countries);
        return;
    }

    fetchApi();
}

function rmContainerDetails(){
    let containerDetails = document.querySelector(".containerDetails");
    if(body.contains(containerDetails)){
        containerDetails.remove();
        mainContent.classList.remove("hide");
        filterSection.classList.remove("hide");
    }
}
export { resetEvent } 
