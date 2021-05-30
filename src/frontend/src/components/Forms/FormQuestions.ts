import React from "react"
import { IQuestionAnswers } from "../../entities/questionAnswer"


const handleSubmit = (answers: IQuestionAnswers, event: React.FormEvent) => {
  event.preventDefault()

  console.log(answers)
}


export { handleSubmit }