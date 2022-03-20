import {useState} from "react";
import LoadingContext from "./Context";

const Provider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    return (
        <LoadingContext.Provider value={{ loading, setLoading}}>
            {children}
        </LoadingContext.Provider>
    );
};

export default Provider;