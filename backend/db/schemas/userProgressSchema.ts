import { Schema, model, Types, Document } from 'mongoose';
export interface IUserProgress extends Document {
  user_id: Types.ObjectId | string; 
  lesson_id: Types.ObjectId | string; 
  quiz_id: Types.ObjectId | string; 
  is_completed: boolean; 
  timestamp: Date; 
}

const userProgressSchema: Schema = new Schema<IUserProgress>({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  lesson_id: {
    type: Schema.Types.ObjectId,
    ref: 'Lesson', 
  },
  quiz_id: {
    type: Schema.Types.ObjectId,
    ref: 'Quiz', 
  },
  is_completed: {
    type: Boolean,
    default: false, 
  },
  timestamp: {
    type: Date,
    default: Date.now, 
  },
});

const UserProgress = model<IUserProgress>('UserProgress', userProgressSchema);

export default UserProgress;
