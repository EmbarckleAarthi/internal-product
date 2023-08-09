import './App.scss';

import axios from 'axios';
import React from 'react';

import { config } from './Config';
import { Pages } from './Pages';

axios.defaults.baseURL = config.baseUrl;

export const App: React.FC = () => {
    return (
        <div>
            <h2>Onboarding</h2>
            <Pages />
        </div>
    );
};
