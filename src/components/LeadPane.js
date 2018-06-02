import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { initLead, updateLead } from 'lead'

class LeadPane extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lead: initLead()
    }

    this.submit = this.submit.bind(this)
    this.updateLead = this.updateLead.bind(this)
  }

  submit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.lead)
  }

  updateLead(e) {
    const {
      target: { name, value }
    } = e
    const oldLead = this.state.lead
    this.setState({
      lead: updateLead(oldLead, { [name]: value })
    })
  }

  render() {
    const { lead } = this.state
    const classes = {
      'quiz-lead-pane': true,
      hidden: !this.props.active
    }

    return (
      <div className={classnames(classes)}>
        <form action="#" onSubmit={this.submit}>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your email..."
              value={lead.email}
              onChange={this.updateLead}
            />
          </div>
          <div>
            <input
              type="text"
              name="firstName"
              value={lead.firstName}
              onChange={this.updateLead}
              placeholder="Your first name..."
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              value={lead.lastName}
              onChange={this.updateLead}
              placeholder="Your last name..."
            />
          </div>

          <input type="submit" value="Show Results" />
        </form>
      </div>
    )
  }
}

LeadPane.defaultProps = {
  active: false
}

LeadPane.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
}

export default LeadPane
