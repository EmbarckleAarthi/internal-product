import dotenv from 'dotenv';

if (dotenv) dotenv.config();

export const config = {
    baseUrl: process.env.REACT_APP_END_POINT,
};
