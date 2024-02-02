import { Router } from "express";
import * as progressRouter from '../controllers/ProgressController';
import { authorizeUser } from "../middleware/authentication";
import { roles } from "../services/roles";

const router =Router();
router.post('/:courseId/track-progress',authorizeUser([roles.user]),progressRouter.trackCourseProgress);
router.patch('/complete-lesson/:lessonId',authorizeUser([roles.admin,roles.user]), progressRouter.completeLesson);
router.patch('/complete-quiz/:quizId',authorizeUser([roles.user]), progressRouter.completeQuiz);
router.delete('/progressdelete/:userId',authorizeUser([roles.admin]),progressRouter.deleteProgress)
router.get('/check-course-completion/:courseId',authorizeUser([roles.user]), progressRouter.checkCourseCompletion);

export default router;