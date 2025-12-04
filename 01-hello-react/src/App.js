import logo from './logo.svg';
import './App.css';



function App() {
  const langages = ["html","css","js","react"];
  return (
    
    <div className="App">
      <p className="red">HI DEV202</p>
      <p></p>
{/*       <Div></Div>
      <H1></H1> */}

      <ul>
        {
          langages.map((l,i) => <li key={i}>{l} <button >edit</button></li>)
        }
      </ul>
    </div>
  );
}

export default App;
