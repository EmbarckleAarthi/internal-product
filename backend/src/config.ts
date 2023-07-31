import dotenv from 'dotenv';

if (dotenv) dotenv.config();

export const config = {
    port: process.env.PORT || 3000,
    database: {
        host: process.env.DATABASE_HOST || '',
        port: parseInt(process.env.DATABASE_PORT || '3306'),
        username: process.env.DATABASE_USERNAME || '',
        password: process.env.DATABASE_PASSWORD || '',
        db: process.env.DATABASE_NAME || '',
    },
    mail: {
        service: process.env.MAIL_SERVICE || '',
        username: process.env.MAIL_AUTH_USERNAME || '',
        password: process.env.MAIL_AUTH_PASSWORD || '',
    },
    jwtSecret: process.env.SECRET || 'secret',
};
