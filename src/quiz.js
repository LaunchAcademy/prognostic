import { makeResponse } from './response'

export const initQuiz = quiz => {
  return {
    ...quiz,
    paneIndex: -1,
    response: {}
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

export const setQuizPane = (quiz, paneIndex) => {
  return {
    ...quiz,
    paneIndex: paneIndex
  }
}

export const canMoveForward = (quiz, numQuestions) => {
  const {
    paneIndex,
    response: { questionResponses }
  } = quiz
  if (questionResponses) {
    const numResponses = Object.keys(questionResponses).length
    return numResponses > paneIndex && paneIndex !== numQuestions
  } else {
    return false
  }
}
