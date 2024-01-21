import pool from '../database.js';

const accountController = {
  getAllAccounts: async (req, res) => {
    try {
      const accounts = await pool.query('SELECT * FROM khachhang');
      res.json(accounts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  searchAccounts: async (req, res) => {
    const { keyword } = req.query;
    
    console.log(keyword);
    try {
      const accounts = await pool.query('SELECT * FROM khachhang WHERE ten LIKE ?', [`%${keyword}%`]);
      res.json(accounts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  updateMatrangthai: async (req, res) => {
    const { id } = req.params;
    const { matrangthai } = req.body;
    
    try {
      await pool.query('UPDATE khachhang SET matrangthai = ? WHERE id = ?', [matrangthai, id]);
      res.json({ message: 'Matrangthai updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

};

export default accountController;
