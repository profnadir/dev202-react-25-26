import Etudiant from "./Etudiant.js";

export default class Stagiaire extends Etudiant{
    constructor(nom, prenom, note){
        super(nom,prenom)
        this.note = note;
    }
    info(){
        return `${super.info()} - Note : ${this.note}`;
    }
}

//export default Stagiaire;