import { Router } from 'express';
import orderController from '../controllers/orderControllers';




const route = Router();
route
.route("/")
.get(orderController.getAllOrders)
.post(orderController.createOrder);



route
.route("/:id")
.get(orderController.getOneOrder)
.patch(orderController.updateOrder)
.delete( orderController.deleteOrder);



export default route;