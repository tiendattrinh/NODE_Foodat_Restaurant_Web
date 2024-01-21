import pool from '../database.js';

const createHoadon = async (req, res) => {
  const hoadonData = req.body;
  try {
    const result = await pool.query('INSERT INTO hoadon SET ?', hoadonData);
    res.json({ id: result.insertId, message: 'Hoadon created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteHoadon = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM hoadon WHERE id = ?', id);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Hoadon not found' });
    } else {
      res.json({ message: 'Hoadon deleted successfully' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const searchHoadon = async (req, res) => {
    try {
      // Đọc thông tin tìm kiếm từ req.query
      const { keyword } = req.query;
  
      // Bắt đầu xây dựng truy vấn
      let query = 'SELECT * FROM hoadon WHERE 1';
  
      // Thêm điều kiện tìm kiếm nếu có
      if (keyword) {
        query += ` AND (hoten LIKE '%${keyword}%' OR trangthai LIKE '%${keyword}%')`;
      }
  
      // Thực hiện truy vấn
      const [results] = await pool.query(query);
  
      // Trả về kết quả tìm kiếm
      res.json({ message: 'Search results', results });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  

  const getAllHoadon = async (req, res) => {
    try {
      // Thực hiện truy vấn và sắp xếp theo ngày đặt hàng mới nhất
      const [hoadons] = await pool.query('SELECT * FROM hoadon ORDER BY ngaydathang DESC');
      
      res.json({ hoadons });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

const updateTrangthaiHoadon = async (req, res) => {
  const { id } = req.params;
  const { trangthai } = req.body;

  try {
   
    const result = await pool.query('UPDATE hoadon SET trangthai = ? WHERE id = ?', [trangthai, id]);

    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Hoadon not found' });
    } else {
      res.json({ message: 'Trangthai updated successfully' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


export {
  createHoadon,
  deleteHoadon,
  searchHoadon,
  getAllHoadon,
  updateTrangthaiHoadon
};
