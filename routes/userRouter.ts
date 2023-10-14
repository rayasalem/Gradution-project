import { Router } from "express";
const router =Router();
import { auth } from "../middleware/auth";
import { roles } from "../services/roles";
import * as userController from './../controllers/userController';
import { myMulter,fileValidation, handleErrorMiddleware } from './../services/multers';
import { validation } from "../middleware/validation";
import * as validators from './../validation/userValidation'

router.get('/profile',auth([roles.User]),userController.getProfile)
router.patch('/profilePic', auth([roles.User]),
myMulter(fileValidation.image).single('image'),handleErrorMiddleware,
 userController.uploadImage)
router.patch('/updatePassword',auth([roles.User,roles.Admin]),validation(validators.updatePassword),userController.updatePassword)
router.get('/allUsers',auth([roles.Admin]),userController.getAllUsers)
router.delete('/delete/:id',auth([roles.Admin,roles.User]),userController.deleteUser)
router.get('/:id', auth([roles.Admin]),validation(validators.getUserById), userController.getUserById);
router.put("/updateUser/:id", auth([roles.User,roles.Admin]), userController.updateUser);
router.post('/cerateUser',validation(validators.createUser), userController.createUser)


export default router;
