import { Schema, model,Model, Document, Types } from 'mongoose';

export interface ILesson extends Document {
  title: string;
  order: number;
  course: Types.ObjectId | string;
  questions: Types.ObjectId[];
  is_completed:boolean;
}
const lessonSchema: Schema = new Schema<ILesson>({
  title: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course', 
  },
  questions: [{
    type: Schema.Types.ObjectId,
    ref: 'Question', 
  }],
  is_completed: {
    type: Boolean,
    default: false, 
  }
});

const Lesson:Model<ILesson> = model<ILesson>('Lesson', lessonSchema);

export default Lesson;
