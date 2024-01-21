// routes/promotionRouter.js
import express from 'express';
import {
  addPromotion,
  updatePromotion,
  deletePromotion,
  getPromotionById,
  getAllPromotions,
  searchPromotions,
  addPromotionProducts
} from '../controller/promotionController.js';

const promotionRouter = express.Router();

promotionRouter.get('/search', searchPromotions);
promotionRouter.post('/addProduct', addPromotionProducts);
promotionRouter.post('/', addPromotion);
promotionRouter.put('/:id', updatePromotion);
promotionRouter.delete('/:id', deletePromotion);
promotionRouter.get('/:id', getPromotionById);
promotionRouter.get('/', getAllPromotions);

export default promotionRouter;
