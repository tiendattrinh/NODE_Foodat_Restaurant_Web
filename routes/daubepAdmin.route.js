// daubepRouter.js
import express from 'express';
import daubepController from '../controller/daubepAdminController.js';

const daubepAdminRouter = express.Router();

daubepAdminRouter.get('/search', daubepController.searchDaubep);
daubepAdminRouter.post('/', daubepController.addDaubep);
daubepAdminRouter.put('/:id', daubepController.updateDaubep);
daubepAdminRouter.delete('/:id', daubepController.deleteDaubep);
daubepAdminRouter.get('/:id', daubepController.getDaubepById);
daubepAdminRouter.get('/', daubepController.getAllDaubep);

export default daubepAdminRouter;
