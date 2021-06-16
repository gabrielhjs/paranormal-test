import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { CardStyled } from "./styles"


interface Props {
  number: number
}


export const Module = (props: Props) => {

  return (
    <Link to={{
      pathname: `/${props.number}`,
    }} className="w-75 my-2">
      <Card className="w-100">
        <CardStyled>
          <Card.Title className="my-4"><h5>Modulo ({props.number})</h5></Card.Title>
        </CardStyled>
      </Card>
    </Link>
  )
}