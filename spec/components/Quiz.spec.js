import React from 'react'
import { mount, shallow } from 'enzyme'

import { startQuiz, answerQuestion } from 'quiz'
import Quiz from 'components/Quiz'
import MultipleChoiceQuestion from 'components/MultipleChoiceQuestion'

const quizProps = {
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
  ],
  onLeadSubmit: jest.fn(),
  onOptionSelect: jest.fn()
}

describe('Quiz', () => {
  let props
  let mountedQuiz

  const quizComp = () => {
    return mount(<Quiz {...quizProps} />)
  }

  beforeEach(() => {
    mountedQuiz = quizComp()
  })

  it('renders a component for each question', () => {
    expect(mountedQuiz.find('.quiz-question').length).toEqual(
      quizProps.questions.length
    )
  })

  it('renders a start pane', () => {
    expect(mountedQuiz.find('.quiz-start-pane').length).toBe(1)
  })

  it('triggers an onLeadSubmit custom event', () => {
    const lead = {}
    mountedQuiz.instance().onLeadSubmit(lead)
    expect(quizProps.onLeadSubmit.mock.calls.length).toBe(1)
  })

  it('triggers an onOptionSelect custom event', () => {
    const question = quizProps.questions[0]
    const answer = quizProps.questions[0].options[0]

    mountedQuiz.instance().onOptionSelect(question, answer)
    expect(quizProps.onOptionSelect.mock.calls.length).toBe(1)
  })
})

describe('quiz questions', () => {
  let props
  let mountedQuiz
  let halfwayDoneQuiz

  const quizComp = () => {
    halfwayDoneQuiz = answerQuestion(
      startQuiz({}),
      quizProps.questions[0],
      'Red'
    )
    const quizInstance = shallow(<Quiz {...quizProps} />)
    quizInstance.setState({ quiz: halfwayDoneQuiz })
    return quizInstance
  }

  it('sets the response', () => {
    mountedQuiz = quizComp()
    const questionComponent = mountedQuiz.find('MultipleChoiceQuestion').first()
    expect(questionComponent.props().response.answer).toBe('Red')
  })
})
