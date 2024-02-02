import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';

const LessonSevenInPython: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: <p>  In Python, a dictionary is an unordered and mutable collection of key-value pairs. 
        <br></br>Let's explore the fundamental operations of dictionaries.
      </p>
    },{
      type: 'text',
      text: <div>
      <strong>Access Dictionary Items:</strong>
      <p>
        Use the keys to access the values in a dictionary.
      </p>
    </div>
    },
    {
      type: 'dragDrop',
      questionId: 'q1-l7-python',
      text:<p>Access the value of the key <code>'age'</code> in the dictionary <code>person</code>.</p>,
      question: (
        <div>
        <p>
           <code>{'person'}</code>
          {selectedAnswer ? selectedAnswer : 'Your Answer Here'}
        </p>
      </div>
      ),
      options: ['(age)', '[age]', '{age}'],
      correctAnswer: '[age]',
    },{
        type: 'text',
        text: (
            <div>
            <strong>Add to Dictionaries:</strong>
            <p>
              Use the <code>update()</code> method to add a new key-value pair to a dictionary.
            </p>
          </div>
        ),
      }, {
        type: 'dragDrop',
        questionId: 'q2-l7-python',
        text: <p>Add a new key <code>'email'</code> with the value 
        <br></br><code>'example@email.com'</code> to the dictionary <code>person</code>.</p>,
        question: (
            <div>
            <p>
               <code>{'person.'}</code>
              {selectedAnswer ? selectedAnswer : 'Your Answer Here'}
               <code>{'({\'email\': \'example@email.com\'})'}</code>
            </p>
          </div>
        ),
        options: ['add', 'insert', 'update'],
        correctAnswer: 'update',
      },{
        type: 'text',
        text: (
            <div>
          <strong>Remove from Dictionaries:</strong>
          <p>
            Use methods like <code>pop()</code> or <code>popitem()</code> to remove items from a dictionary.
          </p>
        </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q3-l7-python',
        text:<p>Remove the key <code>'email'</code> from the dictionary <code>person</code></p>,
        question: (
            <div>
            <p>
               <code>{'person.'}</code>
              {selectedAnswer ? selectedAnswer : 'Your Answer Here'}
               <code>{'(\'email\')'}</code>
            </p>
          </div>
        ),
        options: ['delete', 'remove', 'pop'],
      correctAnswer: 'pop',
      },{
        type: 'text',
        text: (
            <div>
            <strong>Loop Through Dictionaries:</strong>
            <p>
              Use a loop to iterate over the keys or items in a dictionary.
            </p>
          </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q4-l7-python',
        text: <p>Loop through the keys of the <code>person</code> dictionary and print each key.
        </p>,
        question: (
            <div>
            <p>
              {selectedAnswer ? selectedAnswer : 'Your Answer Here'}
              <code>
                {'key in person:'}
              </code>
              <br></br>
              <code>
                {'   print(key)'}
              </code>
            </p>
          </div>
        ),
        options: ['for', 'if', 'while'],
      correctAnswer: 'for',
      },
      {
        type: 'text',
        text: (
          <div>
            <strong>Join Dictionaries:</strong>
            <p>
              Use the <code>update()</code> method to merge one dictionary into another.
            </p>
          </div>
        ),
      },
      {
        type: 'dragDrop',
        questionId: 'q5-l7-python',
        text: <p>Merge the dictionaries <code>dict1</code> and <code>dict2</code>.</p>,
        question: (
          <div>
            <p>
               <code>{'mergedDict = dict1.copy();'}</code><br></br>
               <code>{' mergedDict.'}</code>
              {selectedAnswer ? selectedAnswer : 'Your Answer Here'}
            </p>
          </div>
        ),
        options: ['merge', 'copy(dict2)', 'update(dict2)'],
        correctAnswer: 'update(dict2)',
      },{
        type: 'text',
        text: (
            <div>
            <strong>Explore and Experiment:</strong>
            <p>
              Dictionaries in Python are versatile for storing and managing key-value pairs.
              <br></br> Experiment with different dictionary operations to enhance your programming skills.
            </p>
          </div>
        ),
      }
  ];
  
  return (
    <div>
      <LessonSlide key="pythonDictionaries" slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonSevenInPython;

