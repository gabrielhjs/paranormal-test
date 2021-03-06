import { Request, Response } from "express"

import { IController } from "../../interfaces/IController"
import { IUseCase } from "../../interfaces/IUseCase"


export class GetModulesController implements IController {
	constructor(
		private getModulesUseCase: IUseCase
	) { }
	async handle(request: Request, response: Response): Promise<Response> {
		try {
			const data = await this.getModulesUseCase.execute({})
			return response.status(200).send(data)
		}
		catch (error) {
			console.log(error.message)
			return response.status(400).send(
				{ error: "Unexpected error." }
			)
		}
	}
}