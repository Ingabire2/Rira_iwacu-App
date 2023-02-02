import menuModel from "../models/menuModel";
import handleCRUD from "../utils/handleCRUD";

 const createMenu = handleCRUD.createOne(menuModel);
 const getOneMenu = handleCRUD.getOneById(menuModel);
 const getAllMenus = handleCRUD.getAll(menuModel);
 const updateMenu = handleCRUD.updateOneById(menuModel);
 const deleteMenu = handleCRUD.deleteOneById(menuModel);

 export default {createMenu,getOneMenu,getAllMenus,updateMenu,deleteMenu}