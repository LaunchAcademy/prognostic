import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const StartPane = props => {
  const classes = {
    'quiz-start-pane': true,
    hidden: !props.active
  }
  return (
    <div className={classnames(classes)}>
      <h1>{props.title}</h1>
      <button onClick={props.onStart}>Start</button>
    </div>
  )
}

StartPane.defaultProps = {
  active: false
}

StartPane.propTypes = {
  active: PropTypes.bool.isRequired,
  onStart: PropTypes.func.isRequired
}

export default StartPane
