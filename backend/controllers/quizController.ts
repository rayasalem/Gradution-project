import { Request,Response } from "express";
import QuizModel,{IQuiz}  from '../db/schemas/quizSchema';
import CourseModel from "../db/schemas/courseSchema";
import mongoose, { Types } from 'mongoose';
export const creatQuiz=async  (req :Request,res:Response) =>{
    try{
        const courseId = req.params.courseId;
        const {order, title, passingScore  } = req.body;
        const course = await CourseModel.findById(courseId);
        if (!course) {
          return res.status(404).json({ error: 'Course not found' });
        }
        const existingQuiz = await QuizModel.findOne({ title });

    if (existingQuiz) {
      return res.status(400).json({ error: 'Quiz with this title already exists' });
    }
        const newQuiz :IQuiz=  new QuizModel({order,title,passingScore,course: courseId,});
        const savedQuiz=await newQuiz.save();
        course.quizzes.push(newQuiz._id); 
        await course.save();
        res.status(201).json({message :"sucessfull",savedQuiz});
    }
catch(err){
    console.error(err);
res.status(500).json({ message: 'Server error' });
}
}
export const getQuiz= async(req:Request ,res:Response) =>{
  try{
 const {quizId} = req.params;
 const Quiz: IQuiz|null = await QuizModel.findById(quizId);
if(!Quiz){
    return res.status(404).json({ message: 'Quiz not found' });
}
return res.status(200).json({message:"Quiz found",Quiz});
}
catch(error){
    console.error(error);
    res.status(500).json({ message: 'Server error' });
}
}
export const deleteQuiz = async (req: Request, res: Response) => {
    try {
      const { quizId } = req.params;
      const deletedQuiz: IQuiz | null = await QuizModel.findByIdAndRemove(quizId);
      if (!deletedQuiz) {
        return res.status(404).json({ message: 'Quiz not found' });
      }
      await CourseModel.updateMany({}, { $pull: { quizzes: quizId } })
      res.json({ message: 'Quiz deleted' });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
export const listQuizzesInCourse = async (req: Request, res: Response) => {
    const { courseId } = req.params;
    const userId=req.user?.id
    try {
      const Quiz = await QuizModel.aggregate([
        {
          $match: {
            course: mongoose.Types.ObjectId.createFromHexString(courseId),
          },
        },
        {
          $lookup: {
            from: 'userprogresses',
            let: { quizId: '$_id' },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ['$quiz_id', '$$quizId'] },
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
            course: 1,
            questions: 1,
            order: 1,
            is_completed: { $ifNull: [{ $arrayElemAt: ['$userProgress.is_completed', 0] }, false] },
          },
        },
      ]);
  
      res.status(200).json({ message: 'List of quizzes in the course', Quiz });
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve quizzes in the course' });
    }
  };
export const editQuiz = async (req: Request, res: Response) => {
    const {quizId} = req.params;
    try {
      const updatedLesson = await QuizModel.findByIdAndUpdate(quizId, req.body, { new: true });
  
      if (!updatedLesson) {
        return res.status(404).json({ error: 'Lesson not found' });
      }
  
      res.status(200).json({ message: 'Lesson details updated', lesson: updatedLesson });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update lesson details' });
    }
  };
export const listQuestionsInQuiz = async (req: Request, res: Response) => {
    try{
      const {quizId}=req.params
        const Quiz  =  await QuizModel.findOne({ _id: quizId }).populate({
          path: 'questions',
          options: { sort: { order: 1 } }, 
        });
        res.status(200).json({ message: 'List of questions in the Quiz', questions: Quiz?.questions });
      } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
  };
  
  
  
  
  
  



