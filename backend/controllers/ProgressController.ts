import { Request, Response } from 'express';
import Course, { ICourse } from '../db/schemas/courseSchema';
import UserProgress,{IUserProgress}  from './../db/schemas/userProgressSchema';
import Lesson from '../db/schemas/lessonSchema';
import QuizModel from '../db/schemas/quizSchema';
interface ProgressData {
    is_completed: boolean;
    timestamp: Date;
    lesson?: IL; 
    quiz?: IQ; 
  }
export interface IL extends Document {
    title: string;
  }
export interface IQ extends Document {
    title: string;
  }
export const trackCourseProgress = async (req: Request, res: Response) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: 'Authentication required' });
          }
        const userId = req.user._id   
        const {courseId} = req.params; 
      const course = await Course.findById(courseId);
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
      for (const lesson of course.lessons) {
        const lessonProgress = await UserProgress.findOne({ userId, lesson_id: lesson._id });
        if (!lessonProgress) {
          await UserProgress.create({ user_id:userId, lesson_id: lesson._id, is_completed: false }); 
        }
      }
      for (const quiz of course.quizzes) {
        const quizProgress = await UserProgress.findOne({ userId, quiz_id: quiz._id });
        if (!quizProgress) {
          await UserProgress.create({ user_id:userId, quiz_id: quiz._id, is_completed: false }); 
        }
      }
      res.status(200).json({ message: 'Course progress tracked successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };

export const completeLesson = async (req: Request, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: 'Authentication required' });
      }
      const userId = req.user._id;
      const lessonId = req.params.lessonId;
      const userProgress = await UserProgress.findOne({
        user_id: userId,
        lesson_id: lessonId,
      });
      if (!userProgress) {
        return res.status(404).json({ message: 'Progress entry not found' });
      }
      userProgress.is_completed = true;
      await userProgress.save();
      await Lesson.findByIdAndUpdate(lessonId, { is_completed: true });
      res.json({ message: 'Lesson marked as completed' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error', error });
    }
  };
export const completeQuiz = async (req: Request, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: 'Authentication required' });
      }
      const userId = req.user._id;
      const quizId = req.params.quizId; 
      const userProgress = await UserProgress.findOne({
        user_id: userId,
        quiz_id: quizId,
      });
      if (!userProgress) {
        return res.status(404).json({ message: 'Progress entry not found' });
      }
      userProgress.is_completed = true;
      await userProgress.save();
      await QuizModel.findByIdAndUpdate(quizId, { is_completed: true });
      res.json({ message: 'Quiz marked as completed' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  }; 
export const deleteProgress = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const { deletedCount } = await UserProgress.deleteMany({ user_id: userId });
        if (deletedCount === 0) {
            return res.status(404).json({ message: 'Progress entries not found' });
        }
        res.json({ message: 'All progress entries deleted successfully' });
    } catch (error) {
        console.error('Error deleting progress entries:', error);
        res.status(500).json({ message: 'Server error', error });
    }
};
export const checkCourseCompletion = async (req: Request, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: 'Authentication required' });
      }
      const userId = req.user._id;
      const courseId = req.params.courseId;
      const course = await Course.findById(courseId)
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
      const lessonsPromises = course.lessons.map(async (lesson) => {
        const entry = await UserProgress.findOne({
          user_id: userId,
          lesson_id: lesson._id,
          is_completed: false
        });
        return !entry;
      });
      const quizzesPromises = course.quizzes.map(async (quiz) => {
        const entry = await UserProgress.findOne({
          user_id: userId,
          quiz_id: quiz._id,
          is_completed: false
        });
        return !entry;
      });
      const [lessonsCompleted, quizzesCompleted] = await Promise.all([
        Promise.all(lessonsPromises),
        Promise.all(quizzesPromises)
      ]);
      if (lessonsCompleted.every(Boolean) && quizzesCompleted.every(Boolean)) {
        const course = await Course.findById(courseId);
        if (course) {
          course.is_completed = true;
          await course.save();
        }
        res.json({ message: 'Course marked as completed' });
      } else {
        res.json({ message: 'Course not completed yet' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error', error });    }
  };
  
