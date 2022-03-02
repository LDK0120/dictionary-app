import React, { useContext } from "react";
import { Context } from "./Context.js"

export default function Home() {
    const [state, setState] = useContext(Context) 
    let wordToSearch = state.word
    const apiKey = 'ddbc0656-4d77-4ac3-8e25-ab492ce02f2f'
    const apiUrl = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${wordToSearch}?key=${apiKey}`

    console.log(wordToSearch)
    console.log(apiUrl)
    return (
        <div>
        <h1>Searched Word:</h1>
        <p>{state.word}</p>
        </div>
    )
}