import mysql from 'mysql2'
import bcrypt from 'bcrypt';


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'foodat',
}).promise()

export default pool;

export async function getDetailsByOrderId(orderId) {
  try {
    const query = 'SELECT chitiethoadon.*, sanpham.* FROM chitiethoadon JOIN sanpham ON chitiethoadon.masanpham = sanpham.id WHERE chitiethoadon.mahoadon = ?';
    const [rows] = await pool.query(query, [orderId]);
    return rows;
  } catch (error) {
    console.error('Error retrieving order details:', error.message);
    throw error;
  }
};


export async function createOrderWithDetails(id, hoten, diachi, sdt, trangthai, ngaydathang, makhachhang, tongtien, details, ghichu, quan) {
  try {
    // Insert into the orders table
    const orderResult = await pool.query(
      "INSERT INTO hoadon (id, hoten, diachi, sdt, trangthai, ngaydathang, makhachhang,tongtien,ghichu,quan) VALUES (?, ?, ?, ?, ?, ?, ?,?,?,?)",
      [id, hoten, diachi, sdt, trangthai, ngaydathang, makhachhang, tongtien, ghichu, quan]
    );

    console.log("--orderResult--");
    console.log(orderResult);

    // Get the inserted order ID
    const insertedOrderId = orderResult[0].insertId;

    console.log("--orderID--");
    console.log(insertedOrderId);

    // Insert into the detail_order table for each detail
    for (const detail of details) {
      await pool.query(
        "INSERT INTO chitiethoadon (soluong, gia, tong, mahoadon, masanpham) VALUES (?, ?, ?, ?, ?)",
        [detail.soluong, detail.gia, detail.tong, insertedOrderId, detail.masanpham]
      );
    }
    return true;
  } catch (error) {
    // Rollback the transaction in case of an error
    // await pool.rollback();

    console.error('Error creating order with details:', error.message);
    throw error;
  }
}

export async function getOrdersByCustomerId(customerId) {
  try {
    const result = await pool.query(`
      SELECT *
      FROM hoadon
      WHERE makhachhang = ?
    `, [customerId]);

    return result;
  } catch (error) {
    console.error('Error fetching orders for customer:', error.message);
    throw error;
  }
}

// Trong file database.js
export async function updateCustomerInfo(updatedInfo) {
  try {
    const result = await pool.query(
      "UPDATE khachhang SET ten = ?, tendem = ?, diachi = ?, gioitinh = ?, sdt = ? WHERE id = ?",
      [updatedInfo.ten, updatedInfo.tendem, updatedInfo.diachi, updatedInfo.gioitinh, updatedInfo.sdt, updatedInfo.id]
    );

    return result;
  } catch (error) {
    console.error('Error updating customer info:', error.message);
    throw error;
  }
}
