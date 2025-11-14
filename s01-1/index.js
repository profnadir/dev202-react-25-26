import Etudiant, { centre, sayHi } from "./Etudiant.js";
import Stagiaire from "./Stagiaire.js";


let e1 = new Etudiant("john","doe");
let e2 = new Etudiant("jane","doe");

console.log(e1.info());
console.log(e2.info());

let rouiha = new Stagiaire("john","doe",27);
let rahil = new Stagiaire("jane","doe",10);

console.log(rouiha.info());
console.log(rahil.info());

console.log(centre);




