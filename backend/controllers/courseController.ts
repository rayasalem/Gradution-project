import { Request, Response } from 'express';
import CourseModel, { ICourse } from '../db/schemas/courseSchema';
import User from '../db/schemas/userSchema'; 
import mongoose,{Types} from 'mongoose';
declare global {
  namespace Express {
    interface Request {
      user?: {
        _id: string; 
      };
    }
  }
}

export const createCourse = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const author = req.user?._id;
    const existingCourse = await CourseModel.findOne({ title });

    if (existingCourse) {
      return res.status(400).json({ error: 'Course with this title already exists' });
    }
    const newCourse: ICourse = new CourseModel({
      title,
      description,
      author,
    });
   const savedcourse= await newCourse.save();
    res.status(201).json({ message: 'Course created successfully', savedcourse });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create a new course' });
  }
}
export const editCourse = async (req: Request, res: Response) => {
  const courseId  = req.params.courseId;
  try {    
    const updatedCourse = await CourseModel.findByIdAndUpdate(courseId, req.body, { new: true });
    if (!updatedCourse) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.status(200).json({ message: 'Course details updated', course: updatedCourse });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update course details' });
  }
}
export const deleteCourse = async (req: Request, res: Response) => {
  const courseId = req.query.courseId;
  try {
    const deletedCourse = await CourseModel.findByIdAndRemove(courseId);

    if (!deletedCourse) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the course' });
  }
}
export const viewCourseDetails = async (req: Request, res: Response) => {
  const {title} = req.params; 
  try {
    const course = await CourseModel.findOne({ title });
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.status(200).json({ message: 'Course details', course });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve course details' });
  }
}
export const viewCourseDetail = async (req: Request, res: Response) => {
  const {courseId} = req.params; 
  try {
    const course = await CourseModel.findOne({ _id:courseId });
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.status(201).json({ message: 'Course details', course });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve course details' });
  }
}
export const listAllCourses = async (req: Request, res: Response) => {
  try {
    const courses = await CourseModel.find();

    res.status(200).json({ message: 'List of all courses', courses });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve course list' });
  }
}
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
    const courseIdObjectId = new mongoose.Types.ObjectId(courseId); 
    if (user.enrolledCourses.map(String).includes(courseIdObjectId.toString())) {
      return res.status(400).json({ error: 'User is already enrolled in this course' });
    }
    user.enrolledCourses.push(courseIdObjectId);
    await user.save();
    course.enrollmentCount++;
    await course.save();
    res.status(200).json({ message: 'Enrolled in the course', course });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to enroll in the course' });
  }
}
export const unenrollFromCourse = async (req: Request, res: Response) => {
  const courseId = req.query.courseId as string;
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

    const courseIdObjectId = new mongoose.Types.ObjectId(courseId); 

    if (!user.enrolledCourses.map(String).includes(courseIdObjectId.toString())) {
      return res.status(400).json({ error: 'User is not enrolled in this course' });
    }

    user.enrolledCourses = user.enrolledCourses.filter((enrolledCourseId) =>
      enrolledCourseId.toString() !== courseIdObjectId.toString()
    );

    await user.save();

    course.enrollmentCount--;
    await course.save();

    res.status(200).json({ message: 'Unenrolled from the course' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to unenroll from the course' });
  }
}
