import { Schema, model,Model, Document, Types } from 'mongoose';


 export interface IQuizTaker {
    userId: string;
    quizId: string;
    answers: { questionId: string; selectedOption: string }[];
  }
const quizTakerSchema = new Schema<IQuizTaker>({
    userId: {
      type: String,
      required: true,
    },
    quizId: {
      type: String,
      required: true,
    },
    answers: [
      {
        questionId: {
          type: String,
          required: true,
        },
        selectedOption: {
          type: String,
          required: true,
        },
      },
    ],
  },{ timestamps: true });

  const QuizTakerModel = model<IQuizTaker>('QuizTaker', quizTakerSchema);
  export default QuizTakerModel;