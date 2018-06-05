import React from 'react'
import { mount, shallow } from 'enzyme'

import ValidatedField from 'components/ValidatedField'

describe('ValidatedField', () => {
  let errors

  const mountField = () => {
    return mount(
      <ValidatedField errors={errors}>
        <span>W00t</span>
      </ValidatedField>
    )
  }

  describe('an invalid field', () => {
    beforeEach(() => {
      errors = ['Email is invalid']
    })

    it('designates the invalid-field class when I have an error', () => {
      const field = mountField()
      const containingDiv = field.find('div').first()
      expect(containingDiv.hasClass('invalid-field')).toBe(true)
    })

    it('renders a paragraph of errors', () => {
      const field = mountField()
      expect(field.find('p.field-errors').length).toBe(1)
    })
  })

  describe('a valid field', () => {
    beforeEach(() => {
      errors = []
    })

    it('does not designate an invalid-field class', () => {
      const field = mountField()
      const containingDiv = field.find('div').first()
      expect(containingDiv.hasClass('invalid-field')).toBe(false)
    })

    it('does not render an error div', () => {
      const field = mountField()
      expect(field.find('p.field-errors').length).toBe(0)
    })
  })
})
