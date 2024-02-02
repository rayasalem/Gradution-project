import express from 'express';
import { createFeedBack, getAllFeedBack, getFeedbackRead, getFeedbackUnRead, setFeedbackRead } from '../controllers/feedBackController';
import { authorizeUser } from '../middleware/authentication';
import { roles } from '../services/roles';


const FeedBackRouter = express.Router();

FeedBackRouter.post('/createFeedBack',createFeedBack );
FeedBackRouter.put('/SetFeedBackTrue/:feedbackId',authorizeUser([roles.admin]),setFeedbackRead);
FeedBackRouter.get('/getAllFeedBack',authorizeUser([roles.admin]), getAllFeedBack);
FeedBackRouter.get('/getFeedbackRead',authorizeUser([roles.admin]),getFeedbackRead );
FeedBackRouter.get('/feedback/unread',authorizeUser([roles.admin]),getFeedbackUnRead );


export default FeedBackRouter;