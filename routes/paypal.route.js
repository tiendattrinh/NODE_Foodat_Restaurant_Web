import express from "express";
import paypalController from "../controller/paypalController.js"

const router = express.Router();

router.post("/pay", paypalController.payment);

router.get("/executePayment", paypalController.executePayment);

export default router
