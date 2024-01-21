import express from "express";
import daubepController from "../controller/daubepcontroller.js";
const routerDauBep = express.Router()

routerDauBep.get('/', daubepController.getDauBep)

export default routerDauBep