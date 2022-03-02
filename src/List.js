import React, {useContext} from "react";
import {Context} from "./Context.js";

export default function List() {

    const [state] = useContext(Context)

    if (state.data !== undefined) {

        if (state.data.word === state.searchedWord) {
            return (
        <div>
        <h1>List of searched words:</h1>
            <div className="box">
                <h1>{state.data.word}</h1>
                <p>{state.data.grammar}</p>
                <p>{state.data.definition}</p>
                {state.dataReady? <div>Synonyms: {state.data.synonyms.map(synonym => (<p key={synonym}>{synonym}</p>))}</div> : <p>No searched word</p>}
        </div>
        </div>
    )
        } else if (state.data.word !== state.searchedWord) {
            return (
        <div>
        <h1>List of searched words:</h1>
            <div className="box">
                <em>Searched word could not be found. Here is a similar search:</em>
                <h1>{state.data.word}</h1>
                <p>{state.data.grammar}</p>
                <p>{state.data.definition}</p>
                {state.dataReady? <div>Synonyms: {state.data.synonyms.map(synonym => (<p key={synonym}>{synonym}</p>))}</div> : <p>No searched word</p>}
        </div>
        </div>
    )
        }

} else {
        return (
            <h1>List of searched words:</h1>
        )
    }
}