import React, { useState } from 'react';
import LessonSlide from '../../lessons/lessonStyle/LessonSlide';
import { useParams } from 'react-router-dom';

const LessonFive: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: (
        <div>
          <p>HTML tables are fundamental for displaying and organizing data on web pages.</p>
          <p>They provide a way to structure content into rows and columns.</p>
          <p>To create a table, use the <code>{'<table>'}</code> element.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q1',
      text: (
        <p>
          Which HTML element is used to create a table in HTML?
        </p>
      ),
      question: (
        <div>
          <p>
            The HTML element used to create a table is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['<table>', '<div>', '<list>'],
      correctAnswer: '<table>',
    },
    {
      type: 'text',
      text: (
        <div>
          <p>Inside a table, you use elements like:</p>
          <ul>
            <li><code>{'<tr>'}</code> for table rows</li>
            <li><code>{'<td>'}</code> for table data cells</li>
            <li><code>{'<th>'}</code> for table header cells</li>
          </ul>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q2',
      text: (
        <p>
          Which element defines a table row in HTML?
        </p>
      ),
      question: (
        <div>
          <p>
            The element that defines a table row is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['<tr>', '<td>', '<th>'],
      correctAnswer: '<tr>',
    },
    {
      type: 'text',
      text: (
        <div>
          <p>You can structure tables using attributes like <code>colspan</code> and <code>rowspan</code>.</p>
          <p><code>colspan</code> defines the number of columns a cell should span.</p>
          <p><code>rowspan</code> defines the number of rows a cell should span.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q3',
      text: (
        <p>
          Which attribute defines the number of columns a table cell should span?
        </p>
      ),
      question: (
        <div>
          <p>
            The attribute that defines the number of columns a cell should span is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['colspan', 'rowspan', 'tablespan'],
      correctAnswer: 'colspan',
    },
  ];

  return (
    <div>
      <LessonSlide key="LessonHTMLTable" slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonFive;