import Router from "express";
import userRouter from "./user";
import menuRouter from "./menu"; 
import orderRouter from "./order";
import reservationRouter from "./reservation";
import restaurantRouter from "./restaurant";

const router = Router();

router.use ('/user',userRouter);
router.use ('/menu',menuRouter);
router.use ('/order',orderRouter);
router.use ('/reservation',reservationRouter);
router.use ('/restaurant',restaurantRouter);
export default router