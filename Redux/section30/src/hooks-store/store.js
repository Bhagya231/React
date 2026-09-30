import { useEffect, useState } from "react";


let globalState = {};
let listeners = [];
let actions = {};


export const useStore = (shouldListen = true) => {
    const setState = useState(globalState)[1];

    console.log('globalState:', globalState);

    const dispatch = (actionIdentifier, payload) => {
        const newState = actions[actionIdentifier](globalState, payload)
        globalState = {...globalState, ...newState};

        for(const listener of listeners)
        {
            listener(globalState);
        }
    }

    useEffect(() => {
        if(shouldListen)
        {
             listeners.push(setState);
        }
       

        return () => {
            if(shouldListen)
            {
                listeners = listeners.filter(li => li !== setState);
            }
            
        }
    },[setState, shouldListen])

    return [globalState, dispatch]
    
}

export const initStore = (userActions, initState) => {
    if(initState)
    {
        globalState = { ...globalState, ...initState };
    }

    actions = { ...actions, ...userActions };
    console.log('AFTER initStore:', globalState);
};