import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';
import { useParams } from 'react-router-dom';

const LessonTwo: React.FC= () => {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    const slides: LessonSlide[] = [
       {
          type: 'text',
          text: <p>HTML  uses various elements and tags to structure content on a web page
          <p>Let's explore some fundamental HTML elements and tags.</p></p>,
        },{
            type: 'text',
            text: <div>
            <p>
              The <code>{'<h1>'}</code> to <code>{'<h6>'}</code> elements represent headings,
              with <code>{'<h1>'}</code> being the largest and <code>{'<h6>'}</code> the smallest.
            </p>
            <p>
              Example: <code>{'<h1>This is a Heading</h1>'}</code>
            </p>
          </div>,
          },
        {
          type: 'dragDrop',
          questionId: 'q1-l2',
          text: <p> Complete the line to code a level 2 heading </p>,
          question: (
            <div>
              <p>
               {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}Heading2 <code>{'</h2>'}</code>
              </p>
            </div>
          ),
          options: ['</h2>', '<h2>'],
          correctAnswer: '<h2>',
        },{
            type: 'dragDrop',
            questionId: 'q2-l2',
            text: <p> h1 is the most important heading. <br></br>
               You should only have one level 1 heading per page.
            </p>,
            question: (
              <div>
                <p>
                <code>{'<h1>'}</code> Movie Catalog<code>{'</h1>'}</code><br />
                 {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}Genre <code>{'</h2>'}</code>
                </p>
              </div>
            ),
            options: ['<h1>', '<h2>','<h5>'],
            correctAnswer: '<h2>',
          },{
            type: 'dragDrop',
            questionId: 'q3-l2',
            text: <p>The <code>{'<p>'}</code> element is used for paragraphs, grouping text content together.</p>,
            question: (
              <div>
                <p>
                 {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}This is a paragraph. <code>{'</p>'}</code>
                </p>
              </div>
            ),
            options: ['<p>', '<h1>','<img>'],
            correctAnswer: '<p>',
          },
        {
          type: 'text',
          text: <div>
          <p>
            Create links using the <code>{'<a>'}</code> element.
            Example: <code>{'<a href="https://www.example.com">Visit Example.com</a>'}</code>
          </p>
        </div>
        },{
            type: 'dragDrop',
            questionId: 'q4-l2',
            text: <p>Hyperlinks are used to link from one web page to others.<br></br>
             To create a link, you need "href" to add the destination URL.</p>,
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
          type: 'text',
          text:  <p>
          The <code>{'<img>'}</code> element is used for embedding images.
          Example: <code>{'<img src="image.jpg" alt="Description">'}</code>
        </p>,
        },
        {
          type: 'dragDrop',
          questionId: 'q5-l2',
          text: (
            <p>
              Images only require one tag to be displayed on your web page.
              <br />
              What’s the HTML tag for the image element?</p>
          ),
          question: (
            <div>
              <p>
              <code>{'<'}</code>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}src="image_location"<code>{'>'}</code>
              </p>
            </div>
          ),
          options: ['img', 'p', 'a'],
          correctAnswer: 'img',
        },{
            type: 'dragDrop',
            questionId: 'q6-l2',
            text: (
              <p>
                You need to tell the browser where to find the image.
                <br />
                The source (src) is the location on the Internet where the image is stored.</p>
            ),
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
          type: 'text',
          text: <p>In modern web development, lists are very useful elements.
          <br /> You can even use lists to build navigation menus <br />
          Use <code>{'<ul>'}</code> for an unordered list (bulleted list) and <code>{'<ol>'}</code> for an ordered list (numbered list).
        </p>,
          
        },{
          type: 'dragDrop',
          questionId: 'q7-l2',
          text: (
            <p>
             List items are represented by the <code>{'<li>'}</code> element.
            </p>
          ),
          question: (
            <div>
              <p>
              <code>{'  <li>Item 1</li>'}</code> <br></br>
              {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}<code>{'Item 2</li>'}</code><br></br>
              <code>{'  <li>Item 2</li>'}</code>
              </p>
            </div>
          ),
          options: ['<item>', '<ul>', '<li>'],
          correctAnswer: '<li>',
        },{
            type: 'dragDrop',
            questionId: 'q8-l2',
            text: (
              <p>
               Use<code>{'<ol>'}</code> when the points have a certain order, like step-by-step instructions.<br></br>
                Complete the code to create an ordered list
              </p>
            ),
            question: (
              <div>
                <p>
                {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}<br></br>
                <code>{'<li>Coffee</li>'}</code> <br></br>
                <code>{'<li>Tea</li>'}</code><br></br>
                <code>{'<li>Milk</li>'}</code><br></br>
                <code>{'</ol>'}</code>
                </p>
              </div>
            ),
            options: ['<ol>', '<ul>', '<order>'],
            correctAnswer: '<ol>',
          },{
            type: 'dragDrop',
            questionId: 'q9-l2',
            text: (
              <p>
                Use unordered lists<code>{'<ul>'}</code> when the order of the items is not important.<br></br>
                They are shown with bullet points.
              </p>
            ),
            question: (
                <div>
                <p>
                {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}<br></br>
                <code>{'<li>Coffee</li>'}</code> <br></br>
                <code>{'<li>Tea</li>'}</code><br></br>
                <code>{'<li>Milk</li>'}</code><br></br>
                <code>{'</ul>'}</code>
                </p>
              </div>
            ),
            options: ['<item>', '<li>', '<ul>'],
            correctAnswer: '<ul>',
          }
      ];
  return (
    <div>
   <LessonSlide key="lessonTwo" slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />

    </div>
  )
}

export default LessonTwo