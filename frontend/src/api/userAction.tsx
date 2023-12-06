import axiosInstance from "../utils/axiosUtils";
import { AxiosResponse } from "axios";

interface IUserBitsAndHearts {
  actionType: 'lesson' | 'elementaryLevel' | 'proficientLevel' | 'advancedLevel';
}
interface ICourse {
  title: string;
  description: string; 
  savedcourse?: {
    _id: string;
  };
}
interface IUserQuiz{
  title: string;
  course: string; 
  questions?: string[]; 
  quizId:string;
  passingScore:number;
  savedQuiz?:{
    _id: string;
  }
}
interface IUserLesson {
  title: string;
  order: number;
  course: string; 
  questions?: string[]; 
  lesson?:{
    _id: string;
  }
}
interface IQuestion{
 questionId:string;
  text: string;
  type: string;
  options?: string[];
  correctAnswer: string;
  quizId?:string;
  lessonId?:string;
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

export const createQuiz = async (userQuiz: IUserQuiz): Promise<IUserQuiz | undefined> => {
  try {
    const response: AxiosResponse<IUserQuiz> | undefined = await axiosInstance.post(`/api/v1/quiz/createquiz/${userQuiz.course}`, userQuiz);

    if (response && response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error('create quiz error:', error);
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

export const createBitAndHeartUser = async (): Promise<IUserBitsAndHearts | undefined> => {
  try {
    const response: AxiosResponse<IUserBitsAndHearts> = await axiosInstance.post('/api/v1/user-bits-and-hearts/newBit');

    if (response.status === 200) {
      console.log('Hearts created successfully');
      return response.data;
    } else {
      throw new Error('Failed to create user bits and hearts');
    }
  } catch (error) {
    console.log("create user bits and hearts error:", error);
    throw error;
  }
};
export const earnBitsBitsAndHearts = async (userBitsAndHeartsData: IUserBitsAndHearts): Promise<IUserBitsAndHearts | undefined> => {
  try {
    const response: AxiosResponse<IUserBitsAndHearts> = await axiosInstance.post('/api/v1/user-bits-and-hearts/bit', userBitsAndHeartsData);

    if (response.status === 200) {
      console.log('Hearts earned successfully');
      return response.data;
    } else {
      throw new Error('Failed to earned bits and hearts');
    }
  } catch (error) {
    console.log("earned bits and hearts error:", error);
    throw error;
  }
};
export const deductHeartUser = async (): Promise<{ updatedHeartsCount: number } | undefined> => {
  try {
    const response = await axiosInstance.patch('/api/v1/user-bits-and-hearts/deduct-heart');

    if (response.status === 200) {
      console.log('Hearts deducted successfully');
      return { updatedHeartsCount: response.data.updatedHeartsCount };
    } else {
      throw new Error('Failed to deduct hearts');
    }
  } catch (error) {
    console.log("Failed to deduct hearts:", error);
    throw error;
  }
};
export const deductBitUser = async (): Promise<{ updatedBitsCount: number } | undefined> => {
  try {
    const response = await axiosInstance.patch('/api/v1/user-bits-and-hearts/deduct-bit');

    if (response.status === 200) {
      console.log('Bits deducted successfully');
      return { updatedBitsCount: response.data.updatedBitsCount };
    } else {
      throw new Error('Failed to deduct Bits');
    }
  } catch (error) {
    console.log("Failed to deduct Bits:", error);
    throw error;
  }
};
export const updateUserHearts = async () => {
  try {
    const response = await axiosInstance.patch('/api/v1/user-bits-and-hearts/update-hearts');

    if (response.status === 200) {
      console.log('Hearts updated successfully');
      return response.data;
    } else {
      throw new Error('Failed to update hearts');
    }
  } catch (error) {
    console.error('Failed to update hearts:', error);
    throw error;
  }
};
export const updateUserHeartsat = async () => {
  try {
    const response = await axiosInstance.patch('/api/v1/user-bits-and-hearts/update-heartsat');

    if (response.status === 200) {
      console.log('Hearts updated successfully');
      return response.data;
    } else {
      throw new Error('Failed to update hearts');
    }
  } catch (error) {
    console.error('Failed to update hearts:', error);
    throw error;
  }
};
export const retrieveUserBitsAndHearts = async () => {
  try {
    const response = await axiosInstance.get('/api/v1/user-bits-and-hearts/');

    if (response.status === 200) {
      console.log('retrieve bits and hearts successfully');
      
      const { bitsCount, heartsCount } = response.data;
      
      return { bitsCount, heartsCount }; 
    } else {
      throw new Error('Failed to retrieve bits and hearts');
    }
  } catch (error) {
    console.error('Failed to retrieve bits and hearts:', error);
    throw error;
  }
};