import React, { useState } from "react";
import axios from "axios";
import List from "./List";
import Form from "./Form";

export default function Home() {
    const [result, setResult] = useState({ready: false})
    const apiKey = 'ddbc0656-4d77-4ac3-8e25-ab492ce02f2f'
    const apiUrl = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/word?key=${apiKey}`

    function handleResponse(response) {

     setResult({
            word: response.data[0].meta.id,
            grammar: response.data[0].fl,
            definition: response.data[0].def[0].sseq[0][0][1].dt[0][1],
            synonyms: response.data[0].meta.syns[0],
            ready: true
        })    }


    if(result.ready) {
        return (
            <div>
                <Form />
                <h1>Example:</h1>
                    <div className="box">
                        <h1>{result.word}</h1>
                        <p>{result.grammar}</p>
                        <p>Definition: {result.definition}</p>
                        <div>Synonyms: {result.synonyms.map(synonym => (<p key={synonym}>{synonym}</p>))}</div>
                    </div>

                    <List />
            </div>
        )
    } else {
        axios.get(apiUrl).then(handleResponse)
        return (
            <div className="box">
                <Form />
                <h1>Example Loading...</h1>
            </div>
        )
    }
}


       