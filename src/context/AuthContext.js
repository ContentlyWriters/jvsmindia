"use client";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    
    let token = localStorage.getItem("token");

    
    const params = new URLSearchParams(window.location.search);
    const urlToken = params.get("token");
    if (urlToken) {
      token = urlToken;
      localStorage.setItem("token", urlToken);
   
      window.history.replaceState({}, document.title, "/");
    }

    if (token) setIsLoggedIn(true);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useUserContext() {
  return useContext(AuthContext);
}
