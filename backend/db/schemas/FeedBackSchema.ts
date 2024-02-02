import { Schema, model, Model, Document, Types } from 'mongoose';

export interface IFeed extends Document {
  text: string;
  isRead:boolean;
}

const FeedBackSchema: Schema<IFeed> = new Schema({
  text: {
    type: String,
    required: true,
  },
  isRead: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const FeedBackModel = model<IFeed>('FeedBack', FeedBackSchema);

export default FeedBackModel;