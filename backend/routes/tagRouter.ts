import { Router } from 'express';
import * as TagController from '../controllers/tagController';
import { authorizeUser } from '../middleware/authentication';
import { roles } from '../services/roles';

const tagRouter = Router();

tagRouter.get('/getTags', TagController.getTags);
tagRouter.get('/getTag', TagController.getTagById);
tagRouter.post('/createTag', authorizeUser([roles.admin]),  TagController.createTag);
tagRouter.put('/updateTag', authorizeUser([roles.admin]), TagController.updateTag);
tagRouter.delete('/deleteTag', authorizeUser([roles.admin]), TagController.deleteTag);

export default tagRouter;