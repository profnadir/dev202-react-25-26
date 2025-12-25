import React from 'react'

export default function ResultatList(props) {
  return (
    <div className="Child">
        <p>{props.groupe}</p>
        {props.resultas.length == 0 ? (
          <p>pas de resultats</p>
        ) : (
          <div className="list">
            <ul>
              {props.resultas.map((item) => {
                return <li key={item.nom}>{item.nom}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
  )
}
