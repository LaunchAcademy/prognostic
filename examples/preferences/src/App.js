import React from 'react'
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

const App = props => {
  return <Quiz {...quiz} />
}

export default App
