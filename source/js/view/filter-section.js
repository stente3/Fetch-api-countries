// Variables
let filter = document.querySelector(".filter__container");
let options = document.querySelectorAll(".option");
let defaultOption = document.querySelector(".filter__default-option .option p");

// Function
function filterFunctionality(){
    filter.addEventListener("click", ()=> {
        filter.classList.toggle("active");
    });

    options.forEach((e) =>{
        e.addEventListener("click", (e) =>{
            defaultOption.textContent = e.target.textContent;
        })
    })
}

export { filterFunctionality };
