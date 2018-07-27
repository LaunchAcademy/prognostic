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
    this.changeLead = this.changeLead.bind(this)
    this.validateField = this.validateField.bind(this)
  }

  submit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.lead)
  }

  changeLead(e) {
    const {
      target: { name, value }
    } = e
    const oldLead = this.state.lead
    this.setState({
      lead: {
        ...updateLead(oldLead, { [name]: value }),
        errors: {email: this.validateField()}
      }
    })
  }

  //since email is the only validated field, we can assume it's email
  validateField(e) {
    let errors = []
    const { lead } = this.state
    return validateEmail(errors, lead.email)
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
              onChange={this.changeLead}
            />
          </ValidatedField>
          <div>
            <input
              type="text"
              name="firstName"
              value={lead.firstName}
              onChange={this.changeLead}
              placeholder="Your first name (optional)..."
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              value={lead.lastName}
              onChange={this.changeLead}
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
