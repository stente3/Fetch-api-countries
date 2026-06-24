// Imports
import { rmMainSection, sortCountries } from "./utilities.js";
import { search, clearSearcher } from "./seacher.js";
import {
    fetchApi,
    createCards,
    startLoader,
    endLoader,
    getStoredCountries,
} from "./fetch-API.js";

// Variables
let filter = document.querySelector(".filter__container");
let defaultOption = document.querySelector(".filter__default-option .option p");
let optionsContainer = document.querySelectorAll(".select_ul .option");
let currentRegion;

// Function
function optionsFunctionality() {
    filter.addEventListener("click", () => {
        filter.classList.toggle("active");
    });
    optionsContainer.forEach((element) => {
        element.addEventListener("click", (element) => {
            if (element.target.textContent.trim() != defaultOption.textContent) {
                if (element.target.textContent.trim() != "All") {
                    currentRegion = element.target.textContent.toLowerCase().trim();
                    fetchApiregions(currentRegion);
                } else {
                    rmMainSection();
                    fetchApi();
                }
            }
            defaultOption.textContent = element.target.textContent.trim();
            clearSearcher();
        });
    });
}

// Shows all the countries of the chosen region
async function fetchApiregions(region) {
    const normalizedRegion = region === "america" ? "Americas" : region;
    // Shows the loading logo
    rmMainSection();
    startLoader();

    try {
        const countries = getStoredCountries().filter(
            (country) => country.region?.toLowerCase() === normalizedRegion.toLowerCase()
        );
        // Hides the loading logo
        endLoader();
        // Sort data
        countries.sort((a, b) => sortCountries(a, b));

        rmMainSection();
        createCards(countries, 0, countries.length);
        search(countries);
    } catch (error) {
        endLoader();
        console.error(error);
    }
}

// Exports
export { optionsFunctionality, defaultOption, fetchApiregions };
