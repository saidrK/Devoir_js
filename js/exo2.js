// Tableau de fruits
const fruits = ["Pomme", "Banane", "Orange", "Fraise", "Kiwi"];

// Fonction pour afficher les fruits dans la liste
function afficherFruits(fruits) {
    // Récupère la liste <ul> par son ID
    const liste = document.getElementById("listeFruits");

    // Vérifie si la liste existe pour éviter les erreurs
    if (liste) {
        for (const fruit of fruits) {
            let element = document.createElement('li'); // Crée un élément <li>
            element.textContent = fruit; // Ajoute le nom du fruit
            liste.appendChild(element); // Ajoute l'élément <li> à la liste <ul>
        }
    }
}

// Appelle la fonction pour afficher les fruits au chargement de la page
afficherFruits(fruits);