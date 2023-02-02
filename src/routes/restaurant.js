import { Router } from 'express';
import restaurantController from '../controllers/restaurantControllers';




const route = Router();
route
.route("/")
.get(restaurantController.getAllRestaurants)
.post(restaurantController.createRestaurant);



route
.route("/:id")
.get(restaurantController.getOneRestaurant)
.patch(restaurantController.updateRestaurant)
.delete( restaurantController.deleteRestaurant);



export default route;