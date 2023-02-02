import orderModel from "../models/orderModel";
import handleCRUD from "../utils/handleCRUD";

 const createOrder = handleCRUD.createOne(orderModel);
 const getOneOrder = handleCRUD.getOneById(orderModel);
 const getAllOrders = handleCRUD.getAll(orderModel);
 const updateOrder = handleCRUD.updateOneById(orderModel);
 const deleteOrder = handleCRUD.deleteOneById(orderModel);

 export default {createOrder,getOneOrder,getAllOrders,updateOrder,deleteOrder}