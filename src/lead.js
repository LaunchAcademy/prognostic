export const initLead = () => {
  return {
    firstName: '',
    lastName: '',
    email: '',
    errors: {}
  }
}

export const updateLead = (lead, options) => {
  return {
    ...lead,
    ...options
  }
}
