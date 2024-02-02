import { Schema, model, Model, Document, Types } from 'mongoose';

export interface ITextSlide extends Document {
  lessonId: Types.ObjectId | string;
  type: string;
  order: number;
  text: string;
}

const textSlideSchema: Schema<ITextSlide> = new Schema({

  lessonId: {
    type: Schema.Types.ObjectId,
    ref: 'lessonSchema', 
  },
  type: {
    type: String,
    default: 'text',
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const TextSlideModel = model<ITextSlide>('TextSlide', textSlideSchema);

export default TextSlideModel;