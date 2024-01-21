// controllers/promotionController.js
import pool from '../database.js';

const addPromotion = async (req, res) => {
  try {
    const { phantramkhuyenmai, thoigianBD, thoigianKT } = req.body;

    // Thêm khuyến mãi mới
    await pool.query('INSERT INTO khuyenmai (phantramkhuyenmai, thoigianBD, thoigianKT) VALUES (?, ?, ?)', [
      phantramkhuyenmai,
      thoigianBD,
      thoigianKT,
    ]);

    res.status(201).json({ message: 'Khuyến mãi đã được thêm.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Đã xảy ra lỗi server.' });
  }
};

const updatePromotion = async (req, res) => {
  try {
    const { id } = req.params;
    const { phantramkhuyenmai, thoigianBD, thoigianKT } = req.body;

    // Cập nhật thông tin khuyến mãi
    await pool.query(
      'UPDATE khuyenmai SET phantramkhuyenmai = ?, thoigianBD = ?, thoigianKT = ? WHERE id = ?',
      [phantramkhuyenmai, thoigianBD, thoigianKT, id]
    );

    res.status(200).json({ message: 'Khuyến mãi đã được cập nhật.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Đã xảy ra lỗi server.' });
  }
};

const deletePromotion = async (req, res) => {
  try {
    const { id } = req.params;

    // Xóa khuyến mãi
    await pool.query('DELETE FROM khuyenmai WHERE id = ?', [id]);

    res.status(200).json({ message: 'Khuyến mãi đã được xóa.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Đã xảy ra lỗi server.' });
  }
};

const getPromotionById = async (req, res) => {
  try {
    const { id } = req.params;

    // Lấy thông tin khuyến mãi theo ID
    const promotion = await pool.query('SELECT * FROM khuyenmai WHERE id = ?', [id]);

    res.status(200).json(promotion[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Đã xảy ra lỗi server.' });
  }
};

const getAllPromotions = async (req, res) => {
  try {
    // Lấy tất cả thông tin về khuyến mãi
    const promotions = await pool.query('SELECT * FROM khuyenmai');

    res.status(200).json(promotions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Đã xảy ra lỗi server.' });
  }
};

const searchPromotions = async (req, res) => {
  try {
    const { keyword } = req.query;

    // Tìm kiếm khuyến mãi theo từ khóa
    const searchResults = await pool.query('SELECT * FROM khuyenmai WHERE phantramkhuyenmai LIKE ?', [
      `%${keyword}%`,
    ]);

    res.status(200).json(searchResults);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Đã xảy ra lỗi server.' });
  }
};

const addPromotionProducts = async (req, res) => {
  try {
    const { idKhuyenMai, masanpham } = req.body;


    await pool.query('UPDATE sanpham SET idkhuyenmai = ? WHERE masanpham = ?', [idKhuyenMai, masanpham]);

    res.status(201).json({ message: 'Khuyến mãi đã được thêm.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Đã xảy ra lỗi server.' });
  }
};


export {
  addPromotion,
  updatePromotion,
  deletePromotion,
  getPromotionById,
  getAllPromotions,
  searchPromotions,
  addPromotionProducts
};
