import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';

const LessonFiveInPython: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: <p> In Python, a tuple is an ordered and immutable collection of items. 
        <br></br>Let's explore the basic operations and characteristics of tuples.

      </p>
    },{
      type: 'text',
      text: <div>
      <strong>Access Tuple Items:</strong>
      <p>
        Use indexing to access items in a tuple.
      </p>
    </div>
    },
    {
      type: 'dragDrop',
      questionId: 'q1-l5-python',
      text:<p>Access the third item in the <code>colors</code> tuple.</p>,
      question: (
        <div>
        <p>
          <code>{'colors[2]'}</code> <br />
          this is {selectedAnswer ? selectedAnswer : 'Your Answer Here'}
        </p>
      </div>
      ),
      options: ['indexing', 'get', 'access'],
      correctAnswer: 'indexing',
    },{
        type: 'text',
        text: (
            <div>
            <strong>Update Tuples:</strong>
            <p>
              Tuples are immutable, meaning their values cannot be changed.
              <br></br> However, you can concatenate or create a new tuple.
            </p>
          </div>
        ),
      }, {
        type: 'dragDrop',
        questionId: 'q2-l5-python',
        text: <p>Create a new tuple <code>newColors</code> by combining 
        <br></br><code>colors</code> and <code>additionalColors</code>.</p>,
        question: (
            <div>
            <p>
            <code>{'newColors = colors'}</code>
              {selectedAnswer ? selectedAnswer : 'Your Answer Here'}
               <code>{' additionalColors'}</code>
            </p>
          </div>
        ),
        options: ['-', '/', '+'],
      correctAnswer: '+',
      },{
        type: 'text',
        text: (
            <div>
            <strong>Join Tuples:</strong>
            <p>
              Use the <code>+</code> operator to join two or more tuples.
            </p>
          </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q3-l5-python',
        text: <p>Join the tuples <code>tuple1</code> and <code>tuple2</code>
        </p>,
        question: (
            <div>
            <p>
            <code>{'joinedTuple = '}</code>
              {selectedAnswer ? selectedAnswer : 'Your Answer Here'}
            </p>
          </div>
        ),
        options: ['tuple1 . tuple2', 'tuple1 - tuple2', 'tuple1 + tuple2'],
        correctAnswer: 'tuple1 + tuple2',
      },{
        type: 'text',
        text: (
            <div>
            <strong>Loop Through Tuples:</strong>
            <p>
              Use a loop to iterate over the items in a tuple.
            </p>
          </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q4-l5-python',
        text: <p>Loop through the <code>daysOfWeek</code> tuple and print each day.
        </p>,
        question: (
            <div>
            <p>
              {selectedAnswer ? selectedAnswer : 'Your Answer Here'}
              <code>
                {'day in daysOfWeek: print(day)'}
              </code>
              <br></br>
              <code>
                {' print(day)'}
              </code>
            </p>
          </div>
        ),
        options: ['for', 'if', 'while'],
      correctAnswer: 'for',
      },{
        type: 'text',
        text: (
            <div>
          <strong>Explore and Experiment:</strong>
          <p>
            Tuples in Python provide a convenient way to group related data. 
            <br></br>Experiment with different tuple operations based on the requirements of your programs.
          </p>
        </div>
        ),
      }
  ];
  
  return (
    <div>
      <LessonSlide key="pythonTuples" slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonFiveInPython;

