import jwt from 'jsonwebtoken';

import { config } from '../Config';

export const generateToken = (data: string) => {
    return jwt.sign(data, config.jwtSecret);
};
