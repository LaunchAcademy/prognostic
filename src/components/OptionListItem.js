import React from 'react'
import PropTypes from 'prop-types'

const OptionListItem = props => {
  return (
    <li className="quiz-option">
      <a href="#" onClick={props.onOptionSelect}>
        {props.option}
      </a>
    </li>
  )
}

OptionListItem.propTypes = {
  option: PropTypes.string.isRequired,
  onOptionSelect: PropTypes.func
}

export default OptionListItem
