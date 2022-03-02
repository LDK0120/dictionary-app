import React, {useContext} from "react"
import { Context } from "./Context.js"

export default function Form() {

    const [state, setState] = useContext(Context) //to access, update Context's state.

    const [searchedWord, setSearchedWord] = React.useState("")

    function handleSubmit(event) {
        event.preventDefault()
        setState(state => ({...state, word: searchedWord}))
    }

    function handleChange(event) {
        setSearchedWord(event.target.value)
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={searchedWord} placeholder="Search a word" required></input>
            <button>Search</button>
        </form>
    )
}