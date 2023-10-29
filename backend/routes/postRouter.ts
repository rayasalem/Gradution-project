import express from 'express';
import * as postController from '../controllers/postController';
import { authorizeUser } from '../middleware/authentication';
import { roles } from '../services/roles';

const router = express.Router();

router.post('/createPost', authorizeUser([roles.admin,roles.user]), postController.createPost);
router.put('/updatePost', authorizeUser([roles.admin,roles.user]), postController.updatePost);
router.delete('/deletePost', authorizeUser([roles.admin,roles.user]), postController.deletePost);
router.get('/getPost', postController.getPostById);
router.post('/likePost', postController.likePost);

export default router;