import React, { Component } from 'react'
import PropTypes from 'prop-types'

class OptionListItem extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick(e) {
    e.preventDefault()
    this.props.onOptionSelect(this.props.option)
  }

  render() {
    return (
      <li className="quiz-option">
        <a href="#" onClick={this.onClick}>
          {this.props.option}
        </a>
      </li>
    )
  }
}

OptionListItem.propTypes = {
  option: PropTypes.string.isRequired,
  onOptionSelect: PropTypes.func
}

export default OptionListItem
