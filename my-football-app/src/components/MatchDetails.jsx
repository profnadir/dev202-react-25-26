import React from 'react'
import { Link, useParams } from 'react-router-dom';

export default function MatchDetails({matchs}) {
    const {id} = useParams();
    
    const m = matchs.find(m=> m.id == id);
  return (
    <>
        <div style={{border:"1px solid black",backgroundColor:"indigo",padding:"20px",margin:"20px",color:"white"}}>
            <h2>Titre {m.name}</h2>
            <p>Jour {m.matchDay}</p>
            <p>Location {m.location}</p>
            <Link to="/" >Retour</Link>
        </div>
    </>
  )
}
