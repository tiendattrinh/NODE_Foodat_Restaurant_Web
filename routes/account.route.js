// accountRouter.js
import express from "express";
import accountController from '../controller/accountController.js';
const routerAccount = express.Router();

routerAccount.get('/search', accountController.searchAccounts);
routerAccount.put('/updateMatrangthai/:id', accountController.updateMatrangthai);
routerAccount.get('/', accountController.getAllAccounts);

export default routerAccount