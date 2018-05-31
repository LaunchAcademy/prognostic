import { initLead, updateLead } from 'lead'

describe('initializing a lead', () => {
  let lead
  beforeEach(() => {
    lead = initLead()
  })

  it('creates a firstName prop', () => {
    expect(lead.firstName).toBe('')
  })

  it('creates a lastName prop', () => {
    expect(lead.lastName).toBe('')
  })

  it('creates an email prop', () => {
    expect(lead.email).toBe('')
  })
})

describe('updating a lead', () => {
  let lead
  const firstName = 'John'
  beforeEach(() => {
    lead = initLead()
  })

  it('reassigns an existing field', () => {
    let newLead = updateLead(lead, { firstName })
    expect(newLead.firstName).toBe(firstName)
  })
})
