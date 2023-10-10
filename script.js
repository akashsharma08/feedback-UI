const ratings = document.querySelectorAll(".rating");
const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
let selRating = ""; 



 ratings.forEach((rating) => {
    rating.addEventListener("click", (event)=>{
        removeActive();
        rating.classList.add("active");
        selRating= rating.children[1].textContent;
    });
 });

function removeActive(rating){
    ratings.forEach((rating) => {
        rating.classList.remove("active");        
    });
}

btn.addEventListener("click" , ()=>{
    if (selRating != "") {
        container.innerHTML = `
        <strong>Thank You!</strong>
        <h1>Feedback : ${selRating} </h1>
        <p>We'll use this feedback to improve our costumer support.</p>
        ` ;
        container.classList.add("styling");
    }
})