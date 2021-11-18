// On utilise l'objet "Console" afin de faire apparaitre des messages dans la console du navigateur
// C'est un outil très utile pour debugger
// console.log('Oui, mon fichier JS a bien été "inclu"');

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
        //console.log('handleAdddMovementSubmit');
        // Normalement, le navigateur envoie les données du formulaire dans une nouvelle requête HTTP (GET ou POST)
        // mais on ne veut pas cela, on veut rester sur cette page, et empêcher d'aller sur une autre page.
        //on empeche le rechargement de page par defaut
        evt.preventDefault();

        // On peut récupérer l'élément sur lequel a eu lieu l'évènement
        // En l'occurence, ici, ce sera l'élément <form id="addMovement"></form>
        let addMovementFormElement = evt.currentTarget;
        console.log(addMovementFormElement); // En passant la souris au dessus de ce log, le DevTools met en surbrillance le formulaire en question à l'écran

        // Pour être sûr de passer dans la méthode
        console.log('le formulaire d\'ajout a bien été soumis');
    }
};

// Mais pour l'instant, on a seulement déclaré l'objet app avec une méthode init
// Il faut appeler cette méthode pour qu'elle s'exécute
// app.init();
// Il y a un évènement "La page est chargée", et on peut y attacher une fonction de callback
// c'est à dire une fonction qui sera automatiquement appelée par JavaScript une fois que l'évènement survient
document.addEventListener('DOMContentLoaded', app.init); // attention, on donne le nom de la fonction (méthode en l'occurence), donc pas de ()