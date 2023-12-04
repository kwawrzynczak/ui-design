import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, isLogged, setIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
