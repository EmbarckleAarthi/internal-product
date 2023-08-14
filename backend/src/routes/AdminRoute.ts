import { Router } from 'express';

import { AdminController } from '../controllers/AdminController';

export class AdminRoute {
    private router: Router = Router();
    private admincontroller = new AdminController();

    constructor() {
        this.router.get('/getusers', this.admincontroller.getUsers);
    }

    public getRouter(): Router {
        return this.router;
    }
}
