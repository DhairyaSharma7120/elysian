import {createContext,useReducer} from 'react'

const initialState = {
    user: {
        name:"dhairya"
    }

};
const store = createContext(initialState);
const {Provider} = store;



const UPDATE_NAME = "UPDATE_NAME"
const StateProvider = ({children}) =>{
    const [state, dispatch] = useReducer((state,action) => {
        switch (action.type) {
            case UPDATE_NAME:
              return {
                user: action.payload,
              };
            default:
                return state;
        }

    
    } , initialState);
 
    
    return <Provider value={{state, dispatch}}>{children}</Provider>
}

export { store, StateProvider }