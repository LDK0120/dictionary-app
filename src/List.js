import React, {useContext} from "react";
import {Context} from "./Context.js";

export default function List() {

    const [state, setState] = useContext(Context)

    function addToMyList(event) {
        console.log(event.target.id)

        let newListItem = state.data[event.target.id]
        console.log(newListItem)
        let newList = state.myList.concat(newListItem)

        setState(state=> ({...state, myList: newList}))

    }

    if (state.data.length > 0) {

        return (
            <div>
            <h1>List of searched words:</h1>
            {state.data.map(item => (
                <div className="box" key={item.key}>
                    {item.word !== item.searchedWord? <em>Searched word not found. Similar search result:</em> : <span></span>}
                    <p>{item.index}</p>
                    <h1>{item.word}</h1>
                    <p>{item.grammar}</p>
                    <p>{item.definition}</p>
                    {item.dataReady? <div>Synonyms: {item.synonyms.map(synonym=>(<p key={synonym}>{synonym}</p>))}</div> : <div>no synonym found</div>}
                    <div>
                        <button className="add-to-my-list" id={item.index} onClick={addToMyList}>Add to My List</button>
                        <button className="remove">Remove from Search List</button>
                    </div>
                </div>
            ))}

            </div>
        )

    } else {
        return (
            <h1>List of searched words:</h1>
        )
    }
}