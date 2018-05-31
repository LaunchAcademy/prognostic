import { makeResponse } from './response'

export const initQuiz = quiz => {
  return {
    ...quiz,
    questionIndex: -1
  }
}

export const startQuiz = quiz => {
  return {
    ...quiz,
    questionIndex: 0,
    response: {
      startedAt: new Date()
    }
  }
}

export const answerQuestion = (quiz, question, answer) => {
  const response = quiz.response || {}
  const questionIndex = quiz.questionIndex
  const questionResponses = response.questionResponses || []
  return {
    ...quiz,
    questionIndex: questionIndex + 1,
    response: {
      ...response,
      questionResponses: {
        ...questionResponses,
        [questionIndex]: makeResponse(question, answer)
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
