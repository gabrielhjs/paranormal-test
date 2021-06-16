import { IBaseEntity } from "./baseEntity"
import { IOption } from "./option"


export interface IQuestion extends IBaseEntity {
  number: number
  name: string
  options: IOption[]
}