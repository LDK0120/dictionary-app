import React, {useState, useMemo} from "react";
import axios from "axios";

const Context = React.createContext({
    word: '',
    setWord: () => {}
});

function ContextProvider({children}) {

    const [word,setWord] = useState('')
  const value = useMemo(
    () => ({ word, setWord}), [word]
  )

let url = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=ddbc0656-4d77-4ac3-8e25-ab492ce02f2f`

// function handleData(response) {
//     console.log(response.data)
// }
//axios.get(url).then(handleData)

return (

        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )

}

export {ContextProvider, Context}
