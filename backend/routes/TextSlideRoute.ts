import express from 'express';
import {
  createTextSlide,
  editTextSlide,
  deleteTextSlide,
  viewTextSlideDetails,
  listTextSlidesInLesson,
} from '../controllers/TextSlideController' 

const textSlideRouter = express.Router();

textSlideRouter.post('/createTextSlide', createTextSlide);
textSlideRouter.put('/editTextSlide/:textSlideId', editTextSlide);
textSlideRouter.delete('/deleteTextSlide/:textSlideId', deleteTextSlide);
textSlideRouter.get('/textSlideDetails/:textSlideId', viewTextSlideDetails);
textSlideRouter.get('/lesson/textSlides/:lessonId', listTextSlidesInLesson);

export default textSlideRouter;