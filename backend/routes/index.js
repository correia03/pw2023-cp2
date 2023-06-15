import Router from 'express';
import { curriculoRoutes } from './curriculo.routes.js';
import { usersRoutes } from './user.routes.js';
const api = Router();
api.use('/users', usersRoutes);
api.use('/curriculo', curriculoRoutes);







export { api };