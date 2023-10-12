import { Router } from 'express';
import * as CourseController from '../controllers/courseController';
import { validation } from  '../middleware/requestValidation'
import * as validators from '../middleware/requestValidation'

const courseRouter = Router();

courseRouter.post('/courses', validation(validators.createCourse), CourseController.createCourse);
/
courseRouter.put('/courses/:courseId', validation(validators.editCourse), CourseController.editCourse);

courseRouter.delete('/courses/:courseId', CourseController.deleteCourse);

courseRouter.get('/courses/:courseId', CourseController.viewCourseDetails);

courseRouter.get('/courses', CourseController.listAllCourses);

courseRouter.post('/courses/enroll/:courseId', CourseController.enrollInCourse);

courseRouter.post('/courses/unenroll/:courseId', CourseController.unenrollFromCourse);

courseRouter.post('/courses/rate/:courseId', validation(validators.rateCourse), CourseController.rateCourse);

courseRouter.get('/courses/user/:userId', CourseController.viewUserCourses);

export default courseRouter;
