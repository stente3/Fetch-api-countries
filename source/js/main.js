fetch("https://restcountries.com/v2/all")
    .then(response => response.json())
    .then(data => createImg(data) )
// Variables
let main = document.querySelector(".main");
let card = document.querySelector(".card");

// Functions
