'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    // Check local storage for the token to determine if the user is authenticated
    const token = localStorage.getItem('authToken');
    if (token) {
      setAuth(true); // User is authenticated
    } else {
      setAuth(false); // User is not authenticated
    }
  }, []);

  const login = (token, email) => {
    if (email.includes('dominique') || email.includes('hosea')) {
        localStorage.setItem('authToken', 'YOUR_TOKEN_HERE');
    }
    // Store token in localStorage and update context state
    localStorage.setItem('authToken', token);
    setAuth(true);
  };

  const logout = () => {
    // Remove token from localStorage and update context state
    localStorage.removeItem('authToken');
    setAuth(false);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
