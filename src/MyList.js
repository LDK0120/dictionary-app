import React, {useContext} from "react"
import {Context} from "./Context"

export default function MyList() {

    const [state, setState] = useContext(Context)

    return (
        <div>
        <h1>Mylist</h1>


            {state.myList.map(item=> (
                <div className="box" key={item.key}>
                    <h1>{item.word}</h1>
                    <p>{item.grammar}</p>
                    <p>{item.definition}</p>
                    <div>Synonyms: {item.synonyms.map(synonym=>(<p key={synonym}>{synonym}</p>))}</div>
                    <button className="remove">Remove from My List</button>
                </div>
            ))}

        </div>
    )
}