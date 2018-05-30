import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MultipleChoiceQuestion from './MultipleChoiceQuestion'
import StartPane from './StartPane'

import { initQuiz, startQuiz, answerQuestion } from '../quiz'

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quiz: initQuiz(props.quiz)
    }

    this.onStart = this.onStart.bind(this)
    this.onOptionSelect = this.onOptionSelect.bind(this)
    this.buildQuestionComponents = this.buildQuestionComponents.bind(this)
  }

  onStart() {
    this.setState({
      quiz: startQuiz(this.props.quiz)
    })
  }

  onOptionSelect(question, option) {
    this.setState({
      quiz: answerQuestion(this.state.quiz, question, option)
    })
  }

  showStartPane() {
    return this.state.quiz.questionIndex === -1
  }

  buildQuestionComponents() {
    let componentArray = []
    const { questions } = this.props
    for (let i = 0; i < questions.length; i++) {
      const newComponent = (
        <MultipleChoiceQuestion
          key={i}
          active={this.state.quiz.questionIndex === i}
          onOptionSelect={this.onOptionSelect}
          questionIndex={i}
          question={questions[i]}
        />
      )
      componentArray = [...componentArray, newComponent]
    }
    return componentArray
  }

  render() {
    const questionComponents = this.buildQuestionComponents()
    return (
      <div className="prognostic-quiz">
        <StartPane
          title={this.props.title}
          active={this.showStartPane()}
          onStart={this.onStart}
        />
        {questionComponents}
      </div>
    )
  }
}

Quiz.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired
}

export default Quiz
