import axios from "axios"
import React from "react"
import { IQuestionAnswers } from "../../entities/questionAnswer"


const handleSubmit = (answers: IQuestionAnswers, event: React.FormEvent) => {
  event.preventDefault()

  const answersList = Object.entries(answers)

  axios.post<String>(
    "http://localhost:3333/module/answers",
    { answers: answersList },
    { headers: { "content-type": "application/json" } }
  )
    .then(response => console.log(response.data))
    .catch(console.log)
}


export { handleSubmit }