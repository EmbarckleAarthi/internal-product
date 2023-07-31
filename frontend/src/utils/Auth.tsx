import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext<{
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}>({
    isLoggedIn: false,
    setIsLoggedIn: function (): void {
        throw new Error('Function not implemented.');
    },
});

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    // useEffect(() => {
    //     axios
    //         .get('http://localhost:3000/auth/currentUser', { withCredentials: true })
    //         .then((res) => {
    //             setIsLoggedIn(res.data.loggedIn);

    //             navigate('/dashboard', { state: { username: res.data.username } });
    //             console.log(res.data.loggedIn);
    //         })
    //         .catch((err) => console.log(err));
    // }, []);

    return <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
