import { BaseEntity } from "./baseEntity"
import { Question } from "./question"


export class Module extends BaseEntity {
	public number!: number
	public name!: string
	public questions?: Question[]

	constructor(props: Omit<Module, "id" | "createdAt" | "updatedAt">, id?: string) {
		super(props, id)
	}
}