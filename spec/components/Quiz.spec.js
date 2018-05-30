import React from 'react'
import { mount, shallow } from 'enzyme'

import Quiz from 'components/Quiz'
import MultipleChoiceQuestion from 'components/MultipleChoiceQuestion'

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

describe('Quiz', () => {
  let props
  let mountedQuiz

  const quizComp = () => {
    return mount(<Quiz {...quiz} />)
  }

  beforeEach(() => {
    mountedQuiz = quizComp()
  })

  it('renders a component for each question', () => {
    expect(mountedQuiz.find('.quiz-question').length).toEqual(
      quiz.questions.length
    )
  })

  it('renders a start pane', () => {
    expect(mountedQuiz.find('.quiz-start-pane').length).toBe(1)
  })
})
