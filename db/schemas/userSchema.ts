import { Schema, Document, model, Types } from 'mongoose';

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  confirmed: boolean;
  createdAt: Date;
  updatedAt: Date;
  role: 'admin' | 'user';
  enrolledCourses: Types.ObjectId[]; 
  completedLessons: Types.ObjectId[]; 
  ratings: { courseId: Types.ObjectId; rating: number }[]; 
}

const userSchema: Schema = new Schema<User>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  enrolledCourses: [{ type: Types.ObjectId, ref: 'Course' }],
  completedLessons: [{ type: Types.ObjectId, ref: 'Lesson' }],
  ratings: [
    {
      courseId: { type: Types.ObjectId, ref: 'Course' },
      rating: Number,
    },
  ],
});

const userModel = model<User>('User', userSchema);

export default userModel;
