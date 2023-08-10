import './style.scss';

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { INewUser } from '../../../../common/interface';

export const Signupform: React.FC = () => {
    const [newuser, setNewUser] = useState<INewUser>({
        username: '',
        employee_id: '',
        email: '',
        password: '',
        role: '',
    });
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!newuser.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newuser.email)) {
            console.log('Invalid email');
            return;
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!passwordRegex.test(newuser.password)) {
            console.log(
                'Invalid password (should include at least one uppercase letter, one numeric digit, and one special character)'
            );
            return;
        }

        axios
            .post(`/auth/signup`, newuser)
            .then((res) => console.log(res.data))
            .then(() => navigate('/'))
            .catch((err) => console.log(err));
    };

    return (
        <div className='container'>
            <form className='form-container' onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={newuser.username}
                    placeholder='Username'
                    onChange={(e) => setNewUser({ ...newuser, username: e.target.value })}
                />
                <input
                    type='text'
                    value={newuser.employee_id}
                    placeholder='EmployeeId'
                    onChange={(e) => setNewUser({ ...newuser, employee_id: e.target.value })}
                />
                <input
                    type='text'
                    value={newuser.email}
                    placeholder='Email'
                    onChange={(e) => setNewUser({ ...newuser, email: e.target.value })}
                />
                <input
                    type='password'
                    value={newuser.password}
                    placeholder='Password'
                    onChange={(e) => setNewUser({ ...newuser, password: e.target.value })}
                />
                <input
                    type='text'
                    value={newuser.role}
                    placeholder='Role'
                    onChange={(e) => setNewUser({ ...newuser, role: e.target.value })}
                />
                <button>Sign up user</button>
            </form>
        </div>
    );
};
