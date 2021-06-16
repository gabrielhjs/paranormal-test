import { Request, Response } from "express"

import { IController } from "../../interfaces/IController"
import { IUseCase } from "../../interfaces/IUseCase"
import { PostModuleAnswersDto } from "./postModuleAnswersDto"


export class PostModuleAnswersController implements IController {
  constructor(
    private postModuleAnswersUseCase: IUseCase<PostModuleAnswersDto, String>
  ) { }
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { answers } = request.body
      const data = await this.postModuleAnswersUseCase.execute({ answers })

      if (data.error) {
        return response.status(400).send({ error: data.error })
      }

      return response.status(200).send(data.data)
    }
    catch (error) {
      console.log(error.message)
      return response.status(500).send(
        { error: "Unexpected error." }
      )
    }
  }
}