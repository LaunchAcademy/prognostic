import * as quiz from 'quiz'

describe('initializing a quiz', () => {
  it('assigns a paneIndex of -1', () => {
    const aQuiz = quiz.initQuiz({})
    expect(aQuiz.paneIndex).toBe(-1)
  })
})

describe('starting the quiz', () => {
  const mockUp = {
    response: {
      startedAt: new Date(),
      questionResponses: {
        '1': {
          question: {},
          respondedAt: new Date(),
          answer: 'Blue'
        }
      }
    }
  }

  it('appends a timestamp to when it was started', () => {
    const aQuiz = quiz.startQuiz({})

    expect(aQuiz.response).toBeDefined()
    expect(aQuiz.response.startedAt).toBeDefined()
  })
})

describe('anwering a question', () => {
  const question = {
    text: 'What is your favorite color?'
  }

  const answer = 'Red'

  let resultingQuiz

  beforeEach(() => {
    const aQuiz = quiz.startQuiz({})
    resultingQuiz = quiz.answerQuestion(aQuiz, question, answer)
  })

  it('increments the paneIndex', () => {
    expect(resultingQuiz.paneIndex).toBe(1)
  })

  it('appends an answer to the response', () => {
    const aQuiz = quiz.startQuiz({})
    const newQuiz = quiz.answerQuestion(aQuiz, question, answer)
    expect(newQuiz.response.questionResponses['0']).toBeDefined()
  })
})

describe('setting quiz pane', () => {
  it('updates the paneIndex based on the supplied arg', () => {
    const aQuiz = quiz.startQuiz({})
    const resultingQuiz = quiz.setQuizPane(aQuiz, 2)
    expect(resultingQuiz.paneIndex).toBe(2)
  })
})

describe('moving forward', () => {
  const question = {
    text: 'What is your favorite color?'
  }

  const answer = 'Red'
  let resultingQuiz
  let aQuiz

  beforeEach(() => {
    aQuiz = quiz.startQuiz({})
    resultingQuiz = quiz.answerQuestion(aQuiz, question, answer)
  })

  it('can move forward if I have answered more questions than the one I am on', () => {
    resultingQuiz.paneIndex = 0
    expect(quiz.canMoveForward(resultingQuiz, 1)).toBe(true)
  })

  it('cannot move forward if I am on the leadPane', () => {
    expect(quiz.canMoveForward(resultingQuiz, 1)).toBe(false)
  })

  it('cannot move forward if I have not answered the current question', () => {
    expect(quiz.canMoveForward(aQuiz, 1)).toBe(false)
  })
})
