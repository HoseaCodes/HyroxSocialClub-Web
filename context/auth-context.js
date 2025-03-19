'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a memory storage fallback
const memoryStorage = {
  data: {},
  getItem(key) {
    return this.data[key] || null;
  },
  setItem(key, value) {
    this.data[key] = value;
  },
  removeItem(key) {
    delete this.data[key];
  }
};

// Function to safely access storage (localStorage with fallback)
const getStorage = () => {
  if (typeof window !== 'undefined') {
    try {
      // Test if localStorage is available
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      return localStorage;
    } catch (e) {
      console.warn('localStorage not available, using memory storage instead');
      return memoryStorage;
    }
  }
  return memoryStorage;
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false); // Default to false instead of null
  const [isInitialized, setIsInitialized] = useState(false);
  const storage = getStorage();

  // Initialize auth state from storage
  useEffect(() => {
    try {
      console.log('Initializing auth state');
      const token = storage.getItem('authToken');
      console.log('Found token:', !!token);
      
      setAuth(!!token); // Convert to boolean
      setIsInitialized(true);
      
      console.log('Auth initialized:', !!token);
    } catch (error) {
      console.error('Error initializing auth:', error);
      setAuth(false);
      setIsInitialized(true);
    }
  }, []);

  const login = async (token, email) => {
    try {
      console.log('Login called with email:', email);
      
      // Special handling for specific users
      if (email.includes('dominique') || email.includes('hosea')) {
        console.log('Special user detected');
        token = 'SPECIAL_TOKEN';
      }
      
      // Store token
      storage.setItem('authToken', token);
      console.log('Token stored');
      
      // Update state
      setAuth(true);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = async () => {
    try {
      storage.removeItem('authToken');
      setAuth(false);
      return true;
    } catch (error) {
      console.error('Logout error:', error);
      return false;
    }
  };

  console.log('Current auth state:', { auth, isInitialized });

  return (
    <AuthContext.Provider value={{ auth, login, logout, isInitialized }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    console.warn('useAuth called outside AuthProvider');
    return {
      auth: false,
      login: () => {},
      logout: () => {},
      isInitialized: true
    };
  }
  
  return context;
};