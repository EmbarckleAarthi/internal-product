import { Router } from 'express';

import { UserController } from '../controllers/UserController';

export class UserRoute {
    private router: Router = Router();
    private userController = new UserController();

    constructor() {
        this.router.post('/profiledata', this.userController.profileData);
        this.router.get('/getuserdata/:id', this.userController.getUserData);
    }

    public getRouter(): Router {
        return this.router;
    }
}
