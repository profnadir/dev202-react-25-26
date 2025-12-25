import logo from './logo.svg';
import './App.css';
import Compteur from './components/Compteur';
import { useEffect, useState } from 'react';

function App() {
  const [show, setShow] = useState(true)
  /* useEffect(function(){
    //traitement
  },[term]) */
  return (
    <div className="App">
      {show && <Compteur />}
      <button onClick={() => setShow(true)}>monter</button>
      <button onClick={() => setShow(false)}>démonter</button>
    </div>
  );
}

export default App;
