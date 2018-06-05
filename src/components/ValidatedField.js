import PropTypes from 'prop-types'
import classnames from 'classnames'

import React, { Component } from 'react'
export class ValidatedField extends Component {
  errorParagraph() {
    const { errors } = this.props
    if (errors.length > 0) {
      return <p className="field-errors">{errors.join(', ')}</p>
    } else {
      return ''
    }
  }

  render() {
    const classes = {
      'invalid-field': this.props.errors.length > 0
    }
    return (
      <div className={classnames(classes)}>
        {this.props.children}
        {this.errorParagraph()}
      </div>
    )
  }
}

ValidatedField.defaultProps = {
  errors: []
}

ValidatedField.proptypes = {
  children: PropTypes.node.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default ValidatedField
