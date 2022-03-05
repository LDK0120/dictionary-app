import React, { useState } from "react";

const Context = React.createContext([{}, () => {}]);

const ContextProvider = (props) => {

     let localStorageData =[]
    
     let keys = Object.keys(localStorage)
     let values = []
    let i= keys.length;

    if (keys.length >0){
    while(i--) {
        localStorageData.push(JSON.parse(localStorage.getItem(keys[i])))
        values.push(JSON.parse(localStorage.getItem(keys[i].word)))
    }
}

        const [state, setState] = useState({data:[], myList:localStorageData, inMyList: values});

        return (
            <Context.Provider value={[state, setState]}>
                {props.children}
            </Context.Provider>

        )
    }

export {Context, ContextProvider}