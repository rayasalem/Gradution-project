import { Schema, model,Model, Document, Types } from 'mongoose';

export interface ILesson extends Document {
  title: string;
  content: string;
  order: number;
  course: Types.ObjectId | string;
}

const lessonSchema: Schema = new Schema<ILesson>({
  title: {
    type: String,
    required: true,
  },
  content: {
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
});

const Lesson:Model<ILesson> = model<ILesson>('Lesson', lessonSchema);

export default Lesson;
