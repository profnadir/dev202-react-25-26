const personnes = [
    { nom: "Rami", age: 33, estMember: true },
    { nom: "Fatihi", age: 24, estMember: false },
    { nom: "Chakib", age: 45, estMember: true },
    { nom: "Mounir", age: 37, estMember: false },
];

const chakib = personnes.find(p => p.age == 45);

//find : tableau => objet || undefined

console.log(chakib);


for (let i = 0; i < personnes.length; i++) {
    console.log(personnes[i].nom);
}

/* const noms = personnes.map(function(element){
    return element.age;
}) */

const noms = personnes.map(p => p.nom);

/* const aged = personnes.filter(p => p.age>30);
const names = aged.map(p => p.nom); */

const names = personnes.filter(p => p.age > 30).map(p=> p.nom);

console.log(names);


// filter : tableau (n) (condition) => tableau(<n)

//const noms = personnes.map(p => p.nom);

console.log(noms);


/* console.log(personnes.map(function(element){
    return element.estMember ? "Membre" : "Visiteur";
})); */


// map : tableau (n)  (selection) => tableau(n)



function add(a, b) {
    return a+b;
}

add(5,4) //9

//const a = 5;
const name = "john";

const add2 = function(a,b){
    return a+b
}

const add3 = (a,b) => a+b


add2(5,4) // 9

function sayHi(nom) {
    return "hi " + nom;
}


const nums=[2,5,8,7,3];

const nouvNums = nums.map(n => n*3);

console.log(nouvNums);


//nouvNums=[6,15,24,21,9]

const a = 5 ;
const b = a;

// b = 5

const t1 = [1,2];
const t2 = t1;

// t2 = [1, 2]



