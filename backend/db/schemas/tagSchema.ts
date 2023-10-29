import mongoose, { Schema, Document } from 'mongoose';

export interface ITag extends Document {
  name: string;
  description: string;
}

const tagSchema: Schema<ITag> = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const TagModel = mongoose.model<ITag>('Tag', tagSchema);

export default TagModel;