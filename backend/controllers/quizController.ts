import { Request,request,response,Response } from "express";
import QuizModel,{IQuiz}  from '../db/schemas/quizSchema';
import CourseModel from "../db/schemas/courseSchema";

export const creatQuiz=async  (req :Request,res:Response) =>{
    try{
        const {courseId} = req.query;
        const {quizId, title, description, duration, passingScore } = req.body;
        const newQuiz :IQuiz=  new QuizModel({quizId,title, description, duration, passingScore});
        const savedQuiz=await newQuiz.save();
        res.status(201).json({message :"sucessfull",savedQuiz});
        const course = await CourseModel.findById(courseId);
        if (!course) {
          return res.status(404).json({ error: 'Course not found' });
        }
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
 const {quizId} = req.query;
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
export const listQuizzes= async(req:Request ,res:Response) =>{
    try{
 const quizId = req.query.quizId;
 const Quiz: IQuiz[] = await QuizModel.find({});
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
export const updateQuiz= async(req:Request ,res:Response)=>{
    try{
    const {quizId} = req.query;
    const { title, description, duration,  passingScore } = req.body;
    const updatedQuiz: IQuiz | null = await QuizModel.findByIdAndUpdate(quizId, { title, description, duration, passingScore }, { new: true });
    if (!updatedQuiz) {
        return res.status(404).json({ message: 'Quiz not found' });
      }
      res.json(updatedQuiz);
    }
     catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
export const deleteQuiz = async (req: Request, res: Response) => {
    try {
      const { quizId } = req.query;
      const deletedQuiz: IQuiz | null = await QuizModel.findByIdAndRemove(quizId);
      if (!deletedQuiz) {
        return res.status(404).json({ message: 'Quiz not found' });
      }
      res.json({ message: 'Quiz deleted' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  
  
  
  
  



