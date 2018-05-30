import * as responseMod from 'response'

describe('making a response', () => {
  let response

  const question = {
    text: 'What is your favorite color?'
  }

  const answer = 'Red'

  beforeEach(() => {
    response = responseMod.makeResponse(question, answer)
  })

  it('sets the respondedAt property', () => {
    expect(response.respondedAt).toBeDefined()
  })

  it('sets the answer', () => {
    expect(response.answer).toBe(answer)
  })
})
