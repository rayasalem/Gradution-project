import express from 'express';
import * as postController from '../controllers/postController';
import { authorizeUser } from '../middleware/authentication';
import { roles } from '../services/roles';

const router = express.Router();

router.post('/createPost', authorizeUser([roles.admin,roles.user]), postController.createPost);
router.put('/updatePost/:postId', authorizeUser([roles.admin,roles.user]), postController.updatePost);
router.delete('/deletePost/:postId', authorizeUser([roles.admin,roles.user]), postController.deletePost);
router.get('/getPost/:postId', authorizeUser([roles.admin,roles.user]), postController.getPostById);
router.post('/likePost/:postId', authorizeUser([roles.admin,roles.user]), postController.likePost);
router.post('/hasUserLikedPost/:postId', authorizeUser([roles.admin,roles.user]), postController.hasUserLikedPost);
router.delete('/removelike/:postId', authorizeUser([roles.admin,roles.user]), postController.removeLike);
router.get('/getPosts', authorizeUser([roles.admin,roles.user]),postController.gitAllPost);
router.get('/gethotPosts', authorizeUser([roles.admin,roles.user]),postController.getHotPostsForToday);
router.get('/getTrendingPost', authorizeUser([roles.admin,roles.user]),postController.getTrendingPost);
router.get('/getUnansweredPost', authorizeUser([roles.admin,roles.user]),postController.getUnansweredPost);
router.get('/getMyPost', authorizeUser([roles.admin,roles.user]),postController.getMyPosts);
router.get('/search/searchInPost', authorizeUser([roles.admin,roles.user]),postController.searchPosts);

export default router;