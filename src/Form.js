import React, { useContext } from "react"
import { Context } from "./Context.js"
import axios from "axios"

export default function Form() {

    const [state, setState] = useContext(Context)
    const [searchedWord, setSearchedWord] = React.useState("")
    const apiKey = 'ddbc0656-4d77-4ac3-8e25-ab492ce02f2f'
    const apiUrl = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${searchedWord}?key=${apiKey}`

    function handleSubmit(event) {
        event.preventDefault()

        axios.get(apiUrl).then(response =>
            {
            if (response.data[0].meta === undefined) {
                alert("Please check your spelling")
            } else if(response.data[0] === undefined) {
                alert("Please check your spelling")
            } else {

                let newObj = {
                word: response.data[0].meta.id,
                grammar: response.data[0].fl,
                definition: response.data[0].def[0].sseq[0][0][1].dt[0][1],
                synonyms: response.data[0].meta.syns[0],
                key: response.data[0].meta.uuid, 
                dataReady: true
            }

            let newArr = state.data.concat(newObj)


setState(state => ({...state, data: newArr, status: response.statusText, searchedWord: searchedWord}))
        }})


            

        console.log("api called")
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


//when the form gets submitted, I want to make an api call with that searchedWord. Then, I want to save the result in the state.