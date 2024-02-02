import React, { useState } from 'react';
import Quiz from '../../quizes/Quiz';

const QuizTwoInPython: React.FC = () => {
      const quizQuestions = [
        {
          questionId: 'q1_Q2_python',
          text: 'How do you create a list named fruits with items "apple", "banana", and "orange" in Python?',
          question: 'How do you create a list named fruits with items "apple", "banana", and "orange" in Python?',
          options: ['list(fruits = ["apple", "banana", "orange"])', 'fruits = createList("apple", "banana", "orange")',
           'fruits = ["apple", "banana", "orange"]', 'fruits.append(["apple", "banana", "orange"])'],
          correctAnswers: 'fruits = ["apple", "banana", "orange"]',

        },
        {
          questionId: 'q2_Q2_python',
          text:'What is the correct way to access the second item in the fruits list?',
          question:'What is the correct way to access the second item in the fruits list?',
          options:['fruits[0]', 'fruits[1]', 'fruits[2]', 'fruits.index(1)'],
          correctAnswers: 'fruits[1]',

        },
        {
          questionId: 'q3_Q2_python',
          text: 'What is the main characteristic of tuples in Python?',
          question: 'What is the main characteristic of tuples in Python?',
          options: ['Tuples are mutable.', 'Tuples are unordered.',
           'Tuples can be changed using indexing.', 'Tuples have a fixed size.'],
          correctAnswers:'Tuples have a fixed size.',

        },{
          questionId: 'q4_Q2_python',
          text: 'How do you create a new tuple newColors by combining colors and additionalColors?',
          question: 'How do you create a new tuple newColors by combining colors and additionalColors?',
          options: ['newColors = colors - additionalColors',
           'newColors = colors / additionalColors',
            'newColors = colors + additionalColors',
             'newColors = colors.append(additionalColors)'],
          correctAnswers: 'newColors = colors + additionalColors',

        },{
          questionId: 'q5_Q2_python',
          text: 'What operation can you use to join two or more tuples in Python?',
          question: 'What operation can you use to join two or more tuples in Python?',
          options: ['tuple1 . tuple2', 'tuple1 - tuple2', 'tuple1 + tuple2', 'tuple1 * tuple2'],
          correctAnswers: 'tuple1 + tuple2',

        },{
          questionId: 'q6_Q2_python',
          text: 'How do you remove the element apple from the set fruits in Python?',
          question: 'How do you remove the element apple from the set fruits in Python?',
          options: [`fruits.delete('apple')`,`fruits.exclude('apple')`,
          `fruits.remove('apple')`, `fruits.discard('apple')`,],
          correctAnswers: `fruits.remove('apple')`,

        },{
          questionId: 'q7_Q2_python',
          text: 'What method is used to add a single item to a set in Python?',
          question: 'What method is used to add a single item to a set in Python?',
          options: ['set.insert()', 'set.append()', 'set.add()', 'set.include()'],
          correctAnswers: 'set.add()',

        },{
          questionId: 'q8_Q2_python',
          text: 'How do you loop through the colors set and print each color in Python?',
          question: 'How do you loop through the colors set and print each color in Python?',
          options:['for color in colors: print(color)', 'if color in colors: print(color)',
           'while color in colors: print(color)', 'for color: colors print(color)'],
          correctAnswers: 'for color in colors: print(color)',

        },{
          questionId: 'q9_Q2_python',
          text: 'What is a key characteristic of sets in Python?',
          question: 'What is a key characteristic of sets in Python?',
          options: ['Sets only support immutable data types.', 'Sets can only be created using a constructor.',
           ' Sets can contain duplicate elements.', 'Sets maintain the order of elements'],
          correctAnswers: 'Sets only support immutable data types.',

        },{
          questionId: 'q10_Q2_python',
          text: 'What is the main characteristic of tuples in Python?',
          question: 'What is the main characteristic of tuples in Python?',
          options: ['Tuples are mutable.', 'Tuples are unordered.',
           'Tuples can be changed using indexing.', 'Tuples have a fixed size.'],
          correctAnswers:'Tuples have a fixed size.',

        },
      ];   
  return (
    <div>
        <Quiz  quizQuestions={quizQuestions} />
    </div>
  )
}

export default QuizTwoInPython