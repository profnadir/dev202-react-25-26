import React, { useState } from 'react'

export default function AddMatchForm({handleSubmitApp}) {

    const [name, setName] = useState('');
    const [matchDay, setMatchDay] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const match = {
            name,
            matchDay,
            location
        }
        handleSubmitApp(match)
    }

  return (
    <>
        <form onSubmit={e => handleSubmit(e)}>

            <div>
                <label>Nom</label>
                <input type="text" value={name}
                    onChange={e => setName(e.target.value)}/>
            </div>
            <div>
                <label>Jour</label>
                <input type="date" value={matchDay}
                    onChange={e => setMatchDay(e.target.value)}/>
            </div>
            <div>
                <label>Location</label>
                <input type="text" value={location}
                    onChange={e => setLocation(e.target.value)}/>
            </div>
            <button>Ajouter</button>

        </form>
    </>
  )
}
