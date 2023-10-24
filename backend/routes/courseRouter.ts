import { Router } from 'express';
import * as CourseController from '../controllers/courseController'; 
import {authorizeUser} from "../middleware/authentication";
import { validation } from '../middleware/requestValidation';
import * as validators from '../validation/courseValidation';
import { roles } from '../services/roles';
const courseRouter = Router();

courseRouter.post('/createCourse',authorizeUser([roles.admin]),validation(validators.createCourseSchema), CourseController.createCourse);
courseRouter.patch('/editCourse', authorizeUser([roles.admin]), validation(validators.editCourseSchema), CourseController.editCourse);
courseRouter.delete('/deleteCourse',authorizeUser([roles.admin]),CourseController.deleteCourse);
courseRouter.get('/CourseDetails', CourseController.viewCourseDetails);
courseRouter.get('/Courses',CourseController.listAllCourses);///
courseRouter.post('/enrollInCourse/:courseId',authorizeUser([roles.user]), CourseController.enrollInCourse);
courseRouter.post('/unenrollCourse/:courseId',authorizeUser([roles.user]), CourseController.unenrollFromCourse);
courseRouter.post('/rateCourse',authorizeUser([roles.user,roles.admin]), validation(validators.rateCourseSchema), CourseController.rateCourse);


export default courseRouter;