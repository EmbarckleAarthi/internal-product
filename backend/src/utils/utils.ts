import jwt from 'jsonwebtoken';

export const verifyJwt = (token: string, secretKey: string): Promise<unknown> => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                reject(err);
            } else {
                resolve(decoded);
            }
        });
    });
};
