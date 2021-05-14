import { BaseEntity } from "./baseEntity"
import { Option } from "./option"


export class Question extends BaseEntity {
	public number!: number
	public name!: string
	public options?: Option[]

	constructor(props: Omit<Question, "id" | "createdAt" | "updatedAt">, id?: string) {
		super(props, id)
	}
}