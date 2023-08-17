import './Style.scss';

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'src/utils/Auth';

export const Login = () => {
    const [email, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!passwordRegex.test(password)) {
            console.log(
                'Invalid password (should include at least one uppercase letter, one numeric digit, and one special character)'
            );
            return;
        }

        axios
            .post('/auth/login', { email, password }, { withCredentials: true })
            .then((res) => {
                auth.setIsLoggedIn(true);
                navigate('/dashboard', {
                    state: { username: res.data.username, role: res.data.role, id: res.data.id },
                });
            })
            .catch((err) => console.log(err));
    }

    function handleChangeUserEmail(event: React.ChangeEvent<HTMLInputElement>) {
        setUserEmail(event.target.value);
    }

    function handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    return (
        <div className='container'>
            <form className='form-container' onSubmit={handleSubmit}>
                <div className='username'>
                    <label htmlFor='email'></label>
                    <input
                        id='username'
                        type='text'
                        value={email}
                        placeholder='Email'
                        onChange={handleChangeUserEmail}
                    ></input>
                </div>
                <div className='password'>
                    <label htmlFor='password'></label>
                    <input
                        id='password'
                        type='password'
                        value={password}
                        placeholder='Password'
                        onChange={handleChangePassword}
                    ></input>
                </div>
                <div className='forgot-password'>
                    <a href='http://localhost:1234/forgotpassword' id='forgotpassword'>
                        Forgot password?
                    </a>
                </div>
                {/* <div className='sign-up'>
                    <a href='http://localhost:1234/signupform' id='signup'>
                        Don't have an account? Click here.
                    </a>
                </div> */}

                <div>
                    <button type='submit' id='submit'>
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
};
