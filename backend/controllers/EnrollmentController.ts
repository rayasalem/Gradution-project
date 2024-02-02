import { Request, Response } from 'express';
import CourseModel, { ICourse } from '../db/schemas/courseSchema';
import User from '../db/schemas/userSchema'; 
import EnrollmentModel, { IEnrollment } from '../db/schemas/EnrollmentSchema';

export const enrollInCourse = async (req: Request, res: Response) => {
    const {courseId }= req.params ;
    const userId = req.user?._id;
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      const course = await CourseModel.findById(courseId);
      if (!course) {
        return res.status(404).json({ error: 'Course not found' });
      }
      const existingEnrollment = await EnrollmentModel.findOne({ courseId, userId });

         if (existingEnrollment) {
      throw new Error('User is already enrolled in the course');
          }
      const newEnrollment = await EnrollmentModel.create({ courseId, userId });
      course.enrollmentCount++;
      await course.save();
      res.status(200).json({ message: 'Enrolled in the course', newEnrollment });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to enroll in the course' });
    }
  }
export const getCoursesForUser = async (req: Request, res: Response) => {
    const userId = req.user?._id;
    try {
      const userEnrollments: IEnrollment[] = await EnrollmentModel.find({ userId }).populate('courseId');
      res.status(200).json({ userEnrollments });
    } catch (error) {
      console.error('Error fetching courses for user:', error);
      res.status(500).json({ error: 'Failed to fetch courses for the user' });
    }
  };