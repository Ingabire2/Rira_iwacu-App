import reservationModel from "../models/reservationModel";
import handleCRUD from "../utils/handleCRUD";

 const createReservation = handleCRUD.createOne(reservationModel);
 const getOneReservation = handleCRUD.getOneById(reservationModel);
 const getAllReservations = handleCRUD.getAll(reservationModel);
 const updateReservation = handleCRUD.updateOneById(reservationModel);
 const deleteReservation = handleCRUD.deleteOneById(reservationModel);

 export default {createReservation,getOneReservation,getAllReservations,updateReservation,deleteReservation}