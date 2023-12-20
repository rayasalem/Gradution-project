import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';

const LessonTenInPython: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: <p>A <code>for</code> loop in Python is used to iterate over a 
        <br></br>sequence (such as a list, tuple, or string) or other iterable objects.
        <br></br> Let's explore how to use <code>for</code> loops.
      </p>
    },{
      type: 'text',
      text:  <div>
      <strong>Basic For Loop:</strong>
      <p>
        Use a <code>for</code> loop to iterate over a sequence of elements.
      </p>
    </div>
    },
    {
      type: 'dragDrop',
      questionId: 'q1-l10-python',
      text:<p>Write a <code>for</code> loop to print each element in the list <code>numbers</code>.</p>,
      question: (
        <div>
        <p>
          <code>
            {'numbers = [1, 2, 3, 4, 5]'}
          </code>
          <br></br>
          {selectedAnswer ? selectedAnswer : 'Your Answer Here'}<code>{'num in numbers:'}</code>
          <br></br>
          <code>
            {`print(num)}`}
          </code>
        </p>
      </div>
      ),
      options: ['for', 'loop'],
      correctAnswer: 'for',
    },{
        type: 'text',
        text: (
            <div>
          <strong>Iterating Over Strings:</strong>
          <p>
            Use a <code>for</code> loop to iterate over characters in a string.
          </p>
        </div>
        ),
      }, {
        type: 'dragDrop',
        questionId: 'q2-l10-python',
        text: <p><p>Write a <code>for</code> loop to </p> 
        <br></br>print each character in the string <code>word</code>.</p>,
        question: (
            <div>
        <p>
          <code>
            {'word = "Python"'}
          </code>
          <br></br>
          <code>{'for char in word:'}</code>
          <br></br>
          <code>
            {`print`}{selectedAnswer ? selectedAnswer : 'Your Answer Here'}
          </code>
        </p>
      </div>
        ),
        options: ['char','word'],
        correctAnswer: 'char',
      },{
        type: 'text',
        text: (
            <div>
            <strong>Using Range:</strong>
            <p>
              The <code>range()</code> function is often used to iterate a specific number of times.
            </p>
          </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q3-l10-python',
        text:<p>Write a <code>for</code> loop using 
        <br></br><code>range()</code> to print numbers from 1 to 5.</p>,
        question: (
            <div><p>
            
            <code>{'for num in'}</code>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}
            <code>{'(1, 6):'}</code>
            <br></br>
            <code>
              {' print(num)}'}
            </code>
          </p>
        </div>
        ),
        options: ['range', 'for'],
      correctAnswer: 'range',
      },{
        type: 'text',
        text: (
            <div>
            <strong>Nesting For Loops:</strong>
            <p>
              You can nest <code>for</code> loops to iterate over multiple sequences.
            </p>
          </div>
        ),
      },
     {
        type: 'text',
        text: (
            <div>
            <strong>Explore and Experiment:</strong>
            <p>
              <code>for</code> loops are powerful tools for iterating over sequences and performing repetitive tasks. 
              <br></br>Experiment with different types of sequences and iterate with <code>for</code> loops to gain proficiency.
            </p>
          </div>
        ),
      }
  ];
  
  return (
    <div>
      <LessonSlide key="pythonForLoops" slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonTenInPython;

