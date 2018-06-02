import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MultipleChoiceQuestion from './MultipleChoiceQuestion'
import StartPane from './StartPane'
import LeadPane from './LeadPane'

import { initQuiz, startQuiz, answerQuestion, submitLead } from '../quiz'

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quiz: initQuiz(props.quiz)
    }

    this.onStart = this.onStart.bind(this)
    this.onOptionSelect = this.onOptionSelect.bind(this)
    this.buildQuestionComponents = this.buildQuestionComponents.bind(this)
    this.onLeadSubmit = this.onLeadSubmit.bind(this)
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

  onLeadSubmit(lead) {
    this.setState({
      quiz: submitLead(this.state.quiz, lead)
    })
  }

  showStartPane() {
    return this.state.quiz.paneIndex === -1
  }

  showLeadPane() {
    return this.state.quiz.paneIndex === this.props.questions.length
  }

  buildQuestionComponents() {
    let componentArray = []
    const { questions } = this.props
    for (let i = 0; i < questions.length; i++) {
      const newComponent = (
        <MultipleChoiceQuestion
          key={i}
          active={this.state.quiz.paneIndex === i}
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
        <LeadPane active={this.showLeadPane()} onSubmit={this.onLeadSubmit} />
      </div>
    )
  }
}

Quiz.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired
}

export default Quiz
