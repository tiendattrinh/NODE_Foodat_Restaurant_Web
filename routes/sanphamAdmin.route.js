import express from 'express';
import sanphamController from '../controller/sanphamAdminController.js';

const sanphamAdminRouter = express.Router();

sanphamAdminRouter.get('/search', sanphamController.searchProducts);
sanphamAdminRouter.post('/', sanphamController.addProduct);
sanphamAdminRouter.put('/:id', sanphamController.updateProduct);
sanphamAdminRouter.delete('/:id', sanphamController.deleteProduct);
sanphamAdminRouter.get('/:id', sanphamController.getProductById);
sanphamAdminRouter.get('/', sanphamController.getProductList);

export default sanphamAdminRouter;
