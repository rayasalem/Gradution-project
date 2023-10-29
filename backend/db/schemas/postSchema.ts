import { Schema, model, Types, Document, ObjectId } from 'mongoose';

export interface IPost extends Document {
  title: string;
  content: string;
  tags: ObjectId[]; 
  author: ObjectId;
  timestamp: Date;
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
    tags: [
      {
        type: Types.ObjectId,
        ref: 'Tag',
        required: true,
      }],
    author: {
      type: Types.ObjectId,
      ref: 'User',
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
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
  });
  

const Post = model<IPost>('Post', postSchema);

export default Post;