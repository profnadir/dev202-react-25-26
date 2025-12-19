import React, { useState } from 'react'

export default function MessageF() {

    const [msg, setMsg] = useState("bienvenue visiteur");
    const [msgBtn, setMsgBtn] = useState("inscription");

    const [counter, setCounter] = useState(0);

    const inscription = function () {
        setMsg("votre inscription est effectuée");
        setMsgBtn("merci");
    }

    const inc = () => {
        setCounter(counter+1)
    }

    const dec = () => {
        setCounter(counter-1)
    }

    return (
        <div>
            <h1>Function</h1>
            <p>{msg}</p>
            <button onClick={inscription}>{msgBtn}</button>

            <br />
            <br />
            <br />
            <span>{counter}</span> <br />
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
    )

}
