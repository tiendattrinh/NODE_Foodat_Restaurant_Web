// Trong hoadonAdminRoutes.js
import express from 'express';
import {
  createHoadon,
  deleteHoadon,
  searchHoadon,
  getAllHoadon,
  updateTrangthaiHoadon, // Import hàm cập nhật trạng thái
} from '../controller/hoadonAdminController.js';

const router = express.Router();

// Thêm đường dẫn mới cho hàm cập nhật trạng thái
router.put('/:id/updateTrangthai', updateTrangthaiHoadon);
router.post('/', createHoadon);
router.delete('/:id', deleteHoadon);
router.get('/search', searchHoadon);
router.get('/', getAllHoadon);


export default router;
