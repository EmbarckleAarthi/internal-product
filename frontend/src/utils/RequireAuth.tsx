import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from './Auth';

export const Requireauth: React.FC = () => {
    const auth = useAuth();

    if (!auth.isLoggedIn) {
        return <Navigate to='/' />;
    }
    return <Outlet />;
};
