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

