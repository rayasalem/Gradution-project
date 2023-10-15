import express, { Router } from 'express';
import {
  createLesson,
  editLesson,
  deleteLesson,
  viewLessonDetails,
  listLessonsInCourse,
} from '../controllers/lessonController';

const lessonRouter = Router();

lessonRouter.post('/', createLesson);
lessonRouter.put('/:lessonId', editLesson);
lessonRouter.delete('/:lessonId', deleteLesson);
lessonRouter.get('/:lessonId', viewLessonDetails);
lessonRouter.get('/course/:courseId', listLessonsInCourse);

export default lessonRouter;
