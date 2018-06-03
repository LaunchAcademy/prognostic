import React, { Component } from 'react'
import PropTypes from 'prop-types'
import OptionListItem from './OptionListItem'
import classnames from 'classnames'

class MultipleChoiceQuestion extends Component {
  constructor(props) {
    super(props)
    this.optionSelect = this.optionSelect.bind(this)
    this.makeListItems = this.makeListItems.bind(this)
  }

  optionSelect(option) {
    if (this.props.onOptionSelect) {
      this.props.onOptionSelect(this.props.question, option)
    }
  }

  makeListItems(options) {
    let i = 0
    return options.map(option => {
      i++
      const { answer: responseText } = this.props.response
      const selected = responseText && option === responseText
      return (
        <OptionListItem
          key={i}
          selected={selected}
          onOptionSelect={this.optionSelect}
          option={option}
        />
      )
    })
  }

  render() {
    const { text, options } = this.props.question
    const optionComponents = this.makeListItems(
      options,
      this.props.onOptionSelect
    )

    const classes = {
      'quiz-question': true,
      hidden: !this.props.active
    }

    return (
      <div className={classnames(classes)}>
        <h2>{text}</h2>

        <ul>{optionComponents}</ul>
      </div>
    )
  }
}

MultipleChoiceQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
  onOptionSelect: PropTypes.func,
  response: PropTypes.object
}

MultipleChoiceQuestion.defaultProps = {
  response: {}
}

export default MultipleChoiceQuestion
