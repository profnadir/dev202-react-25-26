import React, { useState } from 'react'

export default function UserForm({handleSubmitApp}) {

    const [nom, setNom] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = e => {
        e.preventDefault();


        const newUser = {
                nom: nom,
                age: age,
                email: email
        }

        handleSubmitApp(newUser)
      



        setNom("");
        setAge("");
        setEmail("");
    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Nom</label>
                    <input type="text"
                        value={nom}
                        onChange={e => setNom(e.target.value)} />
                    {/* {nom.length < 4 ? "name must have 4 chars" : ""} */}
                </div>
                <div>
                    <label>Age</label>
                    <input type="text"
                        value={age}
                        onChange={e => setAge(e.target.value)} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                </div>
                <button style={{ background: "blue", color: "white" }}>
                    Ajouter
                </button>
            </form>
        </>
    )
}
