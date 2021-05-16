import { IBaseEntity } from "./baseEntity"
import { IQuestion } from "./question"


export interface IModule extends IBaseEntity {
	number: number
	name: string
	questions?: IQuestion[]
}