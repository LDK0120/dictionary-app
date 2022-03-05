import React, {useContext} from "react"
import {Context} from "./Context"

export default function MyList() {

    const [state, setState] = useContext(Context)

    function handleClick(event) {
        
        const id= event.target.id
        let word=""

        for(const item of state.myList) {
            if(item.key === id) {
                word = item.word
            }
        }

        localStorage.removeItem(JSON.stringify(word))
        let myList=[]
        let localKeys = Object.keys(localStorage)
        let j = localKeys.length

        while(j--){
            myList.push(JSON.parse(localStorage.getItem(localKeys[j])))
        }

        setState(state=>({...state, myList:myList}))

    }
    
    return (
        <div className="my-list">


            {state.myList.map(item=> (
                <div className="box" key={item.key}>
                    <div className="buttons"><button className="remove" id={item.key} onClick={handleClick}>Remove from My List</button></div>
                    <h1>{item.word}</h1>
                    <p className="parts">{item.grammar}</p>
                    <p><span className="purple-text">Definition:</span><br /> {item.definition}</p>
                    <div className="syns"><span className="purple-text">Synonyms:</span> {item.synonyms.map(synonym=>(<p key={synonym}>{synonym}</p>))}</div>
                </div>
            ))}

        </div>
    )
}