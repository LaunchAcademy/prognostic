import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import ValidatedField from 'components/ValidatedField'
import { initLead, updateLead } from 'lead'
import { validateEmail } from 'validator'

class LeadPane extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lead: initLead()
    }

    this.submit = this.submit.bind(this)
    this.updateLead = this.updateLead.bind(this)
    this.validateField = this.validateField.bind(this)
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
    if (this.validateField()) {
      this.setState({
        lead: updateLead(oldLead, { [name]: value })
      })
    }
  }

  //since email is the only validated field, we can assume it's email
  validateField(e) {
    let errors = []
    const { lead } = this.state
    errors = validateEmail(errors, lead.email)
    this.setState({
      lead: {
        ...lead,
        errors: { email: errors }
      }
    })
  }

  render() {
    const { lead } = this.state
    const classes = {
      'quiz-lead-pane': true,
      hidden: !this.props.active
    }

    const leadErrors = this.state.lead.errors

    return (
      <div className={classnames(classes)}>
        <form action="#" onSubmit={this.submit}>
          <ValidatedField errors={leadErrors.email}>
            <input
              type="email"
              name="email"
              placeholder="Your email..."
              value={lead.email}
              onBlur={this.validateField}
              onChange={this.updateLead}
            />
          </ValidatedField>
          <div>
            <input
              type="text"
              name="firstName"
              value={lead.firstName}
              onChange={this.updateLead}
              placeholder="Your first name (optional)..."
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              value={lead.lastName}
              onChange={this.updateLead}
              placeholder="Your last name (optional)..."
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
