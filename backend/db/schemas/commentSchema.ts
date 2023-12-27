import { Schema, model, Document, Types ,ObjectId} from 'mongoose';

export interface IComment extends Document {
  text: string;
  author: Types.ObjectId; 
  PostId: Types.ObjectId; 
  createdAt: Date;
  likes: ObjectId[];
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
    likes: [
      {
        type: Types.ObjectId,
        ref: 'User',
      },
    ]
  },
  { timestamps: true }
);

const CommentModel = model<IComment>('Comment', commentSchema);

export default CommentModel;
