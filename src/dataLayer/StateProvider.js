import React, {useContext, useReducer} from 'react';
import reducer, {initialState} from './reducer';

export const Context = React.createContext();

const StateProvider = ({children})=> {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}


export const useStateValue = () => {
    const {state}= useContext(Context)
    return state;
}

export const useDispatch = () => {
    const {dispatch} = useContext(Context);
    return dispatch;
}

export default StateProvider;