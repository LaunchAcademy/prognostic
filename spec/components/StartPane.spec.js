import React from 'react'
import { mount, shallow } from 'enzyme'

import StartPane from 'components/StartPane'

describe('StartPane', () => {
  let startPane
  const onStart = jest.fn()
  const title = 'Some quiz'

  beforeAll(() => {
    startPane = mount(<StartPane title={title} onStart={onStart} />)
  })

  it('has a title', () => {
    const headline = startPane.find('h1')
    expect(headline).toBeDefined()
    expect(headline.text()).toEqual(title)
  })

  it('has a button', () => {
    const button = startPane.find('button')
    expect(button.length).toBe(1)
    expect(button.text()).toEqual('Start')
  })

  it('triggers onStart when the button is clicked', () => {
    const button = startPane.find('button')
    button.simulate('click')
    expect(onStart.mock.calls.length).toBe(1)
  })
})
