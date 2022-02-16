import dotenv from 'dotenv';

import './src/database';

import express from 'express';

import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users', userRoutes);
  }
}

// Exportando nosso atributo app(express) com nossa classe App estânciada
export default new App().app;
