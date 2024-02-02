import { Router } from 'express';
import * as CourseController from '../controllers/courseController'; 
import {authorizeUser} from "../middleware/authentication";
import { validation } from '../middleware/requestValidation';
import * as validators from '../validation/courseValidation';
import { roles } from '../services/roles';
const courseRouter = Router();

courseRouter.post('/createCourse',authorizeUser([roles.admin]), CourseController.createCourse);
courseRouter.patch('/editCourse/:courseId', authorizeUser([roles.admin]), CourseController.editCourse);
courseRouter.delete('/deleteCourse',authorizeUser([roles.admin]),CourseController.deleteCourse);
courseRouter.get('/CourseDetails/:title', CourseController.viewCourseDetails);
courseRouter.get('/CourseDetail/:courseId', CourseController.viewCourseDetail);
courseRouter.get('/Courses',CourseController.listAllCourses);
courseRouter.post('/unenrollCourse/:courseId',authorizeUser([roles.user]), CourseController.unenrollFromCourse);



export default courseRouter;