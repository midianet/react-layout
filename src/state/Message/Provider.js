import React, { useReducer } from "react";
import MessageContext from "./Context";
import messageReducer from "./reducer"

const Provider = ({ children }) => {
    const [message, messageDispatch] = useReducer(messageReducer);
    return (
        <MessageContext.Provider value={{ message, messageDispatch }}>
            {children}
        </MessageContext.Provider>
    );
};

export default Provider;