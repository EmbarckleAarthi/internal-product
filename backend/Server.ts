import dotenv from 'dotenv';

import { App } from './src';

if (dotenv) dotenv.config();

const Server = new App();
Server.start();
