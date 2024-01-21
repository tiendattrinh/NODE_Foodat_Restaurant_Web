import express from 'express'
import bodyParser from "body-parser";
import routerLoaihang from './routes/loaihang.route.js'
import routerSanPham from './routes/sanpham.route.js'
import routerLogin from './routes/login.route.js';
import cors from 'cors'
import routerHoadon from './routes/hoadon.route.js';
import routerUser from './routes/user.route.js';
import routerDauBep from './routes/daubep.route.js';
import routerAccount from './routes/account.route.js';
import sanphamAdminRouter from './routes/sanphamAdmin.route.js';
import daubepAdminRouter from './routes/daubepAdmin.route.js';
import hoadonAdminRouter from './routes/hoadonAdmin.route.js';
import dashboardRoutes from './routes/dashboard.route.js';
import loaihangAdminRoutes from './routes/loaihangAdmin.route.js';
import favoritesRouter from './routes/favorites.route.js';
import promotionRouter from './routes/promotion.route.js';
import paymentRouter from './routes/paypal.route.js';

const app = express();
const port = 3001;
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/api/accounts', routerAccount)
app.use("/api/loaihang", routerLoaihang)
app.use("/api/sanpham", routerSanPham)
app.use('/api/user', routerLogin)
app.use('/api/order', routerHoadon)
app.use('/api/user', routerUser)
app.use('/api/daubep', routerDauBep)

app.use('/api/sanphamAdmin', sanphamAdminRouter);
app.use('/api/daubepAdmin', daubepAdminRouter);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/hoadonAdmin', hoadonAdminRouter);
app.use('/api/loaihangAdmin', loaihangAdminRoutes);
app.use('/api/favorites', favoritesRouter);
app.use('/api/promotions', promotionRouter);
app.use('/api/payment', paymentRouter);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});