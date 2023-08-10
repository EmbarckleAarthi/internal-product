import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Resetpassword = () => {
    const [pass, setPass] = useState('');
    const [confirmpass, setConfirmpass] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setPass('');
        setConfirmpass('');

        if (pass !== confirmpass) {
            setError('Passwords do not match.');
            return;
        }
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        let isValidPassword = true;
        if (!passwordRegex.test(pass)) {
            setError(
                'Invalid password (should include at least one uppercase letter, one numeric digit, and one special character)'
            );
            isValidPassword = false;
        }

        if (isValidPassword) {
            const urlParams = new URLSearchParams(window.location.search);
            const token = urlParams.get('token');
            console.log(token, 'frontend');

            axios
                .post(`/auth/resetpassword/${token}`, {
                    password: pass,
                    confirmpassword: confirmpass,
                })
                .then((res) => {
                    console.log(res.data);
                    navigate('/');
                })
                .catch((err) => console.log(err));
        }
    }
    function handleChangePass(event: React.ChangeEvent<HTMLInputElement>) {
        setPass(event.target.value);
    }
    function handleChangeConfirmpass(event: React.ChangeEvent<HTMLInputElement>) {
        setConfirmpass(event.target.value);
    }

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <div className='restpassword'>
                <label htmlFor='pass'></label>
                <input
                    id='resetpass1'
                    name='password'
                    type='password'
                    value={pass}
                    placeholder='New Password'
                    onChange={handleChangePass}
                ></input>
            </div>
            <div className='confirmpassword'>
                <label htmlFor='confirmpass'></label>
                <input
                    id='resetpass2'
                    name='password'
                    type='password'
                    value={confirmpass}
                    placeholder='Confirm Password'
                    onChange={handleChangeConfirmpass}
                ></input>
            </div>
            {error && <div className='error'>{error}</div>} {/* Display error if present */}
            <div className='button'>
                <button type='submit' id='reset-button'>
                    Reset Password
                </button>
            </div>
        </form>
    );
};
