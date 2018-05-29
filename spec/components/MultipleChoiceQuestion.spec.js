import React from 'react'
import { mount, shallow } from 'enzyme'

import MultipleChoiceQuestion from 'components/MultipleChoiceQuestion'
import OptionListItem from 'components/OptionListItem'

const question = {
  text: 'What is your favorite color?',
  options: ['Red', 'Green', 'Blue']
}

const onOptionSelect = options => {}

describe('MultipleChoiceQuestion', () => {
  let props
  let mountedQuestion

  const questionComp = () => {
    return mount(<MultipleChoiceQuestion {...props} />)
  }

  const shallowQuestion = () => {
    return shallow(<MultipleChoiceQuestion {...props} />)
  }

  beforeEach(() => {
    props = { question, onOptionSelect }
    mountedQuestion = questionComp()
  })

  it('renders an h2 with question text', () => {
    expect(mountedQuestion.find('h2').text()).toEqual(question.text)
  })

  it('renders a li with the "Red" as an option', () => {
    expect(
      mountedQuestion
        .find('li')
        .first()
        .text()
    ).toEqual(question.options[0])
  })
})
