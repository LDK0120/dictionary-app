import React, {useContext} from "react";
import {Context} from "./Context.js";

export default function List() {

    const [state] = useContext(Context)

    if (state.data.length > 0) {
        return (
            <div>
            <h1>List of searched words: </h1>
            <p>loading...</p>
            <p>{state.data.length}</p>
            </div>
        )
        
    //     if (state.data.word === state.searchedWord) {
    //         return (
    //     <div>
    //     <h1>List of searched words:</h1>

    //             {state.data.map(item=> (
    //                 <div className="box">
    //                     <h1>{item.word}</h1>
    //                     <p>{item.grammar}</p>
    //                     <p>{item.definition}</p>
    //                     {item.dataReady? <div>Synonyms: {item.synonyms.map(synonym => (<p key={synonym}>{synonym}</p>))}</div> : <p>No searched word</p>}
    //                 </div>
    //         ))}
    //     </div>
    // )
    //     } 

// if () {

// } else {
//             return (
//         <div>
//         <h1>List of searched words:</h1>

//              {state.data.map(item=> (
//                     <div className="box">
//                         <em>Searched word could not be found. Here is a similar search:</em>
//                         <h1>{item.word}</h1>
//                         <p>{item.grammar}</p>
//                         <p>{item.definition}</p>
//                         {item.dataReady? <div>Synonyms: {item.synonyms.map(synonym => (<p key={synonym}>{synonym}</p>))}</div> : <p>No searched word</p>}
//                     </div>
//             ))}
//         </div>
//     )
//         }

    } else {
        return (
            <h1>List of searched words:</h1>
        )
    }
}