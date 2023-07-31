import './Style.scss';

import axios from 'axios';
import React, { useState } from 'react';

export const Login = () => {
    const [email, setUserEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setUserEmail('');
        setPassword('');
        axios
            .post('http://localhost:3001/user/login', { email, password })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    }
    function handleChangeUserEmail(event: React.ChangeEvent<HTMLInputElement>) {
        setUserEmail(event.target.value.toLowerCase());
    }

    function handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value.toLowerCase());
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
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
                <div className='sign-up'>
                    <a href='http://localhost:1234/signupform' id='signup'>
                        Don't have an account? Click here.
                    </a>
                </div>

                <div>
                    <button type='submit' id='submit'>
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
};
