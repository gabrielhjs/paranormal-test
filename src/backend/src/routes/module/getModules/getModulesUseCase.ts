import { Option } from "../../../entities/option"
import { Question } from "../../../entities/question"
import { IUseCase } from "../../interfaces/IUseCase"
import { GetModuleDto } from "./getModulesDto"


export class GetModulesUseCase implements IUseCase {
	async execute(data: GetModuleDto): Promise<Object> {
		return [
			new Question({
				number: 1, name: "pergunta 1", options: [
					new Option({ number: 1, name: "Opção A" }),
					new Option({ number: 2, name: "Opção B" }),
					new Option({ number: 3, name: "Opção C" }),
				]
			}),
			new Question({
				number: 2, name: "pergunta 2", options: [
					new Option({ number: 1, name: "Opção A" }),
					new Option({ number: 2, name: "Opção B" }),
					new Option({ number: 3, name: "Opção C" }),
				]
			}),
			new Question({
				number: 3, name: "pergunta 3", options: [
					new Option({ number: 1, name: "Opção A" }),
					new Option({ number: 2, name: "Opção B" }),
					new Option({ number: 3, name: "Opção C" }),
				]
			}),
			new Question({
				number: 4, name: "pergunta 4", options: [
					new Option({ number: 1, name: "Opção A" }),
					new Option({ number: 2, name: "Opção B" }),
					new Option({ number: 3, name: "Opção C" }),
				]
			}),
			new Question({
				number: 5, name: "pergunta 5", options: [
					new Option({ number: 1, name: "Opção A" }),
					new Option({ number: 2, name: "Opção B" }),
					new Option({ number: 3, name: "Opção C" }),
				]
			}),
		]
	}
}