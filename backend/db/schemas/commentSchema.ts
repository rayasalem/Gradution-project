import { Schema, model, Document, Types } from 'mongoose';

export interface IComment extends Document {
  text: string;
  author: Types.ObjectId; 
  PostId: Types.ObjectId; 
  createdAt: Date;
  updatedAt: Date;
}

const commentSchema = new Schema<IComment>(
  {
    text: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User', 
      required: true,
    },
    PostId: {
      type: Schema.Types.ObjectId,
      ref: 'Post', 
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const CommentModel = model<IComment>('Comment', commentSchema);

export default CommentModel;
