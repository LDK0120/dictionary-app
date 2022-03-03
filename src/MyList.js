import React, {useContext} from "react"
import {Context} from "./Context"

export default function MyList() {

    const [state, setState] = useContext(Context)
    return (
        <div>
        <h1>Mylist</h1>
            {state.myList.map(item=><p key={item.key}>{item.word}</p>)}
        </div>
    )
}