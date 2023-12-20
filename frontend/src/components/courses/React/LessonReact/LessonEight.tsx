import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';
import { useParams } from 'react-router-dom';

const LessonEightReact: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: (
        <div>
          <h2>Understanding Form Inputs in React</h2>
          <p>Exploring how to handle various form inputs within React components.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q1_l8_react',
      text: (
        <p>
          Which React hook is commonly used to handle form inputs in React?
        </p>
      ),
      question: (
        <div>
          <p>
            The commonly used React hook to handle form inputs is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['useForm', 'useInput', 'useState'],
      correctAnswer: 'useState',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Form Submission in React</h2>
          <p>Understanding how to handle form submission in React applications.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q2_l8_react',
      text: (
        <p>
          Which event is triggered when a form is submitted in React?
        </p>
      ),
      question: (
        <div>
          <p>
            The event triggered when a form is submitted in React is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['onSubmit', 'onClick', 'onChange'],
      correctAnswer: 'onSubmit',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Form Validation in React</h2>
          <p>Exploring various methods of form validation within React components.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q3_l8_react',
      text: (
        <p>
          Which technique can be used to perform form validation in React?
        </p>
      ),
      question: (
        <div>
          <p>
            The technique used to perform form validation in React is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['useState', 'useValidation', 'Custom validation functions'],
      correctAnswer: 'Custom validation functions',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Handling Different Input Types</h2>
          <p>Understanding how to handle various input types within forms in React.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q4_l8_react',
      text: (
        <p>
          Which input attribute is used for defining a field as required in React?
        </p>
      ),
      question: (
        <div>
          <p>
            The input attribute used for defining a field as required in React is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['required', 'isRequired', 'mandatory'],
      correctAnswer: 'required',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Handling Form Reset</h2>
          <p>Exploring how to reset form values in React after submission or user actions.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q5_l8_react',
      text: (
        <p>
          Which React method is used to reset a form in React?
        </p>
      ),
      question: (
        <div>
          <p>
            The React method used to reset a form in React is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['form.reset()', 'resetForm()', 'formReset()'],
      correctAnswer: 'form.reset()',
    },
  ];

  return (
    <div>
      <LessonSlide key="lessonEightReact"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonEightReact;