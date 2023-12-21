import express, { Router } from 'express';
import {
  createLesson,
  editLesson,
  deleteLesson,
  viewLessonDetails,
  listLessonsInCourse,
  listQuestionsInLesson
} from '../controllers/lessonController';
import {authorizeUser} from "../middleware/authentication";
import { roles } from '../services/roles';
const lessonRouter = Router();

lessonRouter.post('/createLesson/:courseId',authorizeUser([roles.admin]),createLesson);
lessonRouter.put('/editLesson/:lessonId',authorizeUser([roles.admin]),editLesson);
lessonRouter.delete('/deleteLesson/:lessonId',authorizeUser([roles.admin]),deleteLesson);
lessonRouter.get('/LessonDetails/:lessonId',authorizeUser([roles.admin,roles.user]),viewLessonDetails);
lessonRouter.get('/course/lesson/:courseId',authorizeUser([roles.admin,roles.user]),listLessonsInCourse);
lessonRouter.get('/questions/:lessonId',authorizeUser([roles.admin,roles.user]),listQuestionsInLesson);

export default lessonRouter;