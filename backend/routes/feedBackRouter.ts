import express from 'express';
import { createFeedBack, getAllFeedBack, getFeedbackRead, getFeedbackUnRead, setFeedbackRead } from '../controllers/feedBackController';


const FeedBackRouter = express.Router();

FeedBackRouter.post('/createFeedBack',createFeedBack );
FeedBackRouter.put('/SetFeedBackTrue/:feedbackId',setFeedbackRead);
FeedBackRouter.get('/getAllFeedBack', getAllFeedBack);
FeedBackRouter.get('/getFeedbackRead',getFeedbackRead );
FeedBackRouter.get('/feedback/unread',getFeedbackUnRead );


export default FeedBackRouter;