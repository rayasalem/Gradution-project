import { Schema, model,Model, Document, Types } from 'mongoose';
import QuestionModel ,{IQuestion} from './questionSchema';

export interface IQuiz extends Document {
    quizId: string;
    title: string;
    description: string;
    duration?: number; 
    questions: IQuestion[];
    passingScore: number;
  }
  const quizSchema = new Schema<IQuiz>({
    quizId: {
      type: String,
      required: true,
    },
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
    questions: {
      type: [QuestionModel],
      required: true,
    },
    passingScore: {
      type: Number,
      required: true,
    },
  });
  
  const QuizModel =  model<IQuiz>('Quiz', quizSchema);
export default QuizModel;