import { validateEmail } from 'validator'

describe('validating email', () => {
  it('appends an error for a blank string', () => {
    expect(validateEmail([], '').length).toBe(1)
  })

  it('appends an error for something without an @', () => {
    expect(validateEmail([], 'dan').length).toBe(1)
  })

  it('appends an error for something without a tld', () => {
    expect(validateEmail([], 'dan@example').length).toBe(1)
  })

  it('does not append an error for valid email', () => {
    expect(validateEmail([], 'dan@example.com').length).toBe(0)
  })
})
