import React , {useReducer} from "react";
import LoadingContext from "./Context";
import loadingReducer from "./reducer"

const Provider = ({ children }) => {
    const [loading, loadingDispatch] = useReducer(loadingReducer)
    return (
        <LoadingContext.Provider value={{ loading, loadingDispatch}}>
            {children}
        </LoadingContext.Provider>
    );
};

export default Provider;