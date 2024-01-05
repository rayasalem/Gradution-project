import { Router } from 'express';
import * as blogController from '../controllers/blogController';
import { authorizeUser } from '../middleware/authentication'; 
import { roles } from '../services/roles';
import { validation } from '../middleware/requestValidation';
import * as validators from '../validation/blogValidation';
import { fileValidation, handleErrorMiddleware, myMulter } from '../services/multers';


const router =Router();
router.post('/createblog', authorizeUser([roles.admin]),blogController.createBlog);
router.patch('/imageBlog/:blogId', authorizeUser([roles.admin]),
myMulter(fileValidation.image).single('image'),
handleErrorMiddleware,blogController.uploadImageBlog);
router.post('/createSectioninBlog/:blogId', authorizeUser([roles.admin]),blogController.createSection);
router.get('/getblogs', authorizeUser([roles.admin,roles.user]),blogController.getAllBlogs);
router.put('/updateSectionInBlog/:blogId', authorizeUser([roles.admin]),blogController.updateSection);
router.get('/updateSectionInBlog/:blogId/:order', authorizeUser([roles.admin]),blogController.getSectionByOrder);
router.delete('/deleteSectionInBlog/:blogId/:order', authorizeUser([roles.admin]),blogController.deleteSectionByOrder);
router.put('/updateBlog/:blogId', authorizeUser([roles.admin]),blogController.updateBlog);
router.get('/getBlogById/:blogId', authorizeUser([roles.admin,roles.user]),blogController.getBlogById);
router.delete('/deleteBlog/:blogId', authorizeUser([roles.admin]),blogController.deleteBlog);
router.get('/relatedBlog/:blogId', authorizeUser([roles.admin,roles.user]),blogController.getRelatedBlogByTopic);
router.get('/popularBlogs', authorizeUser([roles.admin,roles.user]),blogController.popularBlogs);
router.get('/search/searchInBlog', authorizeUser([roles.admin,roles.user]),blogController.searchBlog);



export default router;