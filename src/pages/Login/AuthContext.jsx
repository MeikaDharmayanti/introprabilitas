import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (nisn, password) => {
        // Logika untuk menangani login
        if (nisn === "validNISN" && password === "validPassword") { // Ganti dengan logika autentikasi yang sebenarnya
            setIsLoggedIn(true);
        } else {
            throw new Error("Invalid credentials");
        }
    };

    const logout = () => {
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;