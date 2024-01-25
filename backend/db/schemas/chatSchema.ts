import { Schema, model, Document, Types } from 'mongoose';

export interface Ichat extends Document {
  lessonId: Types.ObjectId | string;
  messages: [{
    text: String;
    author: Types.ObjectId;
  }];
  count: number; // Add count field
}

const ChatSchema = new Schema<Ichat>({
  messages: [{
    text: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    }
  }],
  lessonId: {
    type: Schema.Types.ObjectId,
    ref: 'lessonSchema',
  },
  count: {
    type: Number, // Add count field definition
    default: 0,   // You can set a default value if needed
  },
}, { timestamps: true });

const ChatModel = model<Ichat>('Chat', ChatSchema);
export default ChatModel;
