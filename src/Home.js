import React, { useContext } from "react";
import { Context } from "./Context.js"

export default function Home() {
    const [state, setState] = useContext(Context) 
    return (
        <div>
        <h1>Searched Word:</h1>
        <p>{state.word}</p>
        </div>
    )
}