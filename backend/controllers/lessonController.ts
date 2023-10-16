import { Request, Response } from 'express';
import Lesson,{ILesson} from '../db/schemas/lessonSchema';
import Course from '../db/schemas/courseSchema';

export const createLesson = async (req: Request, res: Response) => {
  try {
    const courseId = req.params.courseId; 
    const { title, content, order } = req.body;

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    const newLesson: ILesson = new Lesson({
      title,
      content,
      order,
      course: courseId, 
    });

    await newLesson.save();

    course.lessons.push(newLesson._id); 
    await course.save();

    res.status(201).json({ message: 'Lesson created successfully', lesson: newLesson });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create a new lesson' });
  }
};

export const editLesson = async (req: Request, res: Response) => {
  const lessonId = req.params.lessonId;
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
  const lessonId = req.params.lessonId;

  try {
    const deletedLesson = await Lesson.findByIdAndRemove(lessonId);

    if (!deletedLesson) {
      return res.status(404).json({ error: 'Lesson not found' });
    }

    res.status(204).send(); 
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the lesson' });
  }
};

export const viewLessonDetails = async (req: Request, res: Response) => {
  const lessonId = req.params.lessonId;
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
  const courseId = req.params.courseId;
  try {
    const lessons = await Lesson.find({ course: courseId });

    res.status(200).json({ message: 'List of lessons in the course', lessons });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve lessons in the course' });
  }
};
