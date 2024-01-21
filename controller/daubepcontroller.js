// Import necessary modules
import pool from '../database.js';

const daubepController = {
  getDauBep: async (req, res) => {
    try {
      // Write the query directly in the controller
      const result = await pool.query('SELECT * FROM daubep');

      res.json({
        message: "ok",
        dataDauBep: result
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

export default daubepController;
