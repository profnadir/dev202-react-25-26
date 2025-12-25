import React, { useState } from 'react'

export default function ChercheBar(props) {
    const [term, setTerm] = useState();

    const handleSubmit = function (event) {
        event.preventDefault();

        props.handleSubmitParent(term)

    }



    return (
        <div className="Child">
            <form onSubmit={(event) => handleSubmit(event)}>
                <div>
                    <label>Entrer le mot clé de recherche:</label>
                    <input type="text"
                        value={term}
                        onChange={(event) => setTerm(event.target.value)}
                    />
                    {term}
                </div>
                <button type="submit">chercher</button>
            </form>
        </div>
    )
}
