import { Router } from "express"

import { getModuleController } from "./getModules"
import { postModuleAnswersController } from "./postModuleAnswers"


const moduleRouter = Router()

moduleRouter.get("/", (request, response) => {
  return getModuleController.handle(request, response)
})

moduleRouter.post("/answers", (request, response) => {
  return postModuleAnswersController.handle(request, response)
})

export { moduleRouter }
