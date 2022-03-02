import React, { useContext } from "react";
import { Context } from "./Context.js";
import axios from "axios";

export default function Home() {
    const [state, setState] = useContext(Context) 
    
    let wordToSearch = state.word
    const apiKey = 'ddbc0656-4d77-4ac3-8e25-ab492ce02f2f'
    const apiUrl = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${wordToSearch}?key=${apiKey}`

    console.log(state.word)

    function handleResponse(response) {

                console.log("api call made")

            setState(state => ({...state, data: {
                word: response.data[0].meta.id,
                grammar: response.data[0].fl,
                definition: response.data[0].def[0].sseq[0][0][1].dt[0][1],
                synonym: response.data[0].meta.syns[0]
            }, ready: true}))
        }

    if (state.ready) {
        return (
            <div>
                <h1>Searched Words:</h1>
                    <div className="box">
                        <h1>{state.data.word}</h1>
                        <p>{state.data.grammar}</p>
                        <p>Definition: {state.data.definition}</p>
                        <p>Synonyms: {state.data.synonym.map(item => (<p>{item}</p>))}</p>
                    </div>
            </div>
        )
    } else {
        axios.get(apiUrl).then(handleResponse)
        return (
            <div>
                <h1 />
            </div>
        )

    }
    }
    