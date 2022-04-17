import { optionsFunctionality } from "./view/filter-section.js";
import { fetchApi } from "./view/fetch-API.js";
import { listener, localDarkMode } from "./view/dark-mode.js";
import { hideMainSection, hideFilterSection } from "./view/remove-elements.js";


localDarkMode();
optionsFunctionality();
fetchApi();
listener();
hideMainSection();
hideFilterSection();
