import { Schema, model, Document, Types } from 'mongoose';

export interface Ichat extends Document {
    lessonId: Types.ObjectId | string;
    messages:[{
        text: String,
        author: Types.ObjectId,
      }];
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
  },{ timestamps: true });
  
  const ChatModel =  model<Ichat>('Chat', ChatSchema);
export default ChatModel;