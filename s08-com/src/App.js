import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ResultatList from './components/ResultatList';
import ChercheBar from './components/ChercheBar';

function App() {
  const list = [
    { nom: "banane", type: "fruit" },
    { nom: "orange", type: "fruit" },
    { nom: "pomme", type: "fruit" },
    { nom: "raisins", type: "fruit" },
    { nom: "kiwi", type: "fruit" },
    { nom: "tomate", type: "legume" },
    { nom: "carotte", type: "legume" },
    { nom: "pomme de terre", type: "legume" },
    { nom: "navet", type: "legume" },
    { nom: "poivron", type: "legume" }
  ]

  const [groupe, setGroupe] = useState("dev202");
  const [resultas, setResultas] = useState(list);

  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();


    const handleSubmitParent = function(term){
        //alert(term)
        //...
        setResultas(list.filter(item => item.type == term));
    }

  return (
    <div className="App">

      <ChercheBar handleSubmitParent={handleSubmitParent}/>

      <hr />

      <ResultatList resultas={resultas} groupe={groupe} />

      <hr/>

      <form>
        <div>
          <label>num1</label>
          <input type="text" 
          value={num1} 
          onChange={e => setNum1(e.target.value)}/>
          <span>{
            num1>100 ? "attension" : ""
            }</span>
        </div>
        +
        <div>
          <label>num2</label>
          <input type="text" 
          value={num2} 
          onChange={e => setNum2(e.target.value)}/>
        </div>
        {Number(num1) + Number(num2)}

      </form>

    </div>
  );
}

export default App;
