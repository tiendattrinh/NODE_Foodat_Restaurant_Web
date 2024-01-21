import express from "express";
import hoadonController from "../controller/hoadoncontroller.js"
const routerHoadon = express.Router()

routerHoadon.post('/create', hoadonController.createOrderController.handleCreateOrder)
routerHoadon.get('/:orderId', hoadonController.getOrderDetailsController.handleGetOrderDetails);

export default routerHoadon

