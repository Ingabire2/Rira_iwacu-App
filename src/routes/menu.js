import { Router } from 'express';
import menuController from '../controllers/menuControllers';




const route = Router();
route
.route("/")
.get(menuController.getAllMenus)
.post(menuController.createMenu);



route
.route("/:id")
.get(menuController.getOneMenu)
.patch(menuController.updateMenu)
.delete( menuController.deleteMenu);



export default route;