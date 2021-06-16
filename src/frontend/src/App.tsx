import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


import { Body } from "./styles/body"
import { GlobalStyles } from "./styles/globalStyles"
import { PageQuestions } from "./components/Pages/Questions"
import { Header } from "./components/Header"
import { PageModules } from "./components/Pages/Modules"


export const App = () => {
  return (
    <Router>
      <Header />
      <Body>
        <Switch>
          <Route path="/:id">
            <PageQuestions />
          </Route>
          <Route path="/">
            <PageModules />
          </Route>
        </Switch>
      </Body>
      < GlobalStyles />
    </Router>
  )
}