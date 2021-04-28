// - # Exo 1 Boucles WHILE
//     - ## Créez une variable classe avec un array
let eleve = ["Alexis", "Loic", "kkkkkk", "Mohammed", "Yassin", "Issam", "Mihai", "Oussama", "Dorian", "Tania", "Anthony", "Junior", "Kevin", "Andy", "Cheb Khaled", "The Kairi 78", "Arouf gangsta le plus beau de tout les rebeux"];
//     - ## A l'aide d'un prompt, choisissez le nombre max d'étudiants dans la classe
let numberMax = +prompt("choisissez le nombre max d'étudiants dans la classe")
let eleveEnClasse = ''
//     - ## A l'aide d'une boucle while, inserez des étudiants dans la classe tant que la classe n'est pas remplie
let i = 0;
while (i != numberMax) {
    eleveEnClasse = eleveEnClasse + eleve[i] + ' ';
    i++
}
//     - ## Après avoir rempli la classe, affichez tous les etudiants
console.log(eleveEnClasse);
// ##  Ex 01
// ## Créer un tableau de 9 prénoms 
let prenom = ["Alexis", "Loic", "kkkkkk", "Mohammed", "Yassin", "Issam", "Mihai", "Oussama", "Dorian"];
// ## Faire une boucle sur les prénoms précédé de Bonjour tant que 9 n'est pas atteint et les affiché dans la console*
let j = 0;
while (j < prenom.length) {
    console.log(`Bonjour ${prenom[j]}`);
    j++
}
// ## Astuce : let i = 0;
// ## Astuce 2 : (i < 9)

// - ##  Exo 02
// ## Créer un tableau de 6 fruits
let fruits = ["pomme", "banane", "fraise", "mangue", "kiwi", 'orange'];
console.log(fruits);
// ## Avec l'aide d'une boucle while vider le tableau.
while (fruits.length > 0) {
    fruits.pop();
}
console.log(fruits);
// ## Utilisez fruits.length

// - ##  Exo 03
// ## Créer un tableau de 4 légumes du nom de 'panierLegumes'
let panierLegumes = ["carotte", 'choux fleurs', 'artichaud', 'broccoli'];
console.log(panierLegumes);
// ## Stocker la longueur du tableau dans une variable du nom de 'longeur'
let longueur = panierLegumes.length;
// # Vider le tableau panierLegumes pour mettre son contenu dans un second tableau du nom de 'caisseLegumes'
let caisseLegumes = []
while (longueur != 0) {
    caisseLegumes.push(panierLegumes[0])
    panierLegumes.shift();
    longueur = panierLegumes.length;
}
console.log(`exo 3 : ${panierLegumes}`);
// - ##  Exo4
// ##  Préparer une énigme, et faites une boucle WHILE qui va vérifier si l'utilisateur répond correctement à l'énigme via un prompt, tant qu'il se trompe, vous lui reposer la question. S'il a juste, faites une alerte qui le félicite
alert("On joue au jeux du juste prix indique un chiffre entre 0 et 100")
let chiffreAleatoire = Math.round(Math.random() * 100);
let response;
do {
    response = +prompt("Dit un chiffre");
    if (response < chiffreAleatoire) {
        alert("ton chiffre est trop petit")
    }
    else if (response > chiffreAleatoire) {
        alert("Ton chiffre est trop grand");
    }
    else {
        continue;
    }
} while (response != chiffreAleatoire);
alert("Bien joué a toi")
// - ##  Exo5
// ##  Re faire l'exo 4 avec DO WHILE

// - ##  Exo6
// ## Créer une variable avec l'année actuelle
let anneeActuel = new Date().getFullYear();
// ## Créer un programme qui génère une année de façon aléatoire entre 1970 et 2021. L’utilisateur doit donner le bon age en répondant à la question suivante
let anneeAleatoire = 1970 + Math.round(Math.random() * 51)
// ## : “Si je suis née en 1988(année généré aléatoirement), quel age ai-je aujourd’hui ? ”
// ## L’utilisateur a trois essais. S’il donne la bonne réponse, on sort et s’il arrive à trois essaies on sort également.
// ## Finir avec un affichage.
let reponse;
let nombreDeTour = 0;
do {
    nombreDeTour++
    reponse = +prompt(`Si je suis née en ${anneeAleatoire}, quel age ai-je aujourd’hui ? `)
    reponse != anneeActuel - anneeAleatoire ? alert("tu tes tromper recommence !") : console.log("Bien joué tu as la bonne réponse");
} while (nombreDeTour != 3 || reponse != (anneeActuel - anneeAleatoire));
// - ##  Exo7 
// ## Demandez a l'utlisateur de remplir un panier de fruit jusqu'a en obtenir 8
let panierDeFruits = [];
let confirmation = 0;
let fruitChoisit;
// ## Quand son panier est rempli montrez lui, puis demandez lui si il désire retirer un fruit
// ## Si il met le nom d'un fruit alors le fruit est retiré, on lui montre son nouveau panier puis on lui repose la question, si il met autre chose que le nom d'un fruit alors on lui dit "Merci bon appetit"
// ## Chaque fruit entré par l'utilisateur doit finir par etre ortographié avec une premiere lettre majuscule et le reste en minuscule 
// ## Lui montrer son panier avec la première lettre en majuscule
let k = 0;
do {
    if (k != 8) {
        fruitChoisit = prompt("Entrez un fruit");
        fruitChoisit = fruitChoisit.charAt(0).toUpperCase() + fruitChoisit.slice(1).toLowerCase();
        panierDeFruits.push(fruitChoisit);
        k++
    }
    if (k == 8) {
        alert(panierDeFruits);
        fruitChoisit = prompt("desirez vous retirer un fruits \n oui ou non ?");
        if (fruitChoisit == "oui") {
            fruitChoisit = prompt("Entrez le nom du fruit");
            fruitChoisit.charAt(0).toUpperCase() + fruitChoisit.slice(1).toLowerCase();
            panierDeFruits.splice(panierDeFruits.indexOf(fruitChoisit), 1);
        }
        confirmation++
        console.log(panierDeFruits);
    }
} while (confirmation != 2);