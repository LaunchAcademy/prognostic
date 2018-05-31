import React from 'react'
import { mount, shallow } from 'enzyme'

import LeadPane from 'components/LeadPane'

describe('lead pane', () => {
  let leadPane
  const onSubmit = jest.fn()
  beforeEach(() => {
    leadPane = mount(<LeadPane onSubmit={onSubmit} />)
  })

  it('has an email field', () => {
    expect(leadPane.find('input[type="email"]').length).toBe(1)
  })

  it('has a first name field', () => {
    expect(leadPane.find('input[name="firstName"]').length).toBe(1)
  })

  it('has a last name field', () => {
    expect(leadPane.find('input[name="lastName"]').length).toBe(1)
  })

  it('triggers an onSubmit when the form is submitted', () => {
    const form = leadPane.find('form')
    form.simulate('submit')
    expect(onSubmit.mock.calls.length).toBe(1)
  })
})
