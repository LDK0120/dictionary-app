import React, { useContext } from "react";
import {Context} from "./Context"

export default function Home() {

    const { word, setWord } = useContext(Context)

function handleSubmit(event) {
    event.preventDefault()
}

function handleChange(event) {
    setWord(event.target.value)
}

    return (
        <div className="Home">
        <h1>Dictionary App</h1>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" placeholder="Search a word" required></input>
            <button>Search</button>
        </form>
        </div>
    )
}