export const makeResponse = (question, answer) => {
  return {
    question: {
      text: question.text
    },
    respondedAt: new Date(),
    answer
  }
}
