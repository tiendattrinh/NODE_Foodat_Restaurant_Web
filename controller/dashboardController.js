// Import pool from your database file
import pool from '../database.js';

// const getStatisMonth = async (req, res) => {
//     try {
//         const query = 'SELECT MONTH(ngaytao) AS thang, SUM(tongtien) AS tong_tien FROM hoadon GROUP BY thang';
//         const results = await pool.query(query);
//         res.json({ total_month: results[0][0].total_month });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

const getDashboardTotalOrders = async (req, res) => {
    try {
        const query = 'SELECT COUNT(*) AS total_orders FROM hoadon';
        const results = await pool.query(query);
        res.json({ total_orders: results[0][0].total_orders });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getDashboardTotalRevenue = async (req, res) => {
    try {
        const query = 'SELECT SUM(tongtien) AS total_revenue FROM hoadon';
        const results = await pool.query(query);
        res.json({ total_revenue: results[0][0].total_revenue });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getDashboardTotalProducts = async (req, res) => {
    try {
        const query = 'SELECT COUNT(*) AS total_products FROM sanpham';
        const results = await pool.query(query);
        res.json({ total_products: results[0][0].total_products });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getDashboardTotalUsers = async (req, res) => {
    try {
        const query = 'SELECT COUNT(*) AS total_users FROM khachhang';
        const results = await pool.query(query);
        res.json({ total_users: results[0][0].total_users });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export { getDashboardTotalOrders, getDashboardTotalRevenue, getDashboardTotalProducts, getDashboardTotalUsers };
