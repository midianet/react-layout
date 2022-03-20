import { useState } from "react";
import AlertContext from "./Context";

const Provider = ({ children }) => {
  const [message, setMessage] = useState(null);
  return (
      <AlertContext.Provider value={{message,setMessage}}>
          {children}
      </AlertContext.Provider>
  );
};

export default Provider;