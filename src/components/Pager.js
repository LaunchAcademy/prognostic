import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Pager extends Component {
  constructor(props) {
    super(props)
    this.back = this.back.bind(this)
    this.forward = this.forward.bind(this)
  }

  back(e) {
    e.preventDefault()
    this.props.onBack()
  }

  forward(e) {
    e.preventDefault()
    this.props.onForward()
  }

  backPagerEnabled() {
    return this.props.paneIndex > 0
  }

  forwardPagerEnabled() {
    return this.props.canMoveForward
  }

  showPager() {
    return this.props.paneIndex >= 0
  }

  render() {
    let contents = null
    if (this.showPager()) {
      let backProps = {
        onClick: this.back,
        className: 'pane-back'
      }

      if (!this.backPagerEnabled()) {
        backProps.disabled = 'disabled'
      }

      let forwardProps = {
        onClick: this.forward,
        className: 'pane-forward'
      }

      if (!this.forwardPagerEnabled()) {
        forwardProps.disabled = 'disabled'
      }

      contents = (
        <div className="pane-pager">
          <button {...backProps}>&lt;</button>
          <button {...forwardProps}>&gt;</button>
        </div>
      )
    }
    return contents
  }
}

Pager.propTypes = {
  paneIndex: PropTypes.number.isRequired,
  paneCeiling: PropTypes.number.isRequired,
  onBack: PropTypes.func.isRequired,
  onForward: PropTypes.func.isRequired
}
