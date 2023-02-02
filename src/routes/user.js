import { Router } from 'express';
import userController from '../controllers/userControllers';




const route = Router();
route
.route("/")
.post(userController.signup)
.get(userController.getAllUsers);


route
.route("/:id")
.get(userController.getOneUser)
.patch(userController.updateUser)
.delete( userController.deleteUser);



export default route;