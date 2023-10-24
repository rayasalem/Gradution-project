import { Schema, model,Model, Document, Types } from 'mongoose';

export interface IQuiz extends Document {
    quizId: string;
    title: string;
    description: string;
    duration?: number; 
    questions: Types.ObjectId[];
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
    questions: [{
      type:Schema.Types.ObjectId,
     ref: 'QuestionModel',
    }],
    passingScore: {
      type: Number,
      required: true,
    },
  },{ timestamps: true });
  
  const QuizModel =  model<IQuiz>('Quiz', quizSchema);
export default QuizModel;