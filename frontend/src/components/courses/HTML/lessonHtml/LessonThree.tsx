import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';


const LessonThree: React.FC = () => {
 const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

const slides: LessonSlide[] = [
        {
          type: 'text',
          text: <p>In HTML, elements can have attributes that provide additional information about them. 
            <p> Let's explore how attributes work and some common use cases.</p></p>,
        },
        {
          type: 'dragDrop',
          questionId: 'q1-l3',
          text: <p>The <code>{'<img>'}</code> element uses the <code>src</code> attribute to specify the image source.</p>,
          question: (
            <div>
                <p>
                <code>{'<img'}</code>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}="http://www.img.jpg"<code>{'>'}</code>
                </p>
              </div>
          ),
          options: [ 'src', 'a'],
          correctAnswer: 'src',
        },
        {
          type: 'dragDrop',
          questionId: 'q2-l3',
          text: (
            <p>
            The <code>{'<a>'}</code> element uses the <code>href</code> <br />
            attribute to define the hyperlink destination..
            </p>
          ),
          question: (
            <div>
            <p>
            <code>{'<a'}</code>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}="url"<code>{'</a>'}</code>
            </p>
          </div>
          ),
          options: ['link', 'href'],
          correctAnswer: 'href',
        },
        {
          type: 'dragDrop',
          questionId: 'q3-l3',
          text: (
            <p>
              The <code>{'<input>'}</code> element can have attributes like <code>type</code> and <code>placeholder</code>. 
              <br/>The type attribute specifies the type of input control. 
              <br/>The placeholder attribute is used to provide a short hint or example text that describes the expected value of the input field.
            </p>
          ),
          question: (
            <div>
              <p>
              <code>{'<input'}</code>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}
              <code>{'="text" placeholder="Enter your name">'}</code>
              </p>
            </div>
          ),
          options: ['type', 'placeholder', 'link'],
          correctAnswer: 'type',
        },{
            type: 'text',
            text:<div>
            <p>
              The <code>type</code> attribute can take various values to define different input types. For example:
            </p>
            <ul>
              <li>
                <code>{'<input type="text">'}</code> - Single-line text input (default).
              </li>
              <li>
                <code>{'<input type="password">'}</code> - Password input for sensitive information.
              </li>
              <li>
                <code>{'<input type="email">'}</code> - Email address input.
              </li>
              <li>
                <code>{'<input type="number">'}</code> - Numeric input for numbers.
              </li>
              <li>
                <code>{'<input type="date">'}</code> - Date input for selecting a date.
              </li>
            </ul>
          </div>
          },{
            type: 'dragDrop',
            questionId: 'q3-l3',
            text: (
              <p>
               Use the <code>{'<a>'}</code> element's <code>target</code> attribute to <br/>
                control how the linked content is displayed.
              </p>
            ),
            question: (
              <div>
                <p>
                <code>{'<a href="https://www.example.com"'}</code>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}
                <code>{'="_blank">Open in a new tab</a>'}</code>
                </p>
              </div>
            ),
            options: ['type', 'target'],
            correctAnswer: 'target',
          },
          {
            type: 'text',
            text:<div>
<p>
    The <code>target</code> attribute determines where the linked content will be opened. Common values include:
  </p>
  <ul>
    <li>
      <code>{'<a href="https://www.example.com" target="_blank">'}</code> - Opens the link in a new browser tab or window.
    </li>
    <li>
      <code>{'<a href="https://www.example.com" target="_self">'}</code> - Opens the link in the same frame or tab.
    </li>
    <li>
      <code>{'<a href="https://www.example.com" target="_parent">'}</code> - Opens the link in the parent frame or tab.
    </li>
    <li>
      <code>{'<a href="https://www.example.com" target="_top">'}</code> - Opens the link in the full body of the window.
    </li>
  </ul>
          </div>
          },
      ];
  return (
    <div>
           <LessonSlide key="lessonThree" slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  )
}

export default LessonThree