// hoadonController.js file
import { createOrderWithDetails, getDetailsByOrderId } from '../database.js';

const hoadonController = {
  createOrderController: {
    async handleCreateOrder(req, res) {
      try {
        // Extract data from the request body, including order details
        const { id, hoten, diachi, sdt, trangthai, ngaydathang, makhachhang, tongtien, details, ghichu, quan } = req.body;

        // Call the createOrderWithDetails function from the database to insert the order and details
        const orderId = await createOrderWithDetails(id, hoten, diachi, sdt, trangthai, ngaydathang, makhachhang, tongtien, details, ghichu, quan);
        // Check if the order was created successfully
        if (orderId) {
          res.status(200).json({ success: true, message: 'Order created successfully', orderId });
        } else {
          res.status(500).json({ success: false, message: 'Failed to create order' });
        }
      } catch (error) {
        console.error('Error creating order:', error.message);
        res.status(500).json({ success: false, message: 'Internal server error' });
      }
    },
  },
  getOrderDetailsController: {
    async handleGetOrderDetails(req, res) {
      try {
        const { orderId } = req.params;

        // Call the getDetailsByOrderId function from the database
        const orderDetails = await getDetailsByOrderId(orderId);

        // Check if the order details were retrieved successfully
        if (orderDetails) {
          res.status(200).json({ success: true, message: 'Order details retrieved successfully', orderDetails });
        } else {
          res.status(404).json({ success: false, message: 'Order details not found' });
        }
      } catch (error) {
        console.error('Error retrieving order details:', error.message);
        res.status(500).json({ success: false, message: 'Internal server error' });
      }
    },
  },
};

export default hoadonController;
