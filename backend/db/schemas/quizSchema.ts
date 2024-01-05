import { Schema, model, Document, Types } from 'mongoose';

export interface IQuiz extends Document {
    order: number;
    title: string;
    description?: string;
    duration?: number; 
    questions: Types.ObjectId[];
    passingScore: number;
    course: Types.ObjectId | string;
    is_completed:boolean;
  } 

  const quizSchema = new Schema<IQuiz>({
    title: {
      type: String,
      required: true,
    }, order: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    duration: {
      type: Number,
    },
    course: {
      type: Schema.Types.ObjectId,
      ref: 'Course', 
    },
    questions: [{
      type:Schema.Types.ObjectId,
     ref: 'Question',
    }],
    passingScore: {
      type: Number,
      required: true,
    },
    is_completed: {
      type: Boolean,
      default: false, 
    }
  },{ timestamps: true });
  
  const QuizModel =  model<IQuiz>('Quiz', quizSchema);
export default QuizModel;