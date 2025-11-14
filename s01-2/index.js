const stagiaire1 = {
    nom: "rahil",
    prenom: "abdellah",
    age: 30
}
const stagiaire2 = {
    nom: "rahil2",
    prenom: "abdellah2",
    age: 30
}

function sayHi({ nom, prenom,age }) {
    console.log(nom, prenom, age);
}
sayHi(stagiaire2)

/* const nom = stagiaire1.nom;
const prenom = stagiaire1.prenom;
const age = stagiaire1.age; */

const {nom, prenom, age} = stagiaire1; //destructing

console.log(nom, prenom, age);
