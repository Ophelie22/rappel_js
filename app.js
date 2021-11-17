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
    }
};

// Mais pour l'instant, on a seulement déclaré l'objet app avec une méthode init
// Il faut appeler cette méthode pour qu'elle s'exécute
app.init();