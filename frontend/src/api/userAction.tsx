import axiosInstance from "../utils/axiosUtils";
import { AxiosResponse } from "axios";

interface IUserBitsAndHearts {
  user_id: string;
  bits_earned: number;
  hearts_earned: number;
  action_type: 'lesson' | 'codeProject' | 'codeCoach' | 'codeRepo' | 'codeChallenge';
}
interface ICourse {
  title: string;
  description: string; 
  savedcourse?: {
    _id: string;
  };
}
interface IUserLesson {
  title: string;
  order: number;
  course: string; 
  questions?: string[]; 
}
interface IQuestion{
 questionId:string;
  text: string;
  type: string;
  options?: string[];
  correctAnswer: string;
}
export const createCourse = async (course: ICourse): Promise<ICourse | undefined> => {
  try {
    const response: AxiosResponse<ICourse> = await axiosInstance.post('/api/v1/course/createCourse', course);

    if (response.status === 201) {
      return response.data;
    } 
  } catch (error) {
    console.error("Create course error:", error);
    throw error;
  }
};
export const createLesson = async (userLesson: IUserLesson): Promise<IUserLesson | undefined> => {
  try {
    const response: AxiosResponse<IUserLesson> = await axiosInstance.post(`/api/v1/lesson/createLesson/${userLesson.course}`, userLesson);

    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error('create lesson error:', error);
    throw error;
  }
};


export const createQuestion = async (userQuestion: IQuestion): Promise<IQuestion | undefined> => {
  try {
    const response: AxiosResponse<IQuestion> = await axiosInstance.post('/api/v1/question/createquestion', userQuestion);

    if (response.status === 201) {
      return response.data;
    } 
  } catch (error) {
    console.log("create question error:", error);
    throw error;
  }
};
export const createUserBitsAndHearts = async (userBitsAndHeartsData: IUserBitsAndHearts): Promise<IUserBitsAndHearts | undefined> => {
  try {
    const response: AxiosResponse<IUserBitsAndHearts> = await axiosInstance.post('/your/api/endpoint', userBitsAndHeartsData);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Failed to create user bits and hearts');
    }
  } catch (error) {
    console.log("create user bits and hearts error:", error);
    throw error;
  }
};