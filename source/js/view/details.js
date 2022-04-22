// Variables
let mainContent = document.querySelector(".main").children;

function detailsCountry(firstN, lastN){
    for(let i = firstN; i < lastN; i++){
        mainContent[i].addEventListener("click", () =>{
            console.log(mainContent[i].firstElementChild.id);
        })
    }

    /*
        <section class="containerDetails">
            <!-- Button for come back -->
            <div class="backButton button"> 
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z" fill="currentColor" /></svg>
                Back  
            </div>
            <!-- Country details -->
            <article class="countryDetails">
                <img src="data[i].flags.svg" class="countryDetails__flag">
                <div class="countryDetails__container">
                    <!-- Information container -->
                    <div class="container__information">
                        <h2 class="information__heading">data[i].name.common</h2>
                        <div class="information__main">
                            <p class="main__detail detail">
                                <span>Native Name:</span> data[i].name.nativeName.official
                            </p>
                            <p class="main__detail detail">
                                <span>Population:</span> data[i].population
                            </p>
                            <p class="main__detail detail">
                                <span>Region:</span> data[i].region
                            </p>
                            <p class="main__detail detail">
                                <span>Sub Region:</span> data[i].subregion
                            </p>
                            <p class="main__detail detail">
                                <span>Capital:</span> data[i].capital
                            </p>
                        </div>
                        <div class="information__other">
                            <p class="other__detail detail">
                                <span>Top Level Domain:</span> data[i].tld
                            </p>
                            <p class="other__detail detail">
                                <span>Currencies:</span> data[i].currencies.DJF.name
                            </p>
                            <p class="other__detail detail">
                                <span>Languages:</span> data[i].languages
                            </p>
                        </div>
                    </div>
                    <!-- Border details -->
                    <div class="container__borders">
                        <h3 class="borders__heading">Border Countries:</h3>
                        <div class="borders__container">
                            <div class="borders__country button">name</div>
                            <div class="borders__country button">name</div>
                            <div class="borders__country button">name</div>
                            <div class="borders__country button">name</div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        */
}

// Exports
export { detailsCountry }
