import React, { useState } from "react";

const Context = React.createContext([{}, () => {}]);

const ContextProvider = (props) => {

        const [state, setState] = useState({});

        return (
            <Context.Provider value={[state, setState]}>
                {props.children}
            </Context.Provider>

        )
    }

export {Context, ContextProvider}