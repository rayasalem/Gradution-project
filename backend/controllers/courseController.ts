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
export const rateCourse = async (req: Request, res: Response) => {
  try {
    const userId: string | undefined = req.user?._id;
    const courseId = req.query.courseId;
    const rating = req.body.rating;
    if (!userId) {
      return res.status(404).json({ error: 'User not found' });
    }
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const course = await CourseModel.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    if (course.ratings.some((rate: { userId: string }) => rate.userId.toString() === userId)) {
      return res.status(400).json({ error: 'User has already rated this course' });
    }
    const newRating = {
      userId: userId,
      rating: rating,
    };
    course.ratings.push(newRating);
    await course.save();
    res.status(200).json({ message: 'Course rated successfully', course });
  } catch (error) {
    res.status(500).json({ error: 'Failed to rate the course' });
  }
}
export const createCourse = async (req: Request, res: Response) => {
  try {
    const { title, description,  difficultyLevel } = req.body;
    const author = req.user?._id;
    const newCourse: ICourse = new CourseModel({
      title,
      description,
      author,
      difficultyLevel,
    });
   const savedcourse= await newCourse.save();
    res.status(201).json({ message: 'Course created successfully', savedcourse });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create a new course' });
  }
}

export const editCourse = async (req: Request, res: Response) => {
  const courseId  = req.query.courseId;
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
  const courseId = req.query.courseId;
  try {
    const course = await CourseModel.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.status(200).json({ message: 'Course details', course });
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
    if (user.enrolledCourses.map(String).includes(courseIdObjectId.toString())) {
      return res.status(400).json({ error: 'User is already enrolled in this course' });
    }
    user.enrolledCourses.push(courseIdObjectId);
    await user.save();
    course.enrollmentCount++;
    await course.save();
    res.status(200).json({ message: 'Enrolled in the course', course });
  } catch (error) {
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