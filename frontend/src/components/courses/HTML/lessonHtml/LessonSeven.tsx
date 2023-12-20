import React, { useState } from 'react';
import LessonSlide from '../../lessons/lessonStyle/LessonSlide';
import { useParams } from 'react-router-dom';

const LessonSeven:React.FC = () => {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
   
      const slides: LessonSlide[] = [
        {
          type: 'text',
          text: <p> Learn how to embed audio and video content using <code>{'<audio>'}</code> and <code>{'<video>'}</code> tags.
            <p> Understand the attributes and options available for multimedia elements.</p></p>,
        },
        {
          type: 'dragDrop',
          questionId: 'q1-l7',
          text: <p>The <code>{'<audio>'}</code> element is used to embed sound content in an HTML document.</p>,
          question: (
            <div>
              <p>
              <code>{'<'}</code> {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '} 
              <code>{' src="audio.mp3" controls></audio>'}</code>
              </p>
            </div>
          ),
          options: ['</audio>', '<audio>'],
          correctAnswer: '<audio>',
        },
        {
            type: 'dragDrop',
            questionId: 'q2-l7',
            text: <p>The <code>{'<video>'}</code> element is used to embed video content in an HTML document.</p>,
            question: (
              <div>
                <p>
                <code>{'<'}</code> {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '} 
                <code>{' src="video.mp4" width="320" height="240" controls></video>'}</code>
                </p>
              </div>
            ),
            options: ['<video>', '<audio>'],
            correctAnswer: '<video>',
          },
          {
            type: 'text',
            text: <p>The <code>{'controls'}</code> attribute adds playback controls (play, pause, volume, etc.) to the multimedia elements.</p>,
          },
          {
            type: 'dragDrop',
            questionId: 'q3-l7',
            text: <p>Customize attributes like <code>{'width'}</code>, <code>{'height'}</code>, and <code>{'autoplay'}</code> for video and audio elements.<br/>
            The width and height attributes set the dimensions of the media player for both elements.<br/>
            The autoplay attribute, when present, makes the media play automatically when the page loads</p>,
            question: (
              <div>
                <p>
                <code>{'<video src="video.mp4" controls width="400" height="300" '}</code>
                 {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}
                <code>{'>'}</code>
                </p>
              </div>
            ),
            options: ['autoplay', 'controls'],
            correctAnswer: 'autoplay',
          },
        {
          type: 'text',
          text: <p> Explore other attributes such as <b>loop</b> to loop playback <br></br>
          and <b>preload</b> for preloading multimedia content.</p>,
        },
        {
          type: 'dragDrop',
          questionId: 'q3-l7',
          text: (
            <p>
              Inside the <code>{'<head>'}</code>, the <code>{'<title>'}</code> element sets the title of the HTML document
              <br />
              , which is displayed in the browser's title bar or tab.
            </p>
          ),
          question: (
            <div>
              <p>
              <code>{'<audio src="audio.mp3" controls loop'}</code>
              {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}
              <code>{' ="auto"></audio>'}</code>

              </p>
            </div>
          ),
          options: ['preload', 'controls'],
          correctAnswer: 'preload',
        },
        {
          type: 'text',
          text: <p> The <code>{'preload'}</code> attribute specifies how the media should be loaded when the page loads.
          <br /> Possible values for <b>preload, auto, metadata </b> 
          <br /><b>auto:</b> Preloads the entire media file, ensuring smooth playback by starting loading as soon as the page loads.
          <br /> <b>metadata:</b>Loads only metadata (e.g., duration), displaying basic media information without downloading the full content until playback.
          <br /><b>none:</b> Defers media loading until the user initiates playback, loading the media file on demand.
          </p>,
        },
      ];
  return (
    <div>
        <LessonSlide key="lessonSeven"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  )
}

export default LessonSeven