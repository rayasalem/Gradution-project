import { Schema, model, Document, Types } from 'mongoose';
export interface IPost extends Document {
  title: string;
  content: string;
  author: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
  comments: Types.ObjectId[]
}

const postSchema = new Schema<IPost>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User', 
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    }, comments: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Comment', 
        },
      ],
  },
  { timestamps: true }
);

const PostModel = model<IPost>('Post', postSchema);

export default PostModel;
