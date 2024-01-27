import { Schema, model, Document, Types } from 'mongoose';
export interface IEnrollment extends Document {
    courseId: Types.ObjectId | string;
    userId: Types.ObjectId | string; 
  } 
  const EnrollmentSchema = new Schema<IEnrollment>({ 
  courseId: {
    type: Schema.Types.ObjectId,
    ref: 'Course', 
  },
  userId:{
    type:  Schema.Types.ObjectId,
    ref: 'User',
  }
  },{ timestamps: true });
  
  const EnrollmentModel =  model<IEnrollment>('Enrollment', EnrollmentSchema);
export default EnrollmentModel;