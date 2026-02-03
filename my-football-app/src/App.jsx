import './App.css'

import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import MatchList from './components/MatchList'
import AddMatchForm from './components/AddMatchForm'
import MatchDetails from './components/MatchDetails'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const initialMatchs = [
    { id: 1, name: 'Maroc vs Argentine', matchDay: '2030-02-15', location: 'Casablanca' },
    { id: 2, name: 'Brésil vs Palestine', matchDay: '2030-02-18', location: 'Rabat' },
  ];

  useEffect(()=>{
    axios.get("https://api.example.com/matchs. ").then(
      res => setMatchs(res.data)
    )
  },[])

  const [matchs,setMatchs] = useState(initialMatchs);

  const handleSubmitApp = match => {
    setMatchs([...matchs,{...match, id:matchs.length + 1}]);
  }


  return (
    <>
      <BrowserRouter>

          <ul>
            <li>
              <Link to='/'>Matchs</Link>
            </li>
            <li>
              <Link to='/add'>Ajouter</Link>
            </li>
          </ul>

          <Routes>
            <Route path='/' element={<MatchList matchs={matchs}/>} />
            <Route path='/add' element={<AddMatchForm handleSubmitApp={handleSubmitApp}/>} />
            <Route path='/match/:id' element={<MatchDetails matchs={matchs}/>} />
          </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
