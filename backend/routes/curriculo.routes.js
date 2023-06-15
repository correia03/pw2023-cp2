import Router from 'express';
import { salvar, obter } from '../controllers/curriculo.controllers.js';
  import { authRequired } from '../util/jwt.js';
  const curriculoRoutes = Router();
  
  curriculoRoutes.post('/salvar', authRequired, salvar);
  curriculoRoutes.get('/obter',obter);



  export {curriculoRoutes}

