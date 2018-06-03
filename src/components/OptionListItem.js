import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

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
    const classes = {
      'quiz-option': true,
      selected: this.props.selected
    }
    return (
      <li className={classnames(classes)}>
        <a href="#" onClick={this.onClick}>
          {this.props.option}
        </a>
      </li>
    )
  }
}

OptionListItem.defaultProps = {
  selected: false
}

OptionListItem.propTypes = {
  option: PropTypes.string.isRequired,
  onOptionSelect: PropTypes.func,
  selected: PropTypes.bool
}

export default OptionListItem
