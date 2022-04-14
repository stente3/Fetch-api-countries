let mainContent = document.querySelector(".main").children;

function detailsCountry(){
    for(let i = 0; i < mainContent.length; i++){
        mainContent[i].addEventListener("click", () =>{
            console.log(mainContent[i].firstElementChild.id);
        })
    }
    
}

export { detailsCountry }
