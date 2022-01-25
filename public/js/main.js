let defaultOption = document.querySelector(".default_option");
let defaultUl = document.querySelector(".default_ul li");

function run () {
    defaultOption.addEventListener("click", () =>{
        this.parentElement.toggleClass("active");
    })
}

run();
