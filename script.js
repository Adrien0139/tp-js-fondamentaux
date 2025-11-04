console.log("Laboratoire prêt !")
const nom = "Adrien"
let age = 16
//nom = "Pacome"
console.log(nom)
age = 17
console.log(age)
const motDePasseAttendu = "secret123"
let motDePasseUtilisateur = "12345"
if ("Comparaison entre motDePasseUtilisateur et motDePasseAttendu") {
    console.log("Accès autorisé. Bienvenue !");
} else if ("Vérification de la longueur du mot de passe (< 8 caractères)") {
    console.log("Accès refusé. Votre mot de passe est trop court (8 caractères min).");
} else {
    console.log("Accès refusé. Mot de passe incorrect.");
}
const moi = {
    prenom: "Adrien",
    nom: "ESCOFIFER",
    age: 16,
    competences: ["HTML", "CSS"]
};
console.log(moi)
console.log(moi.prenom); // Affiche "VotrePrénom"
moi.age = 19
moi.ville = "Lyon"
console.log(moi)