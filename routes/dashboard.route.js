import express from 'express';
import {
  getDashboardTotalOrders,
  getDashboardTotalRevenue,
  getDashboardTotalProducts,
  getDashboardTotalUsers,
} from '../controller/dashboardController.js';

const router = express.Router();

// router.get('total-month', getStatisMonth)
router.get('/total-orders', getDashboardTotalOrders);
router.get('/total-revenue', getDashboardTotalRevenue);
router.get('/top-products', getDashboardTotalProducts);
router.get('/total-user', getDashboardTotalUsers);

export default router;
