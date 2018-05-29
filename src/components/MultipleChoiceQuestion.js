import React from 'react'
import PropTypes from 'prop-types'
import OptionListItem from './OptionListItem'
import classnames from 'classnames'

const makeListItems = (options, callback) => {
  let i = 0
  return options.map(option => {
    i++
    return <OptionListItem key={i} onOptionSelect={callback} option={option} />
  })
}

const MultipleChoiceQuestion = props => {
  const { text, options } = props.question
  const optionComponents = makeListItems(options, props.onOptionSelect)

  const classes = {
    'quiz-question': true,
    hidden: !props.active
  }

  return (
    <div className={classnames(classes)}>
      <h2>{text}</h2>

      <ul>{optionComponents}</ul>
    </div>
  )
}

MultipleChoiceQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  onOptionSelect: PropTypes.func
}

export default MultipleChoiceQuestion
