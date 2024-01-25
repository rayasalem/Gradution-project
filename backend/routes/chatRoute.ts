import express from 'express';
import { addComment, createChat, getAllComments, getCommentCount } from '../controllers/chatController';
import { authorizeUser } from '../middleware/authentication';
import { roles } from '../services/roles';

const chatRouter = express.Router();

chatRouter.post('/createChat/:lessonId', authorizeUser([roles.admin]), createChat);
chatRouter.get('/getAllComments/:lessonId', authorizeUser([roles.admin, roles.user]), getAllComments);
chatRouter.post('/addComment/:lessonId', authorizeUser([roles.admin, roles.user]), addComment);

// New route to get comment count
chatRouter.get('/getCommentCount/:lessonId', authorizeUser([roles.admin, roles.user]), getCommentCount);

export default chatRouter;
