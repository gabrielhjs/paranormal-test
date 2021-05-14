import { Router } from "express"

import { getModuleController } from "./getModules"


const moduleRouter = Router()

moduleRouter.get("/", (request, response) => {
	return getModuleController.handle(request, response)
})


export { moduleRouter }
