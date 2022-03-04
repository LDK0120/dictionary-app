import React, {useContext} from "react"
import {Context} from "./Context"

export default function MyList() {

    const [state, setState] = useContext(Context)

    function handleClick(event) {
        const id = event.target.id
        let myList = []
        let i=0;
        let word= ""

        for(const item of state.myList) {
            if (item.key !== id) {
                myList.push(item)
            } else {
                word = item.word
            }
        }

        for (const item of myList) {
            item.index = i;
            i++;
        }

        setState(state=>({...state, myList:myList}))
        alert(`"${word}" removed from my list`)
        console.log(state.myList)
    }

    return (
        <div>
        <h1>Mylist</h1>


            {state.myList.map(item=> (
                <div className="box" key={item.key}>
                    <h1>{item.word}</h1>
                    <p>{item.grammar}</p>
                    <p>{item.definition}</p>
                    <div>Synonyms: {item.synonyms.map(synonym=>(<p key={synonym}>{synonym}</p>))}</div>
                    <button className="remove" id={item.key} onClick={handleClick}>Remove from My List</button>
                </div>
            ))}

        </div>
    )
}