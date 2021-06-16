import { Link, useParams } from "react-router-dom"
import axios from "axios"
import React, { useState, useEffect } from "react"
import { Form, Card, Button } from "react-bootstrap"

import { Question } from "../../Question"
import { IQuestion } from "../../../entities/question"
import { handleSubmit } from "../../Forms/FormQuestions"
import { useAppSelector } from "../../../hooks"


interface IParams {
  id: string
}


export const PageQuestions = () => {
  const questionsReducer = useAppSelector(state => state.questionsReducer)
  const [questions, setQuestions] = useState<IQuestion[]>([])
  const { id } = useParams<IParams>()

  useEffect(() => {
    axios.get<IQuestion[]>("http://localhost:3333/module/", { params: { id } })
      .then(response => {
        setQuestions(response.data)
      })
      .catch(console.log)
  }, [id])

  return (
    <>
      <Form onSubmit={(event) => handleSubmit(questionsReducer.answers, event)}>
        {
          questions.map(question => (
            <Form.Group key={`${question.number}`}>
              <Card>
                <Card.Header>{question.number} - {question.name}</Card.Header>
                <Card.Body>
                  {React.createElement(Question, question)}
                </Card.Body>
              </Card>
            </Form.Group>
          ))
        }
        <Button type="submit" className="btn-primary" disabled={!(questionsReducer.enabled > questions.length)}>Enviar</Button>
      </Form>
      <Link to="/">Home</Link>
    </>
  )
}