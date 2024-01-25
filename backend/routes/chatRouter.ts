import express from 'express';
import { addComment, createChat, getAllComments } from '../controllers/chatContoller';
import { authorizeUser } from '../middleware/authentication';
import { roles } from '../services/roles';


const chatRouter = express.Router();

chatRouter.post('/CreateChat/:lessonId',authorizeUser([roles.admin]),createChat);
chatRouter.get('/getAllCommentInChat/:lessonId',authorizeUser([roles.admin,roles.user]),getAllComments);
chatRouter.post('/addCommintInChat/:lessonId',authorizeUser([roles.admin,roles.user]), addComment);


export default chatRouter;