# Prognostic

## What is Prognostic?

Prognostic is a client side framework for low stakes quizing

## Installation

```bash
#npm
npm install prognostic

#yarn
yarn install prognostic
```

## Building Your First Quiz

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

import { Quiz } from 'prognostic'

const quiz = {
  title: 'Preferences',
  questions: [
    {
      text: 'What is your favorite color?',
      options: ['Red', 'Green', 'Blue']
    },
    {
      text: 'What is your favorite food?',
      options: ['Pizza', 'Chicken', 'Green Beans']
    }
  ]
}

ReactDOM.render(<Quiz {...quiz} />, document.getElementById('app'))
```
