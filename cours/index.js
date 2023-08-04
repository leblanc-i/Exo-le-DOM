// ** Selecteurs **
// document.querySelector("h4").style.background = "yellow"; 
// const titre = document.querySelector("h4");

// console.log(titre);

// titre.style.background = "yellow";

// *** Click event ***
const questionBox = document.querySelector(".box");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");
// console.log(questionBox);

// questionBox.style.borderRadius = "150px";

questionBox.addEventListener("click", () => {
    questionBox.classList.toggle("box-clicked");
});

btn1.addEventListener("click", () => {
    response.style.visibility = "visible";
});
btn2.addEventListener("click", () => {
    response.style.visibility = "visible";
})