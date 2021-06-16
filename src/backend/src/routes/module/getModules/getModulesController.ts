import { Request, Response } from "express"
import { Question } from "../../../entities/question"

import { IController } from "../../interfaces/IController"
import { IUseCase } from "../../interfaces/IUseCase"
import { GetModuleDto } from "./getModulesDto"


export class GetModulesController implements IController {
  constructor(
    private getModulesUseCase: IUseCase<GetModuleDto, Question[]>
  ) { }
  async handle(_: Request, response: Response): Promise<Response> {
    try {
      const data = await this.getModulesUseCase.execute({})

      if (data.error) {
        return response.status(400).send({ error: data.error })
      }

      return response.status(200).send(data.data)
    }
    catch (error) {
      console.log(error.message)
      return response.status(400).send(
        { error: "Unexpected error." }
      )
    }
  }
}