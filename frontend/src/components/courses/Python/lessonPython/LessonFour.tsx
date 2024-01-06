import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';
import { useParams } from 'react-router-dom';

const LessonFourInPython: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: <p>  In Python, a list is a versatile and mutable collection of items. 
        <br></br>Let's explore the basic operations and manipulations of lists.
      </p>
    },{
      type: 'text',
      text:  <div>
      <strong>Create a List:</strong>
      <p>
        Use square brackets to create a list of items.
      </p>
    </div>
    },
    {
      type: 'dragDrop',
      questionId: 'q1-l4-python',
      text:<p>Create a list called <code>fruits</code> 
       <br></br>with the items "apple", "banana", and "orange".</p>,
      question: (
        <div>
          <p>
            {selectedAnswer ? selectedAnswer : 'Your Answer Here'} <code>{' = ["apple", "banana", "orange"]'}</code>
          </p>
        </div>
      ),
      options: ['list', 'createList', 'fruits'],
      correctAnswer: 'fruits',
    },{
        type: 'text',
        text: (
            <div>
            <strong>Access Items:</strong>
            <p>
              Use indexing to access items in a list.
            </p>
          </div>
        ),
      }, {
        type: 'dragDrop',
        questionId: 'q2-l4-python',
        text: <p>Access the second item in the <code>fruits</code> list.</p>,
        question: (
            <div>
            <p>
              <code>{'fruits['}</code> 
              {selectedAnswer ? selectedAnswer : 'Your Answer Here'}
              <code>{']'}</code>
            </p>
          </div>
        ),
        options: ['0', '1', '2'],
      correctAnswer: '1',
      },{
        type: 'text',
        text: (
            <div>
          <strong>Change Item Value:</strong>
          <p>
            Assign a new value to change the content of a specific list item.
          </p>
        </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q3-l4-python',
        text: <p>Change the value of the third item in the <code>fruits</code> list to "grape".
        </p>,
        question: (
            <div>
            <p>
              <code>{'fruits[2] = "grape"'}</code> <br />
              this is  {selectedAnswer ? selectedAnswer : 'Your Answer Here'}
            </p>
          </div>
        ),
        options: ['modify', 'change', 'assign'],
        correctAnswer: 'assign',
      },{
        type: 'text',
        text: (
            <div>
          <strong>Add List Items:</strong>
          <p>
            Use methods like <code>append()</code> to add items to the end of a list.
          </p>
        </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q4-l4-python',
        text: <p>Add "kiwi" to the end of the <code>fruits</code> list.
        </p>,
        question: (
            <div>
            <p>
            <code>{'fruits.'}</code>
              {selectedAnswer ? selectedAnswer : 'Your Answer Here'} 
              <code>{'("kiwi")'}</code>
            </p>
          </div>
        ),
        options: ['add', 'insert', 'append'],
      correctAnswer: 'append',
      },{
        type: 'text',
        text: (
            <div>
            <strong>Remove List Items:</strong>
            <p>
              Use methods like <code>remove()</code> or <code>pop()</code> to remove items from a list.
            </p>
          </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q5-l4-python',
        text: <p>Remove "banana" from the <code>fruits</code> list.
        </p>,
        question: (
            <div>
            <p>
            <code>{'fruits.'}</code>
              {selectedAnswer ? selectedAnswer : 'Your Answer Here'}
               <code>{'("banana")'}</code>
            </p>
          </div>
        ),
        options: ['delete', 'exclude', 'remove'],
        correctAnswer: 'remove',
      },{
        type: 'dragDrop',
        questionId: 'q6-l4-python',
        text: <p>Use methods like <code>sort()</code> to arrange the items in a list.
        </p>,
        question: (
            <div>
            <p>
            <code>{'fruits.'}</code>
              {selectedAnswer ? selectedAnswer : 'Your Answer Here'}
            </p>
          </div>
        ),
        options: ['order', 'arrange', 'sort'],
        correctAnswer: 'sort',
      },{
        type: 'text',
        text: (
            <div>
            <strong>Explore and Experiment:</strong>
            <p>
              Lists are fundamental in Python and offer a wide range of operations.
              <br></br> Experiment with different methods to manipulate lists based on your program's requirements.
            </p>
          </div>
        ),
      },
  ];
  
  return (
    <div>
      <LessonSlide key="pythonLists" slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonFourInPython;

