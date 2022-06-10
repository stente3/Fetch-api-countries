// Imports
import { optionsFunctionality } from "./view/filter-section.js";
import { fetchApi } from "./view/fetch-API.js";
import { listener, localDarkMode } from "./view/dark-mode.js";
import { resetEvent } from "./view/reset.js";


localDarkMode();
optionsFunctionality();
fetchApi();
listener();
resetEvent();
