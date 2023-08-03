import dotenv from 'dotenv';

if (dotenv) dotenv.config();

export const config = {
    port: process.env.PORT || 3001,
    database: {
        host: process.env.DATABASE_HOST || '192.168.29.212',
        port: parseInt(process.env.DATABASE_PORT || '3307'),
        username: process.env.DATABASE_USERNAME || 'keerthana',
        password: process.env.DATABASE_PASSWORD || 'Embarckle@2020',
        db: process.env.DATABASE_NAME || 'Onboarding',
    },
    mail: {
        service: process.env.MAIL_SERVICE || 'gmail',
        username: process.env.MAIL_AUTH_USERNAME || 'vigilaakennedy@gmail.com',
        password: process.env.MAIL_AUTH_PASSWORD || 'gmhekehkmchvybtw',
    },
    jwtSecret: process.env.SECRET || 'secret',
};
