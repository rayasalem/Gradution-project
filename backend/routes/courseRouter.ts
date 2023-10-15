import { Router } from 'express';
import { Request, Response } from 'express';
import * as CourseController from '../controllers/courseController'; // Make sure this import is correctly pointing to the controller file
import { validation } from '../middleware/requestValidation';
import * as validators from '../middleware/requestValidation';

const courseRouter = Router();

courseRouter.post('/courses', validation(validators.createCourseSchema), CourseController.createCourse);
courseRouter.put('/courses/:courseId', validation(validators.editCourseSchema), CourseController.editCourse);
courseRouter.delete('/courses/:courseId', CourseController.deleteCourse);
courseRouter.get('/courses/:courseId', CourseController.viewCourseDetails);
courseRouter.get('/courses', CourseController.listAllCourses);
courseRouter.post('/courses/enroll/:courseId', CourseController.enrollInCourse);
courseRouter.post('/courses/unenroll/:courseId', CourseController.unenrollFromCourse);
courseRouter.post('/courses/rate/:courseId', validation(validators.rateCourseSchema), CourseController.rateCourse);


export default courseRouter;
