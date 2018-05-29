import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MultipleChoiceQuestion from './MultipleChoiceQuestion'
import StartPane from './StartPane'

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questionIndex: -1
    }

    this.onStart = this.onStart.bind(this)
    this.onOptionSelect = this.onOptionSelect.bind(this)
    this.buildQuestionComponents = this.buildQuestionComponents.bind(this)
  }

  onStart() {
    this.setState({
      questionIndex: 0
    })
  }

  onOptionSelect(e) {
    e.preventDefault()
    this.setState({
      questionIndex: this.state.questionIndex + 1
    })
  }

  showStartPane() {
    return this.state.questionIndex === -1
  }

  buildQuestionComponents() {
    let componentArray = []
    const { questions } = this.props
    for (let i = 0; i < questions.length; i++) {
      const newComponent = (
        <MultipleChoiceQuestion
          key={i}
          active={this.state.questionIndex === i}
          onOptionSelect={this.onOptionSelect}
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
