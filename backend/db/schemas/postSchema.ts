import { Schema, model, Types, Document, ObjectId } from 'mongoose';

export interface IPost extends Document {
  title: string;
  content: string;
  tags: string[]; 
  author: ObjectId;
  likes: ObjectId[];
  comments: ObjectId[];
  created_at: Date;
}

const postSchema = new Schema<IPost>({
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags:{
        type:[String]
      },
    author: {
      type: Types.ObjectId,
      ref: 'User',
      required: true,
    },
    likes: [
      {
        type: Types.ObjectId,
        ref: 'User',
      },
    ],
    comments: [
      {
        type: Types.ObjectId,
        ref: 'Comment', 
        required: true,
      },
    ],
    created_at: {
      type: Date,
      default: Date.now,
    },
  }, { timestamps: true });
  

const Post = model<IPost>('Post', postSchema);

export default Post;