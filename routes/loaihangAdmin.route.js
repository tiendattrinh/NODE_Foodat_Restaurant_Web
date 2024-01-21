// loaihangRouter.js

import express from 'express';
import loaihangController from '../controller/loaihangAdminController.js';

const loaihangAdminRouter = express.Router();

loaihangAdminRouter.get('/search', loaihangController.searchLoaiHang);
loaihangAdminRouter.get('/', loaihangController.getAllLoaiHang);
loaihangAdminRouter.get('/:id', loaihangController.getLoaiHangById);
loaihangAdminRouter.post('/', loaihangController.createLoaiHang);
loaihangAdminRouter.put('/:id', loaihangController.updateLoaiHang);
loaihangAdminRouter.delete('/:id', loaihangController.deleteLoaiHang);

export default loaihangAdminRouter;
