// Fonction pour changer le texte du titre
function changerTitre() {
    // Récupère l'élément h1 avec l'id "titre"
    const titre = document.getElementById("titre");

    // Vérifie si l'élément exist avant de modifier son contenu
    if (titre) {
        titre.textContent = "Nouveau titre"; // Change le texte du titre
    }
}

// Attend que le DOM soit complètement chargé avant d'exécuter le code
document.addEventListener("DOMContentLoaded", function() {
    // Récupère le bouton avec l'id "boutonChanger"
    const bouton = document.getElementById("boutonChanger");

    // Vérifie si le bouton existe avant d'ajouter un écouteur d'événement
    if (bouton) {
        // Ajoute un événement "click" qui appelle la fonction changerTitre()
        bouton.addEventListener("click", changerTitre);
    }
});