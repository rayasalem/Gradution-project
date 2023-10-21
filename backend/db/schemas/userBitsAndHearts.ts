import { Schema, model, Document, Types } from 'mongoose';

export interface IUserBitsAndHearts extends Document {
  user_id: Types.ObjectId | string;
  bits_earned: number;
  hearts_earned: number;
  action_type: 'lesson' | 'codeProject' | 'codeCoach' | 'codeRepo' | 'codeChallenge';
  timestamp: Date;
}

const userBitsAndHeartsSchema: Schema = new Schema<IUserBitsAndHearts>({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
  bits_earned: {
    type: Number,
    required: true,
  },
  hearts_earned: {
    type: Number,
    required: true,
  },
  action_type: {
    type: String,
    required: true,
    enum: ['lesson', 'codeProject', 'codeCoach','codeRepo','codeChallenge'],
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const UserBitsAndHearts = model<IUserBitsAndHearts>('UserBitsAndHearts', userBitsAndHeartsSchema);

export default UserBitsAndHearts;
