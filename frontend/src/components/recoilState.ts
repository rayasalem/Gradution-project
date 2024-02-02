import { atom } from 'recoil';
interface MultipleChoiceQuestionProps {
  questionId?: string;
  text: string;
  question?: string;
  options: string[];
  correctAnswers: string;
  quizId?: string; 

}
interface Course {
  _id: any;
  title: string;
}
export const mergedArrayState = atom({
  key: 'mergedArrayState',
  default: [],
});

export const questionsState = atom<MultipleChoiceQuestionProps[]>({
  key: 'questionsState',
  default: [],
});
export const coursesState = atom<Course[]>({
  key: 'coursesState',
  default: [] 
});
export const postsState = atom({
  key: 'postsState',
  default: [],
});
export const hotpostsState = atom({
  key: 'hotpostsState',
  default: [],
});
export const blogsState = atom({
  key: 'blogsState',
  default: [],
});
export const popularBlogState = atom({
  key: 'popularBlogState',
  default: [],
});
export const relatedBlogState = atom({
  key: 'relatedBlogState',
  default: [],
});
export const AllFeedBackState = atom({
  key: 'AllFeedBackState',
  default: [],
});export const FeedBackReadState = atom({
  key: 'FeedBackReadState',
  default: [],
});
export const FeedBackUNReadState = atom({
  key: 'FeedBackUNReadState',
  default: [],
});
export const topStudentsState = atom({
  key: 'topStudentsState',
  default: [],
});




