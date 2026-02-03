import React from 'react'
import { Link } from 'react-router-dom'

export default function MatchList({matchs}) {
  return (
    <>
        <h1>Liste des matchs</h1>
        {
            matchs.map(m => <div key={m.id} style={{border:"1px solid black",backgroundColor:"indigo",padding:"20px",margin:"20px",color:"white"}}>
                <h2>Titre {m.name}</h2>
                <p>Jour {m.matchDay}</p>
                <p>Location {m.location}</p>
                <Link to={`/match/${m.id}`}>Voir les détails</Link>
            </div>)
        }
    </>
  )
}


