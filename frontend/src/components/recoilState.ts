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