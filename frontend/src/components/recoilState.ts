import { atom } from 'recoil';
interface MultipleChoiceQuestionProps {
  questionId?: string;
  text: string;
  question?: string;
  options: string[];
  correctAnswers: string;
  quizId?: string; 

}
export const mergedArrayState = atom({
  key: 'mergedArrayState',
  default: [],
});

export const questionsState = atom<MultipleChoiceQuestionProps[]>({
  key: 'questionsState',
  default: [],
});