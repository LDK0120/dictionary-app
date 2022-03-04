import React, {useContext} from "react";
import {Context} from "./Context.js";

export default function List() {

    const [state, setState] = useContext(Context)

    function addToMyList(event) {
        let itemIndex = parseInt(event.target.id)
        let word = state.data[event.target.id].word
        let itemData = state.data[event.target.id]
        let newMyList = state.myList
        let newDataList=[]

        if(itemIndex === "0"){

            if (state.inMyList.includes(word)) {
                alert(`"${word}" already in my list`)
            } else {

            for(const data of state.data) {
                data.index = data.index - 1
                newMyList = state.myList.concat(state.data[event.target.id])
            }

            for(const item of state.data) {
                if (item.index !== -1){
                    newDataList.push(item)
                }
            }
            setState(state=> ({...state, data:newDataList, myList:newMyList, inMyList: [...state.inMyList, word]}))
            alert(`"${word}" added to my list`)
        }
        } else { 

            if (state.inMyList.includes(word)) {
                alert(`"${word}" already in my list`)
            } else {

                alert(`"${word}" added to my list`)

                newMyList = newMyList.concat(itemData)

                for(const item of state.data) {
                if (item.index !== itemIndex){
                    newDataList.push(item)
                }
                }

                for (const list of newDataList) {
                    if(list.index > itemIndex) {
                        list.index = list.index - 1
                    }
                }


                

                setState(state=> ({...state, data:newDataList, myList: newMyList, inMyList: [...state.inMyList, word]}))
        }

        }
            
    }

    function removeFromList(event){
        let itemIndex= parseInt(event.target.id) - 1
        const word = state.data[itemIndex].word
        let newDataList = []
        let i=0;

        for (const item of state.data) {
            if (item.index !== itemIndex) {
                newDataList.push(item)
            }
        }

        for(const item of newDataList) {
            item.index = i;
            i++;
        }

        setState(state=>({...state, data:newDataList}))
        alert(`"${word}" removed from the list`)
    }
    

    if (state.data.length > 0) {

        return (
            <div>
            <h1>List of searched words:</h1>
            {state.data.map(item => (
                <div className="box" key={item.key}>
                    {item.word !== item.searchedWord? <em>Searched word not found. Similar search result:</em> : <span></span>}
                    <h1>{item.word}</h1>
                    <p>{item.grammar}</p>
                    <p>{item.definition}</p>
                    {item.dataReady? <div>Synonyms: {item.synonyms.map(synonym=>(<p key={synonym}>{synonym}</p>))}</div> : <div>no synonym found</div>}
                    <div>
                        <button className="add-to-my-list" id={item.index} onClick={addToMyList}>Add to My List</button>
                        <button className="remove" id={item.index + 1} onClick={removeFromList}>Remove from Search List</button>
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