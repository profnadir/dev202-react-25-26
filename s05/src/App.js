import Presentation from "./components/Presentation";
import PresentationClass from "./components/PresentationClass";

function App(){
    /* 
        props : string/objet/list
    */
   const stagiaire = {
    groupe : "dev202",
    centre: "cfpm",
    nom: "john",
    prenom: "doe"
   }

   const modules = ["html","css","js","react"];

    return (
        <div>
            <Presentation stagiaire={stagiaire} modules={modules} >
                hi2
            </Presentation>
            {/* <Presentation groupe="dev202" centre="cfpm" nom="john" prenom="doe" >
                hi2
            </Presentation> */}
            {/* <Presentation groupe="dev201" centre="ista-sm"/> */}
            <PresentationClass groupe="dev206" centre="istag">
                hi3
            </PresentationClass>

            <p title="test">
                hi
            </p>
        </div>
    )
}

export default App;