import {Response ,Request} from 'express';
import QuestionModel,{IQuestion} from '../db/schemas/questionSchema';

 export const creatQuestion = async(req:Request,res:Response)=>{
    try{
  const { questionId, text, type, options, correctAnswer } = req.body;
   const newQuestion: IQuestion | null  = await new QuestionModel({ questionId, text, type, options, correctAnswer });
   const savedQuestion: IQuestion = await newQuestion.save();
   res.status(201).json(savedQuestion);
 } catch (error) {
   console.error(error);
   res.status(500).json({ message: 'Server error' });

}
}
export const getQuestion= async (req: Request, res: Response) => {
    try {
        const { questionId } = req.params;
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
 export const listQuestions = async (req: Request, res: Response) => {
    try{
        const questions :IQuestion[] = await QuestionModel.find({});
    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
export const updateQuestion=async(req: Request, res: Response) =>{
    try{
        const {questionId}= req.params;
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
          const { questionId } = req.params;
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
      
      
      
      
      
      