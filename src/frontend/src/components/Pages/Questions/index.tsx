import { Link } from "react-router-dom"
import axios from "axios"
import React, { useState, useEffect } from "react"

import { Question } from "../../Question"
import { Button, Form } from "react-bootstrap"
import { IQuestion } from "../../../entities/question"
import { handleSubmit } from "../../Forms/FormQuestions"
import { useAppSelector } from "../../../hooks"


export const PageQuestions = () => {
  const questionsReducer = useAppSelector(state => state.questionsReducer)
  const [questions, setQuestions] = useState([] as IQuestion[])

  useEffect(() => {
    axios.get<IQuestion[]>("http://localhost:3333/module/", {})
      .then(response => {
        setQuestions(response.data)
      })
      .catch(console.log)
  }, [])

  return (
    <>
      <Form onSubmit={(event) => handleSubmit(questionsReducer.answers, event)}>
        {
          questions.map(question => (
            React.createElement(Question, question)
          ))
        }
        <Button type="submit" className="btn-primary" disabled={!(questionsReducer.enabled > questions.length)}>Enviar</Button>
      </Form>
      <Link to="/">Home</Link>
    </>
  )
}