import { AdminRoute, AuthRoute, UserRoute } from './routes';

// Update Router types
export type Routers = AuthRoute | UserRoute | AdminRoute;

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
    {
        path: '/user',
        router: new UserRoute(),
    },
    {
        path: '/admin',
        router: new AdminRoute(),
    },
];
