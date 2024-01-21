// sanphamController.js
import pool from '../database.js';

const sanphamController = {
  addProduct: async (req, res) => {
    try {
      const sanphamData = req.body;
      const result = await pool.query(
        'INSERT INTO sanpham (mota, ten, hinhanh, dongia, tinhtrang, maloaihang) VALUES (?, ?, ?, ?, ?, ?)',
        [
          sanphamData.mota,
          sanphamData.ten,
          sanphamData.hinhanh,
          sanphamData.dongia,
          sanphamData.tinhtrang,
          sanphamData.maloaihang,
        ]
      );

      res.json({ message: 'Product added successfully', productId: result.insertId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  updateProduct: async (req, res) => {
    const { id } = req.params;
    const sanphamData = req.body;
  
    // Kiểm tra xem 'hinhanh' có tồn tại trong đối tượng 'sanphamData' hay không
    const hasHinhanh = 'hinhanh' in sanphamData;
  
    try {
      let result;
  
      if (hasHinhanh) {
        // Nếu 'hinhanh' tồn tại, thực hiện truy vấn cập nhật đầy đủ
        result = await pool.query(
          'UPDATE sanpham SET mota = ?, ten = ?, hinhanh = ?, dongia = ?, tinhtrang = ?, maloaihang = ?, makhuyenmai = ? WHERE id = ?',
          [
            sanphamData.mota,
            sanphamData.ten,
            sanphamData.hinhanh,
            sanphamData.dongia,
            sanphamData.tinhtrang,
            sanphamData.maloaihang,
            sanphamData.makhuyenmai, 
            id
          ]
        );
      } else {
        // Nếu 'hinhanh' không tồn tại, chỉ cập nhật các trường khác
        result = await pool.query(
          'UPDATE sanpham SET mota = ?, ten = ?, dongia = ?, tinhtrang = ?, maloaihang = ?, makhuyenmai = ? WHERE id = ?',
          [
            sanphamData.mota,
            sanphamData.ten,
            sanphamData.dongia,
            sanphamData.tinhtrang,
            sanphamData.maloaihang,
            sanphamData.makhuyenmai, 
            id
          ]
        );
      }
  
      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Product not found' });
      } else {
        res.json({ message: 'Product updated successfully' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  deleteProduct: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await pool.query('DELETE FROM sanpham WHERE id = ?', [id]);

      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Product not found' });
      } else {
        res.json({ message: 'Product deleted successfully' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  getProductById: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await pool.query(`
        SELECT sanpham.*, loaihang.ten AS loaihang_ten
        FROM sanpham
        JOIN loaihang ON sanpham.maloaihang = loaihang.id
        WHERE sanpham.id = ?
      `, [id]);

      if (result.length > 0) {
        res.json(result[0]);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  getProductList: async (req, res) => {
    try {
      const result = await pool.query(`
        SELECT sanpham.*, loaihang.ten AS loaihang_ten, khuyenmai.phantramkhuyenmai, khuyenmai.thoigianBD, khuyenmai.thoigianKT
        FROM sanpham
        JOIN loaihang ON sanpham.maloaihang = loaihang.id
        LEFT JOIN khuyenmai ON sanpham.makhuyenmai = khuyenmai.id
      `);
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  

  searchProducts: async (req, res) => {
    const { keyword } = req.query;
    try {
      const result = await pool.query('SELECT * FROM sanpham WHERE ten LIKE ?', [`%${keyword}%`]);
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
};

export default sanphamController;
