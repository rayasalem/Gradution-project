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

lessonRouter.post('/:courseId',authorizeUser([roles.admin]),createLesson);
lessonRouter.put('/:lessonId',authorizeUser([roles.admin]),editLesson);
lessonRouter.delete('/:lessonId',authorizeUser([roles.admin]),deleteLesson);
lessonRouter.get('/lesson/:lessonId',authorizeUser([roles.admin,roles.user]),viewLessonDetails);
lessonRouter.get('/course/lesson/:courseId',authorizeUser([roles.admin,roles.user]),listLessonsInCourse);

export default lessonRouter;
