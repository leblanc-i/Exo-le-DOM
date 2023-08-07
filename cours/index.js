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
});

// *** Form Events ***
const inputName = document.querySelector("input[type='text']");
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
    // e.target.value pour acceder a ce qui est taper dans l'input
    pseudo = e.target.value; // on stock la valeur taper dans pseudo
});

select.addEventListener("input", (e) => {
    language = e.target.value; // on stock le langage choisis dans language
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // L'id de nos input est connut par le javascript meme sans etre declaréé.

    // Et là nous disons à notre formulaire que quand les cgv sont checkées d'acceder à son enfant direct div et de creer dedans du contenu HTML(h3 et h4).
    if (cgv.checked) {
        document.querySelector("form > div").innerHTML = `
            <h3>Pseudo : ${pseudo}</h3>
            <h4>Langage préféré : ${language}</h4>`;
    } else {
        alert("Veuillez accepter les CGV");
    }
});

// *** Load Events ***

// On porra mettre tout une logique qui s'execute une fois que tout ce qui est au dessus de lui sera d'abord chargé.
window.addEventListener("load", () => {
    console.log("Document Chargé !");
});

// *** ForEach(pour chacun d'eux) ***

// On l'utilise seulement pour plusieurs element ayant la meme class
const boxes = document.querySelectorAll(".box");
console.log(boxes);

// On utilise le forEach parce-qu'on ne peut pas utiliser le addEventListener pour plusieurs elements(boxes).
boxes.forEach((box) => {

    // Et là enfin on peut utiliser le addEventListener pour donner un comportement à chaque box clické.
    box.addEventListener("click", (e) => {
        box.style.transform = "scale(0.7)";
    })
});

// *** addEventListener Vs onClick ***

// Le onclick n'est pas tres recommander
// Contrairement à l'addEventLisrener il ne peut qu'etre utiliser qu'une fois par evenement(scroll, click).

//-------------------------------------------

// document.body.onclick = () => {
//     console.log("Clické");
// };


// Bubbling => (de base l'eventListener est parametré en mode Bubbling).
// En mettant le false au Bubbling
// Et le true à la Usecapture
// On modifie l'odre de la lecture du script
// Il va d'abord lu la Usecapture ensuite le Bubbling.
document.body.addEventListener("click", () => {
    console.log("click 1 !");

    // de base il est sur false donc on peut si on veut ne pas mettre le false.
}, false );

// Usecapture
document.body.addEventListener("click", () => {
    console.log("click 2 !");
}, true);

// *** Stop propagation ***

// ça empeche la propagation d'un evenement
questionBox.addEventListener("click", (e) => {
    alert("test !");
    // on empeche l'execution des autres evenements apres avoir clické.
    e.stopPropagation();
});

// *** removeEventListene *** ça marche au cas ou on veut retirer un addEventListener.

// *** BOM *** (c'est l'objet window il est au dessus de tout).

// Savoir la hauteur de la fenetre
console.log(window.innerHeight);

// la position quand on scoll
console.log(window.screenY);

// window.open permet d'ouvir une page popup et qu'on porra parametré
// window.open("https://google.com", "cours js", "height=400 width=500");

// window.close permet de tout fermer
// window.close();

// confirm 
// c'est une alerte qui te demande d'accepter ou d'annuler
btn2.addEventListener("click", () => {
    confirm("Etes-vous sur de votre reponse?");
});

// prompt
// cest une alerte dans le quel on peut ecrire du contenu qu'on pourra recuperer plus tard dans une variable.
btn1.addEventListener("click", () => {
    let nom = prompt("Entrez votre nom");

    // Mais la ça ecrase le contenu de questionBox
    // questionBox.innerHTML = "<h3>Bravo " + nom + "</h3>";
    // Si on veut pas ecraser on fait :
    questionBox.innerHTML += "<h3>Bravo " + nom + "</h3>";
});

// seTimeout
// on definis une fonction qui se joue à partir d'un temps definis
setTimeout(() => {
    questionBox.style.borderRadius = "300px";// logique à executer
}, 2000); // temps avant l'execution en miliseconde.

// setInterval
// execute un code tout le temps qu'on definis
setInterval(() => {
    document.body.innerHTML += `
        <div class="box">
            <h2>Nouvelle Boite</h2>
        </div>
        `;
}, 1000);
