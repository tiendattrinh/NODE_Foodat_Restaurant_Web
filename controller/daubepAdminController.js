// daubepController.js
import pool from '../database.js';

const daubepController = {
    addDaubep: async (req, res) => {
        try {
            const daubepData = req.body;
            const result = await pool.query(
                'INSERT INTO daubep (ten, mota, lienketyt, lienketfb, lienketig, hinhanh) VALUES (?, ?, ?, ?, ?, ?)',
                [
                    daubepData.ten,
                    daubepData.mota,
                    daubepData.lienketyt,
                    daubepData.lienketfb,
                    daubepData.lienketig,
                    daubepData.hinhanh
                ]
            );

            res.json({ message: 'Daubep added successfully', daubepId: result.insertId });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    updateDaubep: async (req, res) => {
        const { id } = req.params;
        const daubepData = req.body;
        try {
          let query = 'UPDATE daubep SET ten = ?, mota = ?, lienketyt = ?, lienketfb = ?, lienketig = ?';
          const values = [
            daubepData.ten,
            daubepData.mota,
            daubepData.lienketyt,
            daubepData.lienketfb,
            daubepData.lienketig,
          ];
      
          if (daubepData.hinhanh !== undefined) {
            query += ', hinhanh = ?';
            values.push(daubepData.hinhanh);
          }
      
          query += ' WHERE id = ?';
          values.push(id);
      
          const result = await pool.query(query, values);
      
          if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Daubep not found' });
          } else {
            res.json({ message: 'Daubep updated successfully' });
          }
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
        }
      },
      

    deleteDaubep: async (req, res) => {
        const { id } = req.params;
        try {
            const result = await pool.query('DELETE FROM daubep WHERE id = ?', [id]);

            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Daubep not found' });
            } else {
                res.json({ message: 'Daubep deleted successfully' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    getDaubepById: async (req, res) => {
        const { id } = req.params;
        try {
            const result = await pool.query('SELECT * FROM daubep WHERE id = ?', [id]);

            if (result.length > 0) {
                res.json(result[0]);
            } else {
                res.status(404).json({ message: 'Daubep not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    getAllDaubep: async (req, res) => {
        try {
            const result = await pool.query('SELECT * FROM daubep');
            res.json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    searchDaubep: async (req, res) => {
        const { keyword } = req.query;
        console.log("đã vô");
        try {
            const result = await pool.query('SELECT * FROM daubep WHERE ten LIKE ?', [`%${keyword}%`]);
            res.json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
};

export default daubepController;
