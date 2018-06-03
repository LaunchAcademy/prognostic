import React from 'react'
import { mount, shallow } from 'enzyme'

import OptionListItem from 'components/OptionListItem'

describe('Option List Item', () => {
  let optionListItem
  const optionText = 'Yo'
  const optionSelect = jest.fn()

  beforeAll(() => {
    optionListItem = mount(
      <OptionListItem
        onOptionSelect={optionSelect}
        option={optionText}
        selected={true}
      />
    )
  })

  it('contains a list item', () => {
    expect(optionListItem.find('li').length).toBe(1)
  })

  it('contains a link with the option', () => {
    const anchor = optionListItem.find('a').first()
    expect(anchor).toBeDefined()
    expect(anchor.text()).toEqual(optionText)
  })

  it('fires onOptionSelect on the anchor click', () => {
    const anchor = optionListItem.find('a').first()
    anchor.simulate('click')
    expect(optionSelect.mock.calls).toContainEqual([optionText])
  })

  it('sets the selected classname if the option is selected', () => {
    expect(
      optionListItem
        .find('li')
        .first()
        .hasClass('selected')
    ).toBe(true)
  })
})
