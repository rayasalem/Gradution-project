import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';

const LessonSixInPython: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: <p> In Python, a set is an unordered and mutable collection of unique items. 
        <br></br>Let's explore the basic operations and characteristics of sets.

      </p>
    },{
      type: 'text',
      text: <div>
      <strong>Access Set Items:</strong>
      <p>
        Sets are unordered, so they have no index. Use methods like <code>pop()</code>
        <br></br> or <code>remove()</code> to access and remove items.
      </p>
    </div>
    },
    {
      type: 'dragDrop',
      questionId: 'q1-l6-python',
      text:<p>Remove the element <code>'apple'</code> from the set <code>fruits</code>.</p>,
      question: (
        <div>
          <p>
          <code>{'fruits.'}</code>
            {selectedAnswer ? selectedAnswer : 'Your Answer Here'}
             <code>{'(\'apple\')'}</code>
          </p>
        </div>
      ),
      options: ['discard', 'delete', 'remove'],
      correctAnswer: 'remove',
    },{
        type: 'text',
        text: (
            <div>
            <strong>Add to Sets:</strong>
            <p>
              Use the <code>add()</code> method to add a single item to a set.
            </p>
          </div>
        ),
      }, {
        type: 'dragDrop',
        questionId: 'q2-l6-python',
        text: <p>Add the element <code>'banana'</code> to the set <code>fruits</code>.</p>,
        question: (
            <div>
          <p>
          <code>{'fruits.'}</code>
            {selectedAnswer ? selectedAnswer : 'Your Answer Here'}
             <code>{'(\'apple\')'}</code>
          </p>
        </div>
        ),
        options: ['insert', 'append', 'add'],
        correctAnswer: 'add',
      },{
        type: 'text',
        text: (
            <div>
            <strong>Remove from Sets:</strong>
            <p>
              Use methods like <code>remove()</code> or <code>discard()</code> to remove items from a set.
            </p>
          </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q3-l6-python',
        text:<p>Discard the element <code>'orange'</code> from the set <code>fruits</code>.</p>,
        question: (
            <div>
            <p>
            <code>{'fruits.'}</code>
              {selectedAnswer ? selectedAnswer : 'Your Answer Here'}
               <code>{'(\'apple\')'}</code>
            </p>
          </div>
        ),
        options: ['remove', 'delete', 'discard'],
        correctAnswer: 'discard',
      },{
        type: 'text',
        text: (
            <div>
            <strong>Loop Through Sets:</strong>
            <p>
              Use a loop to iterate over the items in a set.
            </p>
          </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q4-l6-python',
        text: <p>Loop through the <code>colors</code> set and print each color.
        </p>,
        question: (
            <div>
            <p>
              {selectedAnswer ? selectedAnswer : 'Your Answer Here'}
              <code>
                {'color in colors:'}
              </code>
              <br></br>
              <code>
                {'  print(color)'}
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
              Sets in Python are versatile for managing unique collections of items. Experiment with different set operations based on the requirements of your programs.
            </p>
          </div>
        ),
      }
  ];
  
  return (
    <div>
      <LessonSlide key="pythonSets"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonSixInPython;

