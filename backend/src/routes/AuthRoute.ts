import { Router } from 'express';

import { AuthController } from '../controllers/AuthController';

export class AuthRoute {
    private router: Router = Router();
    private authController = new AuthController();

    constructor() {
        this.router.get('/', this.authController.getData);
        this.router.get('/currentUser', this.authController.currentUser);
        this.router.post('/signup', this.authController.signup);
        this.router.post('/login', this.authController.login);
        this.router.post('/forgotpassword', this.authController.forgotPassword);
        this.router.post('/resetpassword/:token', this.authController.resetPassword);
    }

    public getRouter(): Router {
        return this.router;
    }
}
