import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import QuestionWithDragDrop from './QuestionWithDragDrop';

const ReactionComponent: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const questionData = [
    {
        text:(
            <p>Headings in HTML come in different levels. <code>&lt;h1&gt;</code> 
                <br />defines the most important heading.
            </p>
            ),
      question: (
        <div>
          <p>
            Code a level 1 heading: <code>{'<h1>'}</code> {selectedAnswer ? selectedAnswer : 'Your Answer Here'} <code>{'</h1>'}</code>
          </p>
        </div>
      ),
      answers: ['Heading 1', 'Heading 2', 'Heading 3'],
    },{
        text:(
            <p>Headings in HTML come in different levels. <code>&lt;h1&gt;</code> defines the most important heading.</p>
        ),
        question: (
          <div>
            <p>
              Code a level 1 heading: {selectedAnswer ? selectedAnswer : 'Your Answer Here'}Heading <code>{'</h1>'}</code>
            </p>
          </div>
        ),
        answers: ['<h1>', '<h2>', '<h3>'],
      }
  ];

  return (

    <DndProvider backend={HTML5Backend}>
      <QuestionWithDragDrop text={questionData[0].text} question={questionData[0].question} answers={questionData[0].answers}  />
      {/* <QuestionWithDragDrop text={questionData[1].text} question={questionData[1].question} answers={questionData[1].answers} /> */}
    </DndProvider>

  );
};

export default ReactionComponent;
