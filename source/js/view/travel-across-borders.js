// imports
import { fetchByCcn3 } from "./details.js";

// Functions 
function travelBetweenCountries(country){
    country.addEventListener("click", (element) =>{
        document.querySelector(".containerDetails").remove();
        fetchByCcn3(element.target.textContent.toLowerCase());
    })
}

export { travelBetweenCountries }

