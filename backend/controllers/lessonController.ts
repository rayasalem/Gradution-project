import { Request, Response } from 'express';
import Lesson,{ILesson} from '../db/schemas/lessonSchema';
import Course from '../db/schemas/courseSchema';
import CourseModel from '../db/schemas/courseSchema';
import mongoose, { Types } from 'mongoose';

export const createLesson = async (req: Request, res: Response) => {
  try {
    const courseId = req.params.courseId; 
    const { title, order, questions } = req.body;
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    const existingLesson = await Lesson.findOne({ title });

    if (existingLesson) {
      return res.status(400).json({ error: 'Lesson with this title already exists' });
    }
    const newLesson: ILesson = new Lesson({
      title,
      order,
      course: courseId, 
      questions: [],
    });

    await newLesson.save();

    course.lessons.push(newLesson._id); 
    await course.save();
    if (questions && questions.length > 0) {
      newLesson.questions = questions;
      await newLesson.save();
    }
    res.status(201).json({ message: 'Lesson created successfully', lesson: newLesson });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create a new lesson' });
  }
};
export const editLesson = async (req: Request, res: Response) => {
  const {lessonId} = req.params;
  try {
    const updatedLesson = await Lesson.findByIdAndUpdate(lessonId, req.body, { new: true });

    if (!updatedLesson) {
      return res.status(404).json({ error: 'Lesson not found' });
    }

    res.status(200).json({ message: 'Lesson details updated', lesson: updatedLesson });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update lesson details' });
  }
};
export const deleteLesson = async (req: Request, res: Response) => {
  const {lessonId} = req.params;
  try {
    const deletedLesson = await Lesson.findByIdAndRemove(lessonId);

    if (!deletedLesson) {
      return res.status(404).json({ error: 'Lesson not found' });
    }
    await CourseModel.updateMany({}, { $pull: { lessons: lessonId } });
    res.status(200).json({ error: ' delete the lesson' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the lesson' });
  }
};
export const viewLessonDetails = async (req: Request, res: Response) => {
  const {lessonId} = req.params;
    try {
    const lesson = await Lesson.findById(lessonId);
    if (!lesson) {
      return res.status(404).json({ error: 'Lesson not found' });
    }
    res.status(200).json({ message: 'Lesson details', lesson });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve lesson details' });
  }
};
export const listLessonsInCourse = async (req: Request, res: Response) => {
  const { courseId} = req.params;
    const userId=req.user?.id
  try {
    const lessons = await Lesson.aggregate([
      {
        $match: {
          course: mongoose.Types.ObjectId.createFromHexString(courseId),
        },
      },
      {
        $lookup: {
          from: 'userprogresses',
          let: { lessonId: '$_id' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ['$lesson_id', '$$lessonId'] },
                    { $eq: ['$user_id', mongoose.Types.ObjectId.createFromHexString(userId)] },
                  ],
                },
              },
            },
          ],
          as: 'userProgress',
        },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          order: 1,
          course: 1,
          questions: 1,
          is_completed: { $ifNull: [{ $arrayElemAt: ['$userProgress.is_completed', 0] }, false] },
        },
      },
    ]);

    res.status(200).json({ message: 'List of lessons in the course', lessons });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve lessons in the course' });
  }
};
export const listQuestionsInLesson = async (req: Request, res: Response) => {
  try{
    const {lessonId}=req.params
      const lesson  =  await Lesson.findOne({ _id: lessonId }).populate({
        path: 'questions',
        options: { sort: { order: 1 } }, 
      });
      res.status(200).json({ message: 'List of questions in the Lesson', questions: lesson?.questions });
    } catch (error) {
  console.error(error);
  res.status(500).json({ message: 'Server error' });
}
};
