import { Schema, model, Document,Types } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  content: string;
  author: Types.ObjectId;
  topic: string;
  timeToRead: number;
  views:number;
  blogImages: string;
  sections:[{
    subtitle: String,
    content: String,
    order: Number,
  }];
}

const blogSchema = new Schema<IBlog>({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type:  Schema.Types.ObjectId,
    ref: 'User', 
  },
  topic: {
    type: String,
    required: true,
  },
  timeToRead: {
    type: Number,
    required: true,
  }, views: {
    type: Number,
    default: 0, 
  },
  sections: [{
    subtitle: String,
    content: String,
    order: Number,
  }],
  blogImages:String
}, { timestamps: true });

const BlogModel = model<IBlog>('Blog', blogSchema);

export default BlogModel;
