import React from 'react'
import Pager from 'components/Pager'
import { mount } from 'enzyme'

describe('Pager', () => {
  let pager
  let props
  const onBack = jest.fn()
  const onForward = jest.fn()

  beforeAll(() => {
    props = {
      paneIndex: 1,
      paneCeiling: 3,
      canMoveForward: true,
      onBack,
      onForward
    }
  })

  const mountPager = () => {
    pager = mount(<Pager {...props} />)
  }

  it('has a back page button', () => {
    mountPager()
    expect(pager.find('button.pane-back').length).toBe(1)
  })

  it('triggers an onBack callback on back btn click', () => {
    mountPager()
    const backBtn = pager.find('button.pane-back')
    backBtn.simulate('click')
    expect(onBack.mock.calls.length).toBe(1)
  })

  it('has a forward page button', () => {
    mountPager()
    expect(pager.find('button.pane-forward').length).toBe(1)
  })

  it('triggers an onForward call back on forward btn click', () => {
    mountPager()
    const forwardBtn = pager.find('button.pane-forward')
    forwardBtn.simulate('click')
    expect(onForward.mock.calls.length).toBe(1)
  })

  it('disables the backButton when I am at paneIndex 0', () => {
    props.paneIndex = 0
    mountPager()
    const backBtn = pager.find('button.pane-back')
    expect(backBtn.is('[disabled]')).toBe(true)
  })

  it('disabled the forwardButton when canForward is false', () => {
    props.canMoveForward = false
    mountPager()
    const backBtn = pager.find('button.pane-forward')
    expect(backBtn.is('[disabled]')).toBe(true)
  })
})
