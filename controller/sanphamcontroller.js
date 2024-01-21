// Import necessary modules
import pool from '../database.js';

const sanphamController = {
  getAll: async (req, res) => {
    try {
      // Write the query for getSanPham directly in the controller
      const data = await pool.query(`
        SELECT sanpham.*, loaihang.ten AS loaihang_ten, khuyenmai.phantramkhuyenmai, khuyenmai.thoigianBD, khuyenmai.thoigianKT
        FROM sanpham
        JOIN loaihang ON sanpham.maloaihang = loaihang.id
        LEFT JOIN khuyenmai ON sanpham.makhuyenmai = khuyenmai.id
      `);

      res.json({ 
        message: "ok", 
        data: data    
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal Server Error",
        error: error.message
      });
    }
  },

  getDataFilter: async (req, res) => {
    try {
      const { loaihang } = req.params; // Assuming your route parameter is named 'loaihang'
      // Write the query for filterSanPham directly in the controller
      const [rows, fields] = await pool.query(`
        SELECT sanpham.*, loaihang.ten AS tenLoaiHang, khuyenmai.phantramkhuyenmai AS phantramkhuyenmai 
        FROM sanpham 
        JOIN loaihang ON sanpham.maloaihang = loaihang.id
        LEFT JOIN khuyenmai ON sanpham.makhuyenmai = khuyenmai.id
        WHERE loaihang.id = ?
      `, [loaihang]);

      res.json({
        message: "ok",
        data: rows
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal Server Error",
        error: error.message
      });
    }
  }
};

export default sanphamController;
