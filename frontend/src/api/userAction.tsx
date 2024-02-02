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
interface IUser {
  userName?: string;
  country?: string; 
  bio?:string;
  email?: string;
}
interface IUserQuiz{
  title: string;
  course: string; 
  questions?: string[]; 
  order?: number;
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
 questionId?:string;
 order?:number;
  text: string;
  type: string;
  options?: string[];
  correctAnswer: string;
  quizId?:string;
  lessonId?:string;
}
interface CourseDetailsResponse {
  course: {
    _id: string; 
  };
}
interface ITextSlide {
  lessonId: any;
  type: string;
  order: number;
  text: string;
}
interface Ipost{
  title:string;
  content:string;
  tags:string[];
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
export const EditCourse = async (courseId: string,course: ICourse): Promise<ICourse | undefined> => {
  try {
    const response: AxiosResponse<ICourse> = await axiosInstance.patch(`/api/v1/course/editCourse/${courseId}`, course);

    if (response.status === 200) {
      return response.data;
    } 
  } catch (error) {
    console.error("Create course error:", error);
    throw error;
  }
};
export const getCourseDetails2 = async (courseId: string) => {
  try {
    const response = await axiosInstance.get(`/api/v1/course/CourseDetail/${courseId}`);

    if (response.status === 201) {
      return response.data;
    } 
  } catch (error) {
    console.error("Create course error:", error);
    throw error;
  }
};
export const getlistCoures = async () => {
  try {
    const response= await axiosInstance.get(`/api/v1/Course/Courses`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('create quiz error:', error);
    throw error;
  }
};
export const getlistOfUserCoures = async () => {
  try {
    const response= await axiosInstance.get(`/api/v1/Course/coursesForUser`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('create quiz error:', error);
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
export const enrollInCourse = async (courseId: any) => {
  try {
    const response= await axiosInstance.post(`/api/v1/Course/enrollInCourse/${courseId}`);

    if (response && response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('create quiz error:', error);
    throw error;
  }
};
export const updateLesson = async (lessonId: string, title: string,order:number) => {
  try {
    const response = await axiosInstance.put(`/api/v1/lesson/editLesson/${lessonId}`, {
      title,order 
    });
    if (response.status === 200) {
      console.log('Success, Lesson updated password');
      return response.data;
    }
  } catch (error: any) {
    console.log("Update Lesson error:", error);
    throw error;
  }
};
export const getLessonById = async (lessonId: string) => {
  try {
    const response = await axiosInstance.get(`/api/v1/lesson/LessonDetails/${lessonId}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Failed to retrieve user details:', error);
    throw error;
  }
};
export const deleteLessonById = async (lessonId: string) => {
  try {
    const response = await axiosInstance.delete(`/api/v1/lesson/deleteLesson/${lessonId}`);
    if (response.status === 200) {
      console.log('Success, Lesson deleted ');
      return response.data;
    } else {
      throw new Error('Failed to Lesson deleted');
    }
  } catch (error) {
    console.error('Failed to Lesson deleted', error);
    throw error;
  }
};
export const updateQuiz = async (quizId:string,title: string,passingScore:number ,order:number) => {
  try {
    const response = await axiosInstance.put(`/api/v1/quiz/editQuiz/${quizId}`, {quizId,
      passingScore, title ,order
    });
    if (response.status === 200) {
      console.log('Success, Quiz updated password');
      return response.data;
    }
  } catch (error: any) {
    console.log("Update Quiz error:", error);
    throw error;
  }
};
export const getQuizById = async (quizId: string) => {
  try {
    const response = await axiosInstance.get(`/api/v1/quiz/getQuiz/${quizId}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Failed to retrieve user details:', error);
    throw error;
  }
};
export const deleteQuizById = async (quizId: string) => {
  try {
    const response = await axiosInstance.delete(`/api/v1/quiz/deleteQuiz/${quizId}`);
    if (response.status === 200) {
      console.log('Success, Quiz deleted ');
      return response.data;
    } else {
      throw new Error('Failed to Quiz deleted');
    }
  } catch (error) {
    console.error('Failed to Quiz deleted', error);
    throw error;
  }
};
export const getlistQuizsInCourse = async (courseId: any) => {
  try {
    const response = await axiosInstance.get(`/api/v1/quiz/Quizzes/${courseId}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("get course error:", error);
  }
};
export const getlistQustionInLesson = async (LessonId: any) => {
  try {
    const response = await axiosInstance.get(`/api/v1/lesson/questions/${LessonId}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("get course error:", error);
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
export const getQustionById = async (questionId: any) => {
  try {
    const response = await axiosInstance.get(`/api/v1/question/getQuestion/${questionId}`);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error('Failed to retrieve user details:', error);
    throw error;
  }
};
export const updateQustion = async (questionId: any, text: string,order:number,type:string,options:string[],correctAnswer:string) => {
  try {
    const response = await axiosInstance.put(`/api/v1/question/updateQuestion/${questionId}`, {
      text,order ,type,options,correctAnswer
    });
    if (response.status === 201) {
      console.log('Success, Qustion updated ');
      return response.data;
    }
  } catch (error: any) {
    console.log("Update Qustion error:", error);
    throw error;
  }
};
export const deleteQustionById = async (questionId: string) => {
  try {
    const response = await axiosInstance.delete(`/api/v1/question/deleteQuestion/${questionId}`);
    if (response.status === 201) {
      console.log('Success, Quiz deleted ');
      return response.data;
    } else {
      throw new Error('Failed to Quiz deleted');
    }
  } catch (error) {
    console.error('Failed to Quiz deleted', error);
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
export const uploadImage = async (file: any) => {
  try {
    const formData = new FormData();
    formData.append('image', file);

    const response = await axiosInstance.patch('/api/v1/user/profilePic', formData
    ,
     {
      headers: {
        'Content-Type': 'multipart/form-data', 
      }
    }
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Image upload error:', error);
    throw new Error('Image upload failed');
  }
};
export const getprofileInfo = async () => {
  try {
    const response = await axiosInstance.get(`/api/v1/user/profile`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Failed to retrieve user details:', error);
    throw error;
  }
};
export const updateUserInfo = async (userInfo: IUser): Promise<IUser | undefined> => {
  try {
    const response: AxiosResponse<IUser> = await axiosInstance.put('/api/v1/user/updateUser', userInfo);

    if (response.status === 200) {
      return response.data;
    } 
  } catch (error) {
    console.log("User updated error:", error);
    throw error;
  }
};
export const getCourseDetails = async (title: string): Promise<CourseDetailsResponse | undefined> => {
  try {
    const response = await axiosInstance.get(`/api/v1/course/CourseDetails/${title}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("get course error:", error);
  }
};
export const getlistLessonsInCourse = async (courseId: any) => {
  try {
    const response = await axiosInstance.get(`/api/v1/lesson/course/lesson/${courseId}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("get course error:", error);
  }
};
export const getlistQustionInQuiz = async (quizId: any) => {
  try {
    const response = await axiosInstance.get(`/api/v1/quiz/questions/${quizId}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("get questions error:", error);
  }
};
export const createTextLesson = async (textSlideData: ITextSlide): Promise<ITextSlide| undefined> => {
  try {
    const response: AxiosResponse<ITextSlide> = await axiosInstance.post(`/api/v1/textSlide/createTextSlide`,textSlideData);

    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error('Create text lesson error:', error);
    throw error;
  }
};
export const getAllTextSlides = async (lessonId: any): Promise<ITextSlide[] | undefined> => {
  try {
    const response = await axiosInstance.get(`/api/v1/textSlide/lesson/textSlides/${lessonId}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Failed to retrieve all Text Slides:', error);
    throw error;
  }
};
export const updateTextLesson = async (textSlideId: string, text: string, order: number): Promise<IUserLesson | undefined> => {
  try {
    const response: AxiosResponse<IUserLesson> = await axiosInstance.put(`/api/v1/textSlide/editTextSlide/${textSlideId}`, {
      text,
      order
    });
    if (response.status === 200) {
      console.log('Success, Text Lesson updated');
      return response.data;
    }
  } catch (error: any) {
    console.log("Update Text Lesson error:", error);
    throw error;
  }
};
export const deleteTextSlideById = async (textSlideId: string) => {
  try {
    const response = await axiosInstance.delete(`/api/v1/textSlide/deleteTextSlide/${textSlideId}`);
    if (response.status === 200) {
      console.log('Success, Text Slide deleted');
      return response.data;
    } else {
      throw new Error('Failed to delete Text Slide');
    }
  } catch (error) {
    console.error('Failed to delete Text Slide', error);
    throw error;
  }
};
export const viewTextSlideDetails = async (textSlideId: string) => {
  try {
    const response = await axiosInstance.get(`/api/v1/textSlide/textSlideDetails/${textSlideId}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("get course error:", error);
  }
};
export const trackCourseProgress = async (courseId: any) => {
  try {
    const response= await axiosInstance.post(`/api/v1/courses/${courseId}/track-progress`);

    if (response && response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('track Course Progress error:', error);
    throw error;
  }
};
export const completeLesson = async (lessonId: any) => {
  try {
    const response= await axiosInstance.patch(`/api/v1/courses/complete-lesson/${lessonId}`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('completeLesson error:', error);
    throw error;
  }
};
export const completeQuiz = async (quizId: any) => {
  try {
    const response= await axiosInstance.patch(`/api/v1/courses/complete-quiz/${quizId}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('completeQuiz error:', error);
    throw error;
  }
};
export const CreatePost = async (postData: Ipost) => {
  try {
    const response= await axiosInstance.post(`/api/v1/Discuss/createPost`,postData);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error('Error Create Post:', error);
    throw error;
  }
};
export const GetAllPost = async (page: number,size: number) => {
  try {
    const response= await axiosInstance.get(`/api/v1/Discuss/getPosts?page=${page}&size=${size}`);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error('Error Geting Post:', error);
    throw error;
  }
};
export const GetHotPost = async () => {
  try {
    const response= await axiosInstance.get(`/api/v1/Discuss/gethotPosts`);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error('Error Geting Post:', error);
    throw error;
  }
};
export const GetTrendingPost = async (page: number,size: number) => {
  try {
    const response= await axiosInstance.get(`/api/v1/Discuss/getTrendingPost?page=${page}&size=${size}`);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error('Error Geting Post:', error);
    throw error;
  }
};
export const GetUnansweredPost = async (page: number,size: number) => {
  try {
    const response= await axiosInstance.get(`/api/v1/Discuss/getUnansweredPost?page=${page}&size=${size}`);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error('Error Geting Post:', error);
    throw error;
  }
};
export const GetMyPost = async (page: number,size: number) => {
  try {
    const response= await axiosInstance.get(`/api/v1/Discuss/getMyPost?page=${page}&size=${size}`);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error('Error Geting Post:', error);
    throw error;
  }
};
export const SearchInPost = async (querysearch:String) => {
  try {
    const response= await axiosInstance.get(`/api/v1/Discuss/search/searchInPost?querysearch=${querysearch}`);

    if (response && response.status === 200 && response.data) {
      return response.data;
    } else {
      console.error('Invalid search response:', response);
      return null;
    }
  } catch (error) {
    console.error('Error search in Post:', error);
    throw error;
  }
};
export const updatePost = async (postId: string, title: string, content: string, tags: string[]) => {
  try {
    const updatedPostData = { title, content, tags };
    const response = await axiosInstance.put(`/api/v1/Discuss/updatePost/${postId}`, updatedPostData);

    if (response.status === 200) {
      return response.data.post;
    } else {
      throw new Error('Failed to update post');
    }
  } catch (error) {
    throw new Error('Failed to update post');
  }
};
export const GetPostById = async (postId:any) => {
  try {
    const response= await axiosInstance.get(`/api/v1/Discuss/getPost/${postId}`);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error('Error Geting this Post:', error);
    throw error;
  }
};
export const CreateComment = async (postId:any,text:string) => {
  try {
    const response= await axiosInstance.post(`/api/v1/Discuss/createComment/${postId}`,
    {text});
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error('Error to create comment:', error);
    throw error;
  }
};
export const GetCommentByPostId = async (postId:any) => {
  try {
    const response= await axiosInstance.get(`/api/v1/Discuss/Comments/${postId}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Error to create comment:', error);
    throw error;
  }
};
export const deleteCommentById = async (commentId: string) => {
  try {
    const response = await axiosInstance.delete(`/api/v1/Discuss/deleteComment/${commentId}`);
    if (response.status === 200) {
      console.log('Success, Comment deleted ');
      return response.data;
    }
  } catch (error) {
    console.error('Failed to Comment deleted', error);
    throw error;
  }
};
export const updateComment = async (commentId: string, text:string) => {
  try {
    const response = await axiosInstance.patch(`/api/v1/Discuss/updateComment/${commentId}`, {text});
    if (response.status === 200) {
      return response.data.post;
    } else {
      throw new Error('Failed to update commment');
    }
  } catch (error) {
    throw new Error(`Failed to update commment`);
  }
};
export const deletePostById = async (postId: any) => {
  try {
    const response = await axiosInstance.delete(`/api/v1/Discuss/deletePost/${postId}`);
    if (response.status === 200) {
      console.log('Success, Post deleted ');
      return response.data;
    }
  } catch (error) {
    console.error('Failed to Post deleted', error);
    throw error;
  }
};
export const LikePost = async (postId: any) => {
  try {
    const response = await axiosInstance.post(`/api/v1/Discuss/likePost/${postId}`);
    if (response.status === 201) {
      console.log('Post liked successfully ');
      return response.data;
    }
  } catch (error) {
    console.error('Failed to like post', error);
    throw error;
  }
};
export const hasUserLikedPost = async (postId: any) => {
  try {
    const response = await axiosInstance.post(`/api/v1/Discuss/hasUserLikedPost/${postId}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Failed to check if user has liked post', error);
    throw error;
  }
};

export const removelike = async (postId: any) => {
  try {
    const response = await axiosInstance.delete(`/api/v1/Discuss/removelike/${postId}`);
    if (response.status === 201) {
      console.log('Post liked successfully ');
      return response.data;
    }
  } catch (error) {
    console.error('Failed to like post', error);
    throw error;
  }
};
export const LikeComment = async (commentId: any) => {
  try {
    const response = await axiosInstance.post(`/api/v1/Discuss/comments/${commentId}/like`);

    if (response.status === 201) {
      console.log('like in Comment successfully ');
      return response.data;
    }
  } catch (error) {
    console.error('Failed to like Comment', error);
    throw error;
  }
};
export const removelikeinComment = async (commentId: any) => {
  try {
    const response = await axiosInstance.delete(`/api/v1/Discuss/comments/${commentId}/unlike`);
    if (response.status === 201) {
      console.log(' liked removed successfully ');
      return response.data;
    }
  } catch (error) {
    console.error('Failed to remove like comment', error);
    throw error;
  }
};
export const hasUserLikedComment = async (commentId: any) => {
  try {
    const response = await axiosInstance.post(`/api/v1/Discuss/hasUserLikedcomment/${commentId}`);
   console.log(response)
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Failed to check if user has liked comment', error);
    throw error;
  }
};
export const createBlog = async (title:string, content:string, topic:string, timeToRead:Number) => {
  try {
    const response = await axiosInstance.post(`/api/v1/blog/createblog`,{
      title,content,topic,timeToRead
    });
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error('Failed to create Blog', error);
    throw error;
  }
};
export const createSection = async (blogId:string,subtitle:string, content:string,order:Number) => {
  try {
    const response = await axiosInstance.post(`/api/v1/blog/createSectioninBlog/${blogId}`,{
      subtitle,content,order
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Failed to create Section', error);
    throw error;
  }
};
export const uploadImageBlog = async (blogId:string,file: any) => {
  try {
    const formData = new FormData();
    formData.append('image', file);

    const response = await axiosInstance.patch(`/api/v1/blog/imageBlog/${blogId}`, formData
    ,
     {
      headers: {
        'Content-Type': 'multipart/form-data', 
      }
    }
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Image upload error:', error);
    throw new Error('Image upload failed');
  }
};
export const updateSection = async (blogId:string,sectionNumber:number,subtitle:string, content:string,order:Number) => {
  try {
    const response = await axiosInstance.put(`/api/v1/blog/updateSectionInBlog/${blogId}`,{
      sectionNumber, subtitle,content,order
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Failed to update Section', error);
    throw error;
  }
};
export const getSectionByOrder = async (blogId:string,sectionNumber:number) => {
  try {
    const response = await axiosInstance.get(`/api/v1/blog/updateSectionInBlog/${blogId}/${sectionNumber}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Failed to get Section', error);
    throw error;
  }
};
export const deleteSectionByOrder = async (blogId:string,sectionNumber:number) => {
  try {
    const response = await axiosInstance.delete(`/api/v1/blog/deleteSectionInBlog/${blogId}/${sectionNumber}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Failed to delete Section', error);
    throw error;
  }
};
export const updateBlog = async (blogId:string,title:string, content:string, topic:string, timeToRead:Number) => {
  try {
    const response = await axiosInstance.put(`/api/v1/blog/updateBlog/${blogId}`,{
      title,content,topic,timeToRead
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Failed to update Blog', error);
    throw error;
  }
};
export const getBlogs = async (page: number,size: number) => {
  try {
    const response = await axiosInstance.get(`/api/v1/blog/getblogs?page=${page}&size=${size}`);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error('Failed to get Blogs', error);
    throw error;
  }
};
export const getBlogById = async (blogId:string) => {
  try {
    const response = await axiosInstance.get(`/api/v1/blog/getBlogById/${blogId}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Failed to get Blog By Id', error);
    throw error;
  }
};
export const getrelatedBlog = async (blogId:string) => {
  try {
    const response = await axiosInstance.get(`/api/v1/blog/relatedBlog/${blogId}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Failed to get related Blog', error);
    throw error;
  }
};
export const getpopularBlogs = async () => {
  try {
    const response = await axiosInstance.get(`/api/v1/blog/popularBlogs`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Failed to get popular Blogs', error);
    throw error;
  }
};
export const deleteBlog = async (blogId:any) => {
  try {
    const response = await axiosInstance.delete(`/api/v1/blog/deleteBlog/${blogId}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Failed to delete Blog', error);
    throw error;
  }
};
export const SearchInBlog = async (querysearch:String) => {
  try {
    const response= await axiosInstance.get(`/api/v1/blog/search/searchInBlog?querysearch=${querysearch}`);

    if (response && response.status === 200 && response.data) {
      return response.data;
    } else {
      console.error('Invalid search response:', response);
      return null;
    }
  } catch (error) {
    console.error('Error search in Blog:', error);
    throw error;
  }
};
export const SetFeedBackTrue = async (feedbackId:string) => {
  try {
    const response = await axiosInstance.put(`/api/v1/Feed/SetFeedBackTrue/${feedbackId}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Failed to set Feed Back true', error);
    throw error;
  }
};
export const getAllFeedBack = async () => {
  try {
    const response = await axiosInstance.get(`/api/v1/Feed/getAllFeedBack`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Failed to get FeedBack', error);
    throw error;
  }
};
export const getFeedbackRead = async () => {
  try {
    const response = await axiosInstance.get(`/api/v1/Feed/getFeedbackRead`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Failed to get FeedBack', error);
    throw error;
  }
};
export const getFeedbackUnRead = async () => {
  try {
    const response = await axiosInstance.get(`/api/v1/Feed/feedback/unread`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Failed to get FeedBack', error);
    throw error;
  }
};
export const createFeedBack = async (text:string) => {
  try {
    const response = await axiosInstance.post(`/api/v1/Feed/createFeedBack`,{
      text
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Failed to create FeedBack', error);
    throw error;
  }
};
export const addComment = async (lessonId: string,text: string) => {
  try {
    const response = await axiosInstance.post(`/api/v1/ChatLesson/addCommintInChat/${lessonId}`, text);
    console.log(response.status);

    if (response.status === 200) {
      return response.data;
    }else {
      console.error("Unexpected response status:", response.status);
    }
  } catch (error) {
    console.error("Add comment error:", error);
    console.log(error);
    
    throw error;
  }
};
export const getAllComments = async (lessonId: string) => {
  try {
    console.log(lessonId)
    const response = await axiosInstance.get(`/api/v1/ChatLesson/getAllCommentInChat/${lessonId}`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("Get all comments error:", error);
    throw error;
  }
};
export const getCommentCount = async (lessonId: string): Promise<number | undefined> => {
  try {
    const response: AxiosResponse<{ count: number }> = await axiosInstance.get('/api/v1/chat/getCommentCount', { params: { lessonId } });

    if (response.status === 200) {
      return response.data.count;
    }
  } catch (error) {
    console.error("Get comment count error:", error);
    throw error;
  }
};
export const getBitLeaderboard = async () => {
  try {
    const response = await axiosInstance.get(`/api/v1/user-bits-and-hearts/leaderBoard`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Failed to get FeedBack', error);
    throw error;
  }
};