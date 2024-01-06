import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';
import { useParams } from 'react-router-dom';

const LessonFiveInCSS: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);


  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: <p>
      The <code>position</code> property in CSS specifies the type of positioning method used for an element.<br></br>
      There are five different position values:
    </p>,
    },{
        type: 'text',
        text: (
        <div>
          <strong>Static:</strong>
          <p>
            The default value. Elements are positioned according to the normal flow of the document.
          </p>
        </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q1-l5-css',
        text: <p>This <code>{'<div>'}</code> element has position: static;
         </p>,
        question: (
            <div>
            <p>
            <code>{'div { position:'}</code> <br></br> {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}
            <br></br> <code>{'}'}</code> 
            </p>
          </div>
        ),
        options: ['static','relative'],
        correctAnswer: 'static',
      },
      {
        type: 'text',
        text: (
            <div>
            <strong>Relative:</strong>
            <p>
              The element is positioned relative to its normal position. 
              <br></br>It can be moved left, right, up, or down without affecting the position of other elements.
            </p>
          </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q2-l5-css',
        text: <p>Setting the top, right, bottom, and left properties of a relatively-positioned element will <br></br>
         cause it to be adjusted away from its normal position.
        </p>,
        question: (
            <div>
            <p>
            <code>{'div { position:'}</code> <br></br> {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}
            <br></br> <code>{'}'}</code> 
            </p>
          </div>
        ),
        options: ['static','relative'],
        correctAnswer: 'relative',
      },{
        type: 'text',
        text: (
            <div>
            <strong>Fixed:</strong>
            <p>
              The element is positioned relative to the browser window.
              <br></br> It will not move even if the page is scrolled.
            </p>
          </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q3-l5-css',
        text: <p>An element with position: fixed; is positioned relative to the viewport, 
        <br></br>which means it always stays in the same place even if the page is scrolled. 
        </p>,
        question: (
            <div>
            <p>
            <code>{'div {'}</code> <br></br><code>{' display:'}</code>
             {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}<code>{'}'}</code>
            </p>
          </div>
        ),
        options: ['inline','fixed'],
        correctAnswer: 'fixed',
      },
      {
        type: 'text',
        text: (
            <div>
            <strong>Absolute:</strong>
            <p>
              The element is positioned absolute to its first positioned (not static) ancestor element. 
              <br></br>If there is no such element, it is positioned absolute to the initial containing block.
            </p>
          </div>
        ),
      },{
        type: 'text',
        text: (
            <div>
            <strong>Sticky:</strong>
            <p>
              The element is positioned based on the user's scroll position. <br></br>
              It is treated as <code>relative</code> positioned until it crosses a specified point, then it is treated as <code>fixed</code>.
            </p>
          </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q3-l4-css',
        text: <p>An element with position: sticky; is positioned based on the user's scroll position.
        <br></br>A sticky element toggles between relative and fixed, depending on the scroll position. </p>,
        question: (
            <div>
            <p>
            <code>{'div {'}</code> <br></br><code>{' display:'}</code>
             {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}<code>{'}'}</code>
            </p>
          </div>
        ),
        options: ['sticky','none'],
        correctAnswer: 'sticky',
      },

    
  ];
  
  return (
    <div>
      <LessonSlide key="Position" slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonFiveInCSS;

