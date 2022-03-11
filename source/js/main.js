import { filterFunctionality } from "./view/filter-section.js";
import { fetchApi, createCards, startLoader, endLoader } from "./view/fetch-API.js";
import { listener, localDarkMode } from "./view/dark-mode.js";

localDarkMode();
filterFunctionality();
fetchApi();
listener();

