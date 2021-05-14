import { IUseCase } from "../../interfaces/IUseCase"
import { GetModuleDto } from "./getModulesDto"


export class GetModulesUseCase implements IUseCase {
	async execute(data: GetModuleDto): Promise<Object> {
		return { data }
	}
}