import { Router } from 'express';
import * as CategoryController from '../controllers/categoryController';
import { authorizeUser } from '../middleware/authentication'; 
import { roles } from '../services/roles';

const categoryRouter = Router();

categoryRouter.post('/createCategory', authorizeUser([roles.admin]), CategoryController.createCategory);

categoryRouter.get('/getCategory', authorizeUser([roles.admin,roles.user]),CategoryController.getCategory);

categoryRouter.get('/listCategories', authorizeUser([roles.admin,roles.user]),CategoryController.listCategories);
categoryRouter.put('/updateCategory',authorizeUser([roles.admin]), CategoryController.updateCategory);

categoryRouter.delete('/deleteCategory',authorizeUser([roles.admin]), CategoryController.deleteCategory);

export default categoryRouter;