import React from 'react'
import { render } from 'react-dom'

import App from './App'
import { default as RedBox } from 'redbox-react'

const root = document.getElementById('app')

try {
  render(<App />, root)
} catch (e) {
  render(<RedBox useLines={false} error={e} />, root)
}
