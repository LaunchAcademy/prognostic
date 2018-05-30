import * as quiz from 'quiz'

describe('initializing a quiz', () => {
  it('assigns a questionIndex of -1', () => {
    const aQuiz = quiz.initQuiz({})
    expect(aQuiz.questionIndex).toBe(-1)
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

  it('increments the questionIndex', () => {
    expect(resultingQuiz.questionIndex).toBe(1)
  })

  it('appends an answer to the response', () => {
    const aQuiz = quiz.startQuiz({})
    const newQuiz = quiz.answerQuestion(aQuiz, question, answer)
    expect(newQuiz.response.questionResponses['0']).toBeDefined()
  })
})
