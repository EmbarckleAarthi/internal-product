import cors from 'cors';
import express, { Express } from 'express';

import { config } from './Config';
import { routes } from './RouterConfig';

export class App {
    private app: Express;

    constructor() {
        this.app = express();

        this.initMiddlewares();
        this.initRoutes();
    }

    private initMiddlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    private initRoutes() {
        // Initialize the routers
        routes.forEach((config) => {
            this.app.use(config.router.getRouter());
        });
    }

    public start() {
        this.app.listen(config.port, () => {
            console.log(`🚀 App is live on http://localhost:${config.port}`);
        });
    }

    public getAppInstance(): Express {
        return this.app;
    }
}
