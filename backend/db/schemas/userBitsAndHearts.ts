import { Schema, model, Document, Types } from 'mongoose';

export interface IUserBitsAndHearts extends Document {
  user_id: Types.ObjectId | string;
  bits_earned: number;
  hearts_earned: number;
  action_type: 'lesson' | 'elementaryLevel' | 'proficientLevel' | 'advancedLevel' ;
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
    default:3 ,
  },
  action_type: {
    type: String,
    required: true,
    enum: ['lesson', 'elementaryLevel','proficientLevel','advancedLevel'],
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const UserBitsAndHearts = model<IUserBitsAndHearts>('UserBitsAndHearts', userBitsAndHeartsSchema);

export default UserBitsAndHearts;
