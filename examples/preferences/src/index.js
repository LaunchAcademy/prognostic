import React from 'react'
import ReactDOM from 'react-dom'

import { Quiz } from '../../../src/index'
//TODO: fix this path issue
// import { Quiz } from 'prognostic'

const quiz = {
  title: 'Preferences',
  questions: [
    {
      text: 'What is your favorite color?',
      options: ['Red', 'Green', 'Blue']
    },
    {
      text: 'What is your favorite food?',
      options: ['Pizza', 'Chicken', 'Green Beans']
    }
  ]
}

ReactDOM.render(<Quiz {...quiz} />, document.getElementById('app'))
