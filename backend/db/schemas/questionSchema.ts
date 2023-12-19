import {model,Schema,Document }from 'mongoose';
export interface IQuestion extends Document{
  questionOrder: number;
    text: string;
    type: string; 
    options?: string[]; 
    correctAnswer: string;
  }    

const questionSchema = new Schema<IQuestion>({
    questionOrder: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    options: {
      type: [String],
    },
    correctAnswer: {
      type: String,
      required: true,
    },
  });
  const QuestionModel = model<IQuestion>('Question', questionSchema);
export default QuestionModel;