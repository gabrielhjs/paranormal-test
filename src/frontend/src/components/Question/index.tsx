import React from "react"
import { Form, Card } from "react-bootstrap"

import { IQuestion } from "../../entities/question"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { insertAnswer } from "../Pages/Questions/questionsReducer"


export const Question = (props: IQuestion) => {
  const questionsReducer = useAppSelector(state => state.questionsReducer)
  const dispatch = useAppDispatch()

  return (
    <Form.Group key={`${props.number}`} id={`${props.number}`}>
      <Card>
        <Card.Header>{props.number} - {props.name}</Card.Header>
        <Card.Body>
          {props.options?.map(option => (
            <Form.Check
              id={`${props.number}-${option.number}`}
              key={`${props.number}-${option.number}`}
              inline
              label={option.name}
              type="radio"
              disabled={questionsReducer.enabled < props.number}
              checked={questionsReducer.answers[props.id] === option.id}
              onChange={() => dispatch(insertAnswer.insertAnswer({ id: props.id, option: option.id }))}
            />
          ))}
        </Card.Body>
      </Card>
    </Form.Group>
  )
}