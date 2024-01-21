
import pool from '../database.js';

const loaihangAdminController = {
  getAllLoaiHang: async (req, res) => {
    try {
      const loaihang = await pool.query('SELECT * FROM loaihang');
      res.json(loaihang);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  getLoaiHangById: async (req, res) => {
    const { id } = req.params;
    try {
      const loaihang = await pool.query('SELECT * FROM loaihang WHERE id = ?', [id]);
      if (loaihang.length > 0) {
        res.json(loaihang[0]);
      } else {
        res.status(404).json({ message: 'Loaihang not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  searchLoaiHang: async (req, res) => {
    const { keyword } = req.query;
    try {
      const loaihang = await pool.query('SELECT * FROM loaihang WHERE ten LIKE ?', [`%${keyword}%`]);
      res.json(loaihang);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  createLoaiHang: async (req, res) => {
    const { ten } = req.body;
    try {
      const result = await pool.query('INSERT INTO loaihang (ten) VALUES (?)', [ten]);
      res.json({ message: 'Loaihang created successfully', loaihangId: result.insertId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  updateLoaiHang: async (req, res) => {
    const { id } = req.params;
    const { ten } = req.body;
    try {
      const result = await pool.query('UPDATE loaihang SET ten = ? WHERE id = ?', [ten, id]);

      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Loaihang not found' });
      } else {
        res.json({ message: 'Loaihang updated successfully' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  deleteLoaiHang: async (req, res) => {
    const { id } = req.params;
    try {
      // Kiểm tra xem có sản phẩm nào thuộc loại hàng cần xóa hay không
      const products = await pool.query('SELECT * FROM sanpham WHERE maloaihang = ? LIMIT 1', [id]);

      if (products[0].length > 0) {
        // Nếu có sản phẩm, trả về thông báo không cho phép xóa
        res.status(200).json({ message: 'Cannot delete the category as it has associated products.' });
      } else {
        // Nếu không có sản phẩm, tiến hành xóa loại hàng
        await pool.query('DELETE FROM loaihang WHERE id = ?', [id]);
        res.json({ message: 'Loaihang deleted successfully' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  
  
};

export default loaihangAdminController;
