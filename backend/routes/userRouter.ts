import { Router } from "express";
const router =Router();
import {authorizeUser} from "../middleware/authentication";
import { roles } from "../services/roles";
import * as userController from './../controllers/userController';
import { myMulter,fileValidation, handleErrorMiddleware } from '../services/multers';
import { validation } from "../middleware/requestValidation";
import * as validators from './../validation/userValidation'

router.get('/profile',authorizeUser([roles.user,roles.admin]),userController.getProfile)
router.patch('/profilePic', authorizeUser([roles.user,roles.admin]),
myMulter(fileValidation.image).single('image'),handleErrorMiddleware,
 userController.uploadImage)
router.patch('/updatePassword',authorizeUser([roles.user,roles.admin]),userController.updatePassword)
router.get('/allUsers',authorizeUser([roles.admin]),userController.getAllUsers)
router.delete('/delete',authorizeUser([roles.admin,roles.user]),userController.deleteUser)
router.get('/:id',authorizeUser([roles.admin,roles.user]),validation(validators.getUserById), userController.getUserById);
router.put("/updateUser",authorizeUser([roles.user,roles.admin]), userController.updateUser);
router.post('/cerateUser',authorizeUser([roles.admin]), userController.createUser)
router.delete('/deleteUser/:id',authorizeUser([roles.admin]),userController.deleteUserById)
router.put("/updateUserPassword/:id",authorizeUser([roles.admin]), userController.updateUserPassword);
router.put("/updateUserbyAdmin/:id",authorizeUser([roles.admin]), userController.updateUserByAdmin);
router.get('/profile/UserCoures',authorizeUser([roles.user]),userController.listOfUserCoures);


export default router;
