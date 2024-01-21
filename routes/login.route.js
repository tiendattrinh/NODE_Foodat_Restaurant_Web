import express from "express";
import loginController from "../controller/logincontroller.js"
const routerLogin = express.Router()

routerLogin.post('/login', loginController.login.handleLogin);

routerLogin.post('/register', loginController.register.handleRegister);

routerLogin.post('/admin-login', loginController.login.handleAdminLogin);

export default routerLogin

