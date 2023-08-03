import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Dashboard: React.FC = () => {
    const location = useLocation();

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            axios
                .get('http://localhost:3000/auth/currentUser')
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
        }, 3000);
    }, []);

    const handleEditProfileClick = () => {
        navigate('/editprofile'); 
    }
    return (
        <div>
            <h1>Welcome {location.state.username}</h1>
            <button id='editprofile-button' onClick={handleEditProfileClick}>Edit Profile</button>
        </div>
    );
}

