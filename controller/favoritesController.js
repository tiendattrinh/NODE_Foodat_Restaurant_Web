// controllers/favoritesController.js
import pool from '../database.js';

const addFavorite = async (req, res) => {
  try {
    const { ten, masanpham, makhachhang } = req.body;

    // Kiểm tra nếu sản phẩm đã tồn tại trong danh sách yêu thích của khách hàng
    const existingFavorite = await pool.query(
      'SELECT * FROM danhsachyeuthich WHERE masanpham = ? AND makhachhang = ?',
      [masanpham, makhachhang]
    );

    console.log(existingFavorite)

    if (existingFavorite[0].length > 0) {
      return res.status(200).json({ message: 'Sản phẩm đã tồn tại trong danh sách yêu thích.' });
    }

    // Thêm sản phẩm vào danh sách yêu thích
    await pool.query('INSERT INTO danhsachyeuthich (ten, masanpham, makhachhang) VALUES (?, ?, ?)', [
      ten,
      masanpham,
      makhachhang,
    ]);

    res.status(201).json({ message: 'Sản phẩm đã được thêm vào danh sách yêu thích.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Đã xảy ra lỗi server.' });
  }
};

const getFavoritesByCustomer = async (req, res) => {
  try {
    const { makhachhang } = req.params;

    // Lấy toàn bộ thông tin về sản phẩm và khách hàng từ danh sách yêu thích
    const favorites = await pool.query(
      'SELECT danhsachyeuthich.*, sanpham.ten AS tenSanPham, sanpham.*, khachhang.* ' +
      'FROM danhsachyeuthich ' +
      'JOIN sanpham ON danhsachyeuthich.masanpham = sanpham.id ' +
      'JOIN khachhang ON danhsachyeuthich.makhachhang = khachhang.id ' +
      'WHERE danhsachyeuthich.makhachhang = ?',
      makhachhang
    );

    res.status(200).json(favorites);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Đã xảy ra lỗi server.' });
  }
};



const removeFavorite = async (req, res) => {
    try {
      const { masanpham, makhachhang } = req.params;
  
      // Kiểm tra xem sản phẩm có tồn tại trong danh sách yêu thích hay không
      const existingFavorite = await pool.query(
        'SELECT * FROM danhsachyeuthich WHERE masanpham = ? AND makhachhang = ?',
        [masanpham, makhachhang]
      );
  
      if (existingFavorite.length === 0) {
        return res.status(404).json({ message: 'Sản phẩm không tồn tại trong danh sách yêu thích.' });
      }
  
      // Xóa sản phẩm khỏi danh sách yêu thích
      await pool.query('DELETE FROM danhsachyeuthich WHERE masanpham = ? AND makhachhang = ?', [
        masanpham,
        makhachhang,
      ]);
  
      res.status(200).json({ message: 'Sản phẩm đã được bỏ khỏi danh sách yêu thích.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Đã xảy ra lỗi server.' });
    }
  };

export { addFavorite, getFavoritesByCustomer, removeFavorite };
