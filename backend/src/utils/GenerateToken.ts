import jwt from 'jsonwebtoken';

import { config } from '../config';

export const generateToken = (data: string) => {
    return jwt.sign(data, config.jwtSecret);
};
