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

        let prevData=[]; 

        for (const item of state.data) {
            prevData.push(item.word)
        }

        if (prevData.includes(searchedWord)) {
            alert(`"${searchedWord}" already present in the list`)
        } else if (!prevData.includes(searchedWord)) {
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
                searchedWord: searchedWord,
                dataReady: true,
                index: state.data.length
            }

            let newArr = state.data.concat(newObj)


setState(state => ({...state, data: newArr}))
        }})
        }
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
