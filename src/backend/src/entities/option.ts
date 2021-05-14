import { BaseEntity } from "./baseEntity"


export class Option extends BaseEntity {
	public number!: number
	public name!: string

	constructor(props: Omit<Option, "id" | "createdAt" | "updatedAt">, id?: string) {
		super(props, id)
	}
}