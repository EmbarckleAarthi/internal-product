import nodemailer, { SendMailOptions, Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

import { config } from '../config';

export class MailService {
    private transporter: Transporter<SMTPTransport.SentMessageInfo>;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: config.mail.service,
            auth: {
                user: config.mail.username,
                pass: config.mail.password,
            },
        });
    }
    public async sendMail(options: SendMailOptions): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.transporter.sendMail(options, (error, _info) => {
                if (error) {
                    reject(false);
                }

                resolve(true);
            });
        });
    }
}
