import React from "react"
import { Form } from "react-bootstrap"

import { IQuestion } from "../../entities/question"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { insertAnswer } from "../Pages/Questions/questionsReducer"


export const Question = (props: IQuestion) => {
  const questionsReducer = useAppSelector(state => state.questionsReducer)
  const dispatch = useAppDispatch()

  const orderedOptions = props.options.sort((item, nextItem) => {
    return item.number > nextItem.number ? 1 : -1
  })

  return (
    <>
      {
        orderedOptions.map(option => (
          <Form.Check
            id={`${props.number}-${option.number}`}
            key={option.number}
            inline
            label={option.name}
            type="radio"
            disabled={questionsReducer.enabled < props.number}
            checked={questionsReducer.answers[props.id] === option.id}
            onChange={() => dispatch(insertAnswer.insertAnswer({ id: props.id, option: option.id }))}
          />
        ))
      }
    </>
  )
}