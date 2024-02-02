import { Schema, model, Model, Document, Types } from 'mongoose';

interface IRating {
  userId: string;
  rating: number;
}

export interface ICourse extends Document {
  title: string;
  description: string;
  author: Types.ObjectId;
  createdDate: Date;
  category: Types.ObjectId;
  difficultyLevel: string;
  rating: number;
  enrollmentCount: number;
  lessons: Types.ObjectId[];
  quizzes: Types.ObjectId[];
  ratings: IRating[];
  is_completed: boolean;
}

const courseSchema= new Schema<ICourse>({
  title: {
    type: String,
    required: true,
  },
  category:{
   type:Schema.Types.ObjectId,
   ref :'category',
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type:  Schema.Types.ObjectId,
    ref: 'User', 
  },

  rating: {
    type: Number,
    default: 0,
  },
  enrollmentCount: {
    type: Number,
    default: 0,
  },
  lessons: [{
    type: Types.ObjectId,
    ref: 'Lesson',
  }],
  quizzes: [{
    type: Types.ObjectId,
    ref: 'Quiz', 
  }],
  ratings: [
    {
      userId: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
    },
  ],is_completed: {
    type: Boolean,
    default: false, 
  }
},{ timestamps: true });

const CourseModel: Model<ICourse> = model<ICourse>('Course', courseSchema);
export default CourseModel;