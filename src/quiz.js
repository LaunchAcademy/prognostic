import { makeResponse } from './response'

export const initQuiz = quiz => {
  return {
    ...quiz,
    paneIndex: -1
  }
}

export const startQuiz = quiz => {
  return {
    ...quiz,
    paneIndex: 0,
    response: {
      startedAt: new Date()
    }
  }
}

export const answerQuestion = (quiz, question, answer) => {
  const response = quiz.response || {}
  const paneIndex = quiz.paneIndex
  const questionResponses = response.questionResponses || []
  return {
    ...quiz,
    paneIndex: paneIndex + 1,
    response: {
      ...response,
      questionResponses: {
        ...questionResponses,
        [paneIndex]: makeResponse(question, answer)
      }
    }
  }
}

export const submitLead = (quiz, lead) => {
  const response = quiz.response || {}
  return {
    ...quiz,
    response: {
      ...response,
      lead: lead,
      completedAt: new Date()
    }
  }
}
