import express from 'express';
import { enrollInCourse, getCoursesForUser } from '../controllers/EnrollmentController';
import { authorizeUser } from '../middleware/authentication';
import { roles } from '../services/roles';


const EnrollmentRouter = express.Router();

EnrollmentRouter.post('/enrollInCourse/:courseId',authorizeUser([roles.user]),enrollInCourse );
EnrollmentRouter.get('/coursesForUser',authorizeUser([roles.user]),getCoursesForUser );




export default EnrollmentRouter;