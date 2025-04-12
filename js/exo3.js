// Version 1:
// Déclare une variable compteur initialisée à 0
// let compteur = 0;

// Fonction pour incrémenter le compteur
// function incrementerCompteur() {
    // compteur++; // Incrémente la variable globale
    // document.getElementById("compteur").textContent = compteur; // Met à jour l'affichage
// }

// Fonction pour réinitialiser le compteur
// function reinitialiserCompteur() {
    // compteur = 0; // Remet le compteur à 0
    // document.getElementById("compteur").textContent = compteur; // Met à jour l'affichage
// }

// Ajoute un écouteur d'événement au bouton "Cliquez-moi"
// document.getElementById("boutonClick").addEventListener("click", incrementerCompteur);

// Ajoute un écouter d'événement au bouton "Réinitialiser"
// document.getElementById("boutonReset").addEventListener("click", reinitialiserCompteur);


// Version 2:
// Attend que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", function () {
    // Récupère les éléments du DOM
    const compteurElement = document.getElementById("compteur");
    const boutonClick = document.getElementById("boutonClick");
    const boutonRest = document.getElementById("boutonReset");

    // Vérifie que les éléments existent avant d'ajouter des événements
    if (!compteurElement || !boutonClick || !boutonRest) {
        console.error("Erreur : certains éléments du DOM sont introuvables.");
        return;
    }

    let compteur = 0; // Initialise le compteur

    // Fonction pour incrémenter le compteur
    function incrementerCompteur() {
        compteur++; // Augmente la valeur du compteur
        miseAJourCompteur(); // Met à jour l'affichage
    }

    // Fonction pour réinitialiser le compteur
    function reinitialiserCompteur() {
        compteur = 0; // Réinitialiser le compteur
        miseAJourCompteur(); // Met à jour l'affichage
    }

    // Fonction pour mettre à jour l'affichage du compteur avec une animation
    function miseAJourCompteur() {
        compteurElement.textContent = compteur;
    }

    // Ajoute les écouteurs d'événement aux boutons
    boutonClick.addEventListener("click", incrementerCompteur);
    boutonRest.addEventListener("click", reinitialiserCompteur);
});