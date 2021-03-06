import { Router } from 'express';

import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();

routes.get('/orphanages', OrphanagesController.index);
routes.post('/orphanages', OrphanagesController.create);
routes.get('/orphanages/:id', OrphanagesController.show);



export default routes;