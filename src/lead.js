export const initLead = () => {
  return {
    firstName: '',
    lastName: '',
    email: ''
  }
}

export const updateLead = (lead, options) => {
  return {
    ...lead,
    ...options
  }
}
