import { AuthRoute } from './routes';

// Update Router types
export type Routers = AuthRoute;

interface IRoutesConfigurations {
    path: string;
    router: Routers;
}

// Update Route configurations
export const routes: IRoutesConfigurations[] = [
    {
        path: '/auth',
        router: new AuthRoute(),
    },
];
