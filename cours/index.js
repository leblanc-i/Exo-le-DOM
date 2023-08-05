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
    response.classList.add("show-response");
    response.style.color = "green";
});
btn2.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.color = "red";
});

// *** Mouse Events ***
const mouseMove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
    mouseMove.style.left = e.pageX + "px";
    mouseMove.style.top = e.pageY + "px";
});

// Quand on click sur la souris ***
window.addEventListener("mousedown", () => {
    mouseMove.style.transform = "scale(2) translate(-25%, -25%)";
    mouseMove.style.border = "2px solid teal";
});

// Quand on relache la souris ***
window.addEventListener("mouseup", () => {
    mouseMove.style.transform = "scale(1) translate(-50%, -50%)";
    mouseMove.style.border = "2px solid black";
});
// Quand la souris survole sur un element ***
questionBox.addEventListener("mouseenter", () => {
    questionBox.style.background = "rgba(0,0,0,0.6)";
});
// Quand la souris sorte de l'element ***
questionBox.addEventListener("mouseout", () => {
    questionBox.style.background = "blue";
});
// Quand la souris survole l'element(hover) ***
response.addEventListener("mouseover", () => {
    response.style.transform = "rotate(2deg)";
});

// *** KeyPress Event ***
const keyPressContainer = document.querySelector(".keypress");
const key = document.querySelector("#key");

// Fonction qui emet un son
const ring = () => {
    const audio = new Audio();
    audio.src = "Enter.mp3";
    audio.play();
}

document.addEventListener("keypress", (e) => {
    key.textContent = e.key;

    if (e.key === "t") {
        keyPressContainer.style.background = "teal";
    } else if (e.key === "r") {
        keyPressContainer.style.background = "red";
    } else if (e.key === "b") {
        keyPressContainer.style.background = "blue";
    } else if (e.key === "y") {
        keyPressContainer.style.background = "yellow";
    } else if (e.key === "p") {
        keyPressContainer.style.background = "pink";
    } else if (e.key === "g") {
        keyPressContainer.style.background = "green";
    } else {
        keyPressContainer.style.background = "black";
    }

    ring();
});

// *** Scroll Event ***
const navBar = document.querySelector("nav");

// Creation de la fonction au Scroll
window.addEventListener("scroll", () => {

    // Si (window.scrollY) qui signifie la valeur du scroll. est superieur à 5px execute le code en dessous
    if (window.scrollY > 5) {
        navBar.style.top = 0;
    } else {
        navBar.style.top = "-50px";
    }
})