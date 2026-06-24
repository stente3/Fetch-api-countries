// Imports
import { showFooter, moreCountries } from "./more-countries.js";
import { search } from "./seacher.js";
import { detailsCountry } from "./details.js";
import { startLoader, endLoader, dots, sortCountries } from "./utilities.js";

// Variables
let mainContent = document.querySelector(".main");
let currentNumber = 20;
let countriesLength;
let storedCountries = [];
let countriesByCode = new Map();
const REST_COUNTRIES_API_BASE_URL =
    import.meta.env.VITE_RESTCOUNTRIES_API_BASE_URL ||
    "https://api.restcountries.com/countries/v5";
const REST_COUNTRIES_API_KEY = import.meta.env.VITE_RESTCOUNTRIES_API_KEY;

function normalizeCountry(country) {
    return {
        ...country,
        cca3: country?.codes?.alpha_3 || "",
        flags: {
            svg: country?.flag?.url_svg || "",
            png: country?.flag?.url_png || "",
        },
        name: {
            common: country?.names?.common || "",
            official: country?.names?.official || "",
        },
        capital: (country?.capitals || []).map((capital) => capital?.name).filter(Boolean),
        population: country?.population || 0,
        region: country?.region || "",
        subregion: country?.subregion || "",
        borders: country?.borders || [],
        tld: country?.tlds || [],
        currencies: (country?.currencies || []).reduce((accumulator, currency) => {
            if (currency?.code) {
                accumulator[currency.code] = currency;
            }

            return accumulator;
        }, {}),
        languages: (country?.languages || []).reduce((accumulator, language, index) => {
            const key = language?.bcp47 || language?.name || `language_${index}`;

            if (language?.name) {
                accumulator[key] = language.name;
            }

            return accumulator;
        }, {}),
    };
}

function normalizeCountries(countries) {
    return countries.map(normalizeCountry);
}

function setCountriesStore(countries) {
    storedCountries = countries;
    countriesByCode = new Map(
        countries.map((country) => [country.cca3?.toUpperCase(), country])
    );
}

function getStoredCountries() {
    return storedCountries;
}

function getCountryByCode(code) {
    if (!code) {
        return undefined;
    }

    return countriesByCode.get(code.toUpperCase());
}

function getAuthorizationHeaders() {
    if (!REST_COUNTRIES_API_KEY) {
        throw new Error(
            "Missing VITE_RESTCOUNTRIES_API_KEY. Add it to your .env file."
        );
    }

    return {
        Authorization: `Bearer ${REST_COUNTRIES_API_KEY}`,
    };
}

async function fetchRestCountries(endpoint) {
    const response = await fetch(`${REST_COUNTRIES_API_BASE_URL}${endpoint}`, {
        headers: getAuthorizationHeaders(),
    });
    const payload = await response.json();

    if (!response.ok) {
        const errorMessage =
            payload?.errors?.[0]?.message ||
            "Failed to fetch data from Rest Countries.";
        throw new Error(errorMessage);
    }

    return payload?.data || {};
}

async function fetchAllCountries() {
    const limit = 100;
    let offset = 0;
    let countries = [];
    let hasMore = true;

    while (hasMore) {
        const data = await fetchRestCountries(`?limit=${limit}&offset=${offset}`);
        const currentCountries = data?.objects || [];
        const metadata = data?.meta || {};

        countries = countries.concat(normalizeCountries(currentCountries));
        hasMore = Boolean(metadata.more);
        offset += limit;
    }

    return countries;
}

function renderCountries(data) {
    createCards(data, 0, currentNumber);
    showFooter();
    moreCountries(data);
    search(data);
    countriesLength = data.length;
}

// Functions
async function fetchApi() {
    // Shows the loading logo
    startLoader();

    try {
        const data =
            storedCountries.length > 0 ? storedCountries : await fetchAllCountries();
        setCountriesStore(data);
        // Hides the loading logo
        endLoader();
        // Sort data
        data.sort((a, b) => sortCountries(a, b));

        renderCountries(data);
    } catch (error) {
        endLoader();
        console.error(error);
    }
}

function createCards(data, firstN, lastN) {
    for (let i = firstN; i < lastN; i++) {
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
    detailsCountry(firstN, lastN);
}

// Exports
export {
    mainContent,
    countriesLength,
    fetchApi,
    createCards,
    startLoader,
    endLoader,
    fetchRestCountries,
    normalizeCountries,
    getStoredCountries,
    getCountryByCode,
    renderCountries,
};
