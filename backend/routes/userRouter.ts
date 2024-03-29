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
router.patch('/updatePassword',authorizeUser([roles.user,roles.admin]),validation(validators.updatePassword),userController.updatePassword)
router.get('/allUsers',authorizeUser([roles.admin]),userController.getAllUsers)
router.delete('/delete/:id',authorizeUser([roles.admin,roles.user]),userController.deleteUser)
router.get('/:id',authorizeUser([roles.admin]),validation(validators.getUserById), userController.getUserById);
router.put("/updateUser/:id",authorizeUser([roles.user,roles.admin]), userController.updateUser);
router.post('/cerateUser',validation(validators.createUser), userController.createUser)


export default router;
