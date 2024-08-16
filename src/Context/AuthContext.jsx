import { createContext } from "react";

const AuthContexts = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthContext = ({ children }) => {
  const value = {

    
  };

  return (
    <AuthContexts.Provider value={value}>{children}</AuthContexts.Provider>
  );
};

export default AuthContext;
