import { Router } from 'express';
import * as CourseController from '../controllers/courseController'; 
import {authorizeUser} from "../middleware/authentication";
import { validation } from '../middleware/requestValidation';
import * as validators from '../validation/courseValidation';
import { roles } from '../services/roles';

const courseRouter = Router();

courseRouter.post('/courses',authorizeUser([roles.admin]),validation(validators.createCourseSchema), CourseController.createCourse);
courseRouter.put('/courses/:courseId',authorizeUser([roles.admin]),validation(validators.editCourseSchema), CourseController.editCourse);
courseRouter.delete('/courses/:courseId',authorizeUser([roles.admin]),CourseController.deleteCourse);
courseRouter.get('/courses/:courseId', CourseController.viewCourseDetails);
courseRouter.get('/Courses',CourseController.listAllCourses);///
courseRouter.post('/courses/enroll/:courseId',authorizeUser([roles.user]), CourseController.enrollInCourse);
courseRouter.post('/courses/unenroll/:courseId',authorizeUser([roles.user]), CourseController.unenrollFromCourse);
courseRouter.post('/courses/rate/:courseId',authorizeUser([roles.user]), validation(validators.rateCourseSchema), CourseController.rateCourse);


export default courseRouter;
