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
  category: string;
  difficultyLevel: string;
  rating: number;
  enrollmentCount: number;
  lessons: Types.ObjectId[];
  quizzes: Types.ObjectId[];
  ratings: IRating[];
}

const courseSchema= new Schema<ICourse>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type:  Schema.Types.ObjectId,
    ref: 'User', 
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    required: true,
  },
  difficultyLevel: {
    type: String,
    required: true,
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
    ref: 'Lesson', // Replace 'Lesson' with the actual reference model name
  }],
  quizzes: [{
    type: Types.ObjectId,
    ref: 'Quiz', // Replace 'Quiz' with the actual reference model name
  }],
  // Include the ratings array in the schema
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
  ],
});

const Course: Model<ICourse> = model<ICourse>('Course', courseSchema);

export default Course;
