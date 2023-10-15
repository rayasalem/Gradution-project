import {Model,model,Schema,Document }from 'mongoose';
export interface IQuestion extends Document{
    questionId: string;
    text: string;
    type: string; 
    options?: string[]; 
    correctAnswer: string;
  }    

const questionSchema = new Schema<IQuestion>({
    questionId: {
      type: String,
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