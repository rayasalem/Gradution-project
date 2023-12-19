import {Response ,Request} from 'express';
import QuestionModel,{IQuestion} from '../db/schemas/questionSchema';
import QuizModel,{IQuiz} from '../db/schemas/quizSchema';
import Lesson, { ILesson } from '../db/schemas/lessonSchema';

export const creatQuestion = async (req: Request, res: Response) => {
  try {
    const { questionOrder, text, type, options, correctAnswer, quizId, lessonId } = req.body;

    const existingQuestion = await QuestionModel.findOne({ questionOrder });

    if (existingQuestion) {
      return res.status(400).json({ message: 'Question with the same ID already exists' });
    }

    const newQuestion: IQuestion = new QuestionModel({ questionOrder, text, type, options, correctAnswer });
    const savedQuestion: IQuestion = await newQuestion.save();

    if (quizId) {
      const quiz: IQuiz | null = await QuizModel.findOneAndUpdate(
        { _id:quizId },
        { $push: { questions: savedQuestion._id } },
        { new: true }
      );
      if (!quiz) {
        return res.status(404).json({ message: 'Quiz not found' });
      }
    }
    if (lessonId) {
      const lesson: ILesson | null = await Lesson.findOneAndUpdate(
        { _id: lessonId },
        { $push: { questions: savedQuestion._id } },
        { new: true }
      );
      if (!lesson) {
        return res.status(404).json({ message: 'Lesson not found' });
      }
    }

    res.status(201).json(savedQuestion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
//  export const creatQuestion = async(req:Request,res:Response)=>{
//     try{
//       const { questionId, text, type, options, correctAnswer } = req.body;

//       const existingQuestion = await QuestionModel.findOne({ questionId });
  
//       if (existingQuestion) {
//         return res.status(400).json({ message: 'Question with the same ID already exists' });
//       }
  
//       const newQuestion: IQuestion | null = await new QuestionModel({ questionId, text, type, options, correctAnswer });
//       const savedQuestion: IQuestion = await newQuestion.save();
  
//       res.status(201).json(savedQuestion);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
// }
export const getQuestion= async (req: Request, res: Response) => {
    try {
        const { questionId } = req.query;
        const question: IQuestion | null = await QuestionModel.findById(questionId);
        if (!question) {
          return res.status(404).json({ message: 'Question not found' });
        }
        res.json(question);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
    };

export const updateQuestion=async(req: Request, res: Response) =>{
    try{
        const {questionId}= req.query;
        const { text, type, options, correctAnswer } = req.body;
        const updatedQuestion: IQuestion | null = await QuestionModel.findByIdAndUpdate(questionId, { text, type, options, correctAnswer }, { new: true });
        if (!updatedQuestion) {
          return res.status(404).json({ message: 'Question not found' });
        }
        res.json(updatedQuestion);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
    };

export const deleteQuestion = async (req: Request, res: Response) => {
        try {
          const { questionId } = req.query;
          const deletedQuestion: IQuestion | null = await QuestionModel.findByIdAndRemove(questionId);
          if (!deletedQuestion) {
            return res.status(404).json({ message: 'Question not found' });
          }
          res.json({ message: 'Question deleted' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Server error' });
        }
      };
      
      
      
      
      
      