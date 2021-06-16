import React from "react"
import { Container, Row } from "react-bootstrap"
import { Module } from "../../Module"


export const PageModules = () => {
  return (
    <Container className="fluid mx-auto">
      <Row className="justify-content-center">
        <Module number={1} />
        <Module number={2} />
        <Module number={3} />
        <Module number={4} />
      </Row>
    </Container>
  )
}