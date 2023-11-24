import express, { Router } from 'express';
import {
  createLesson,
  editLesson,
  deleteLesson,
  viewLessonDetails,
  listLessonsInCourse,
} from '../controllers/lessonController';
import {authorizeUser} from "../middleware/authentication";
import { roles } from '../services/roles';
const lessonRouter = Router();

lessonRouter.post('/createLesson',createLesson);
lessonRouter.put('/editLesson',authorizeUser([roles.admin]),editLesson);
lessonRouter.delete('/deleteLesson',authorizeUser([roles.admin]),deleteLesson);
lessonRouter.get('/LessonDetails',authorizeUser([roles.admin,roles.user]),viewLessonDetails);
lessonRouter.get('/course/lesson',authorizeUser([roles.admin,roles.user]),listLessonsInCourse);

export default lessonRouter;