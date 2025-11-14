class Etudiant{
    constructor(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
    }
    info(){
        //return "Nom : "+ this.nom + " - " + " Prenom " + this.prenom;
        return `Nom ${this.nom} - Prenom ${this.prenom}`;
    }
}

const centre = "CFPM";

function sayHi() {
    alert('hi');
}

export {centre, sayHi};
export default Etudiant;