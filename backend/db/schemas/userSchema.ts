import { Schema, Document, model, Types } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  confirmEmail: boolean;
  dateOfBirth: Date | null; 
  role: 'admin' | 'user';
  enrolledCourses: Types.ObjectId[]; 
  completedLessons: Types.ObjectId[]; 
  ratings: { courseId: Types.ObjectId; rating: number }[]; 
  country?: string | null;
  avatar?: string | null; 
  bio?: string | null; 
  profilepic?: string | null;
  sendCode?: string | null; 
}

const userSchema: Schema = new Schema<IUser>({
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
  confirmEmail: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  enrolledCourses: [{ type: Types.ObjectId, ref: 'CourseModel' }],
  completedLessons: [{ type: Types.ObjectId, ref: 'Lesson' }],
  ratings: [
    {
      courseId: { type: Types.ObjectId, ref: 'CourseModel' },
      rating: Number,
    },
  ],
  dateOfBirth: {
    type: Date,
  },
  country: String,
  avatar: String, 
  bio: String,
  profilepic: String,
  sendCode: {
    type: String,
    default: null,
  }
}, { timestamps: true });

const userModel = model<IUser>('User', userSchema);

export default userModel;
