/* let a = 5;
console.log(a);

a = "nadir";

console.log(a); */

//faiblement typé
// 


const clients = [
    { nom: "Rami", montant: 4500 },
    { nom: "Karimi", montant: 2300 },
    { nom: "Chaouki", montant: 5500 },
    { nom: "Ramoun", montant: 7700 },
];

const montants = clients.reduce(function (save, element) {
    return save = save + element.montant;
}, 0)

const montants2 = clients.reduce((t, c) => t += c.montant, 0);

console.log(montants);
console.log(montants2);




const totalMontants = clients.reduce(function (total, client) {
    return total += client.montant
}, 0);
console.log(totalMontants)


const stagiaires = [
    { nom: "Rami", note: 15 },
    { nom: "Karimi", note: 19 },
    { nom: "Chaouki", note: 17 },
    { nom: "Ramoun", note: 12 },
];

const moy = stagiaires.reduce((total, stagiaire) => total += stagiaire.note, 0) / stagiaires.length;

console.log(moy);


const personne = {
    nom: "nadir",
    fonction: "formateur",
    code: 17562
}

/* const nom = personne.nom;
const fonction = personne.fonction;
const code = personne.code; */

const { nom, fonction, code } = personne;

console.log(nom, fonction, code);

// tableaux

/* const notes = [12, 17, 15, 16, 18, 20]; */

/* const n1 = notes[0];
const n2 = notes[1];
const n3 = notes[2]; */

/* const [n1,n2,n3, ...rest] = notes;

console.log(n1, n2, n3);
console.log(rest); */

const notes = [12, 17, 15, 16, 18, 20];

const notes2 = [...notes];

console.log(notes2);

////////////////////////////////


let salaires = [10000, 15000, 20000];

////dev1
console.log(salaires[1]);
//logic send salaire


////dev2
let salaires2 = [...salaires];
// ref de salaires

salaires2[1] = 30000;

//logic send salaire
console.log(salaires[1]);


let livres = [
    { id: 10, titre: "POO", auteur: "RAMI", prix: 300 },
    { id: 11, titre: "JS ES6", auteur: "FAMI", prix: 230 },
    { id: 12, titre: "Algorithme", auteur: "KARIMI", prix: 330 },
    { id: 13, titre: "HTMH& CSS", auteur: "RAMI", prix: 340 }
]


const tab = livres.filter(l => l.id != 11);

console.log(tab);


let mesLivres = [...livres.filter(l => l.id != 11)]

console.log(mesLivres);


let newLivre = { id: 14, titre: "NEXTJS", auteur: "Maxi", prix: 140 }

mesLivres = [...mesLivres, newLivre]

console.log(mesLivres);
