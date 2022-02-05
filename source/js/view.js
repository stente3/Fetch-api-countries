// Filter Section
let filter = document.querySelector(".filter");
let options = document.querySelectorAll(".option");
let defaulOption = document.querySelector(".filter__defaul-option .option p");

filter.addEventListener("click", ()=> {
    filter.classList.toggle("active");
});

options.forEach((e) =>{
    e.addEventListener("click", (e) =>{
        defaulOption.textContent = e.target.textContent;
    })
})

// Dark Mode
let body = document.querySelector(".body");
let buttonMode = document.querySelectorAll(".dark-mode--change");

buttonMode.forEach(element =>{
    element.addEventListener("click", (e) =>{
        console.log(e.target);
    })
})


