// routes/favoritesRouter.js
import express from 'express';
import { addFavorite, getFavoritesByCustomer,removeFavorite } from '../controller/favoritesController.js';

const favoritesRouter = express.Router();

// Định nghĩa các route
favoritesRouter.post('/', addFavorite);
favoritesRouter.get('/customer/:makhachhang', getFavoritesByCustomer);
favoritesRouter.delete('/remove/:masanpham/:makhachhang', removeFavorite);

export default favoritesRouter;
