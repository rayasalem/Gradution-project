import { Schema, model,Model, Document, Types } from 'mongoose';

export interface IQuiz extends Document {
    title: string;
    description: string;
    duration?: number; 
    questions: Types.ObjectId[];
    passingScore: number;
  } 
  
  const quizSchema = new Schema<IQuiz>({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
    },
    questions: [{
      type:Schema.Types.ObjectId,
     ref: 'QuestionModel',
    }],
    passingScore: {
      type: Number,
      required: true,
    },
  });
  
  const QuizModel =  model<IQuiz>('Quiz', quizSchema);
export default QuizModel;