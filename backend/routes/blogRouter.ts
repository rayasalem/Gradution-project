import { Router } from 'express';
import * as blogController from '../controllers/blogController';
import { authorizeUser } from '../middleware/authentication'; 
import { roles } from '../services/roles';
import { validation } from '../middleware/requestValidation';
import * as validators from '../validation/blogValidation';


const router =Router();
router.post('/createblog', authorizeUser([roles.admin]),validation(validators.createBlog),blogController.createBlog);
router.get('/getblogs', authorizeUser([roles.admin,roles.user]),blogController.getAllBlogs);
router.put('/updateBlog/:blogId', authorizeUser([roles.admin]),blogController.updateBlog);
router.get('/getBlogById/:blogId', authorizeUser([roles.admin,roles.user]),blogController.getBlogById);
router.delete('/deleteBlog/:blogId', authorizeUser([roles.admin]),blogController.deleteBlog);
router.get('/relatedBlog/:blogId', authorizeUser([roles.admin,roles.user]),blogController.getRelatedBlogByTopic);
router.get('/popularBlogs', authorizeUser([roles.admin,roles.user]),blogController.popularBlogs);





export default router;