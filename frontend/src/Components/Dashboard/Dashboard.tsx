import axios from 'axios';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from 'src/utils/Auth';

export const Dashboard: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const auth = useAuth();
    const handleLogOut = () => {
        axios
            .get('/auth/logout')
            // .then(() => auth.setIsLoggedIn(false))
            .then(() => navigate('/'))
            .catch((err) => console.log(err));
    };
    const handleAddUser = () => {
        navigate('/signupform');
    };

    const handleEdit = () => {
        navigate('/editprofile');
    };

    const handledata = () => {
        const id = 'EE0000045';
        axios
            .get(`/user/getuserdata/${id}`)
            .then((res) => console.log(res.data.basic))
            .catch((err) => console.log(err));
    };
    return (
        <div>
            <h1>Welcome {location.state.username}</h1>
            <button onClick={handleLogOut}>Logout</button>
            {location.state.role === 'admin' ? <button onClick={handleAddUser}>Add user</button> : <></>}
            <button onClick={handleEdit}>Edit profile</button>
            <button onClick={handledata}>getdata</button>
        </div>
    );
};
