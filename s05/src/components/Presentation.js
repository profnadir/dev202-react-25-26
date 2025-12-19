export default function Presentation({stagiaire, modules}) {
    //hook : useState
    //stagiaire.groupe = "dev205";
    return (
        <div>
            {/* <h1>hi {props.groupe}</h1>
            <h2>centre : {props.centre}</h2>
            <h3>{props.children}</h3>
            <hr/> */}
            <h1>Info stagiaire : </h1>
            <h2>Groupe : {stagiaire.groupe}</h2>
            <h2>centre : {stagiaire.centre}</h2>
            <h2>nom : {stagiaire.nom}</h2>
            <h2>prenom : {stagiaire.prenom}</h2>

           <ul>
            {
                modules.map((m,i) => <li key={i}>{m}</li>)
            }
           </ul>
            {/* <h2>Groupe : {props.stagiaire.groupe}</h2>
            <h2>centre : {props.stagiaire.centre}</h2>
            <h2>nom : {props.stagiaire.nom}</h2>
            <h2>prenom : {props.stagiaire.prenom}</h2> */}
        </div>
    )
}

