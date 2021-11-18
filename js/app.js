// Le module app est en fait un objet JavaScript
// avec des propriétés et des méthodes
let app = {
    // Propriété movements (tableau des mouvements), initialisé à "array" vide
    movements: [],
    // La méthode init (une fonction dans une classe/objet = une méthode)
    init: function() {
        // Et un console log pour être certain que notre méthode a bien été appelée
        console.log('la méthode init de l\'objet app a bien été appelée');

        // On met en place les évènements au chargement de la page
        // On récupère l'objet représentant l'élément <form id="addMovement"></form>
        let formElement = document.getElementById('addMovement');
        // On va "écouter un évènement" sur cet élément
        // => Si l'event "submit" survient (et même à chaque fois qu'il survient)
        //    alors la fonction de callback (méthode ici) app.handleAddMovementSubmit sera exécutée
        formElement.addEventListener('submit', app.handleAddMovementSubmit);
    },
    // Déclaration de la méthode appelée suite à l'ajout d'un mouvement
    // evt est l'objet Event fourni par JavaScript en argument de toute fonction de callback
    handleAddMovementSubmit: function(evt) {
        // Normalement, le navigateur envoie les données du formulaire dans une nouvelle requête HTTP (GET ou POST)
        // mais on ne veut pas cela, on veut rester sur cette page, et empêcher d'aller sur une autre page
        evt.preventDefault();

        // On peut récupérer l'élément sur lequel a eu lieu l'évènement
        // En l'occurence, ici, ce sera l'élément <form id="addMovement"></form>
        let addMovementFormElement = evt.currentTarget;
        console.log(addMovementFormElement); // En passant la souris au dessus de ce log, le DevTools met en surbrillance le formulaire en question à l'écran

        // Pour être sûr de passer dans la méthode
        console.log('le formulaire d\'ajout a bien été soumis');

        // --- On veut récupérer la saisie du premier input ---
        // On commence par récupérer l'input, et on peut le faire (rechercher) depuis le formulaire
        let firstInputElement = addMovementFormElement.querySelector('input[name="label"]');
        // Puis on récupère la valeur de l'attribut "value" de cet input
        // Avec DOM, chaque attribut est une propriété de l'élément
        let label = firstInputElement.value;

        // On fait de même avec le 2e input
        let secondInputElement = addMovementFormElement.querySelector('input[name="amount"]');
        let amount = parseFloat(secondInputElement.value); // parseFloat permet de convertir la chaine de caractère en nombre à virgule

        // Un console.log pour vérifier
        console.log('Désignation : ' + label);
        console.log('Montant : ' + amount);

        // --- On veut ajouter un li dans la liste des mouvements ---
        // On commence par récupérer l'élément <ul id="movements">
        let ulElement = document.getElementById('movements');
        // Puis, on crée un nouvel élément <li>, vide
        let newLiElement = document.createElement('li');
        // Dans ce <li>, on ajoute le texte (propriété textContent)
        newLiElement.textContent = label + ' : ' + amount;

        // L'élément <li> est créé et rempli, mais n'existe pas encore dans le DOM
        // Donc on s'occupe de l'ajouter comme balise "enfant" du <ul> récupéré plus haut
        ulElement.appendChild(newLiElement);
        // si j'avais fais comme ça ulElement.innerHTML = "<li>" + label + ' : ' + amount + "</li>"; j'eccraserai les autres li "
    }
};

// Mais pour l'instant, on a seulement déclaré l'objet app avec une méthode init
// Il faut appeler cette méthode pour qu'elle s'exécute
// app.init();
// Il y a un évènement "La page est chargée", et on peut y attacher une fonction de callback
// c'est à dire une fonction qui sera automatiquement appelée par JavaScript une fois que l'évènement survient
document.addEventListener('DOMContentLoaded', app.init); // attention, on donne le nom de la fonction (méthode en l'occurence), donc pas de ()