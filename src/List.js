import React, {useContext} from "react";
import {Context} from "./Context.js";

export default function List() {

    const [state, setState] = useContext(Context)

    function addToMyList(event) {
        console.log(state.data.length)
        let newListItem = state.data[event.target.id]
        let word = newListItem.word

        for (const item of state.inMyList) {
            console.log(item)
            if(word === item) {
                alert(`${word} already in my list`)
            }
        }

        let newList = state.myList.concat(newListItem)

        let newDataList = state.data.splice((event.target.id -1),1)

        for (const item of newDataList) {
            item.index = item.index - 1

            if(item.index < 0) {
                newDataList = []
            }
        }

        setState(state=> ({...state, data: newDataList, myList: newList, inMyList: [...state.inMyList, word]}))
        console.log(state.data.length)
        alert(`"${word}" added to My List`)
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