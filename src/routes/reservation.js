import { Router } from 'express';
import reservationController from '../controllers/reservationControllers';




const route = Router();
route
.route("/")
.get(reservationController.getAllReservations)
.post(reservationController.createReservation);



route
.route("/:id")
.get(reservationController.getOneReservation)
.patch(reservationController.updateReservation)
.delete( reservationController.deleteReservation);



export default route;