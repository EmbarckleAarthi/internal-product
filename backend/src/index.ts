import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Express } from 'express';
import helmet from 'helmet';
import hpp from 'hpp';

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
        // TODO: Remove this after implementing SSL
        const cspDirectives = helmet.contentSecurityPolicy.getDefaultDirectives();
        delete cspDirectives['upgrade-insecure-requests'];
        cspDirectives['script-src'] = ["'self'", "'unsafe-inline'", "'unsafe-eval'"];
        cspDirectives['style-src'] = ["'self'", "'unsafe-inline'", 'fonts.googleapis.com'];
        cspDirectives['img-src'] = ["'self'", 'blob:', 'data:'];

        this.app.use(
            helmet({
                hsts: false,
                contentSecurityPolicy: {
                    directives: cspDirectives,
                },
            })
        );

        this.app.use(hpp());
        this.app.use(express.json());
        this.app.use(cookieParser(config.jwtSecret));
        this.app.use(
            cors({
                credentials: true,
                origin: 'http://localhost:1234',
            })
        );
    }

    private initRoutes() {
        // Initialize the routers
        routes.forEach((config) => {
            this.app.use(config.path, config.router.getRouter());
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
