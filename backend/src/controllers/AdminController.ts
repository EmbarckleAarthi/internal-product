import { Request, Response } from 'express';

import { AdminService } from '../services/AdminService';

export class AdminController {
    private adminService!: AdminService;

    constructor() {
        this.adminService = new AdminService();
    }

    public getUsers = async (req: Request, res: Response) => {
        const users = await this.adminService.getUsers();
        if (users) {
            res.send(users);
        } else {
            res.send('data not found');
        }
    };
}
