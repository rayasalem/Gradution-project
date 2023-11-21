import axiosInstance from "../utils/axiosUtils";
import { AxiosResponse } from "axios";

interface IUserBitsAndHearts {
  user_id: string;
  bits_earned: number;
  hearts_earned: number;
  action_type: 'lesson' | 'codeProject' | 'codeCoach' | 'codeRepo' | 'codeChallenge';
}
interface IUserLesson {
  title: string;
  content: string;
  order: number;
  course: string; 
  question: string; 
}
interface IQuestion{
 questionId:string;
  text: string;
  type: string;
  options?: string[];
  correctAnswer: string;
}
export const createLesson = async (userLesson: IUserLesson): Promise<IUserLesson | undefined> => {
  try {
    const response: AxiosResponse<IUserLesson> = await axiosInstance.post('/your/api/endpoint', userLesson);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Failed to create lesson');
    }
  } catch (error) {
    console.log("create lesson error:", error);
    throw error;
  }
};
export const createQuestion = async (userQuestion: IQuestion): Promise<IQuestion | undefined> => {
  try {
    const response: AxiosResponse<IQuestion> = await axiosInstance.post('/api/v1/question/createquestion', userQuestion);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Failed to create question');
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