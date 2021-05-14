import { Entity, Column, JoinColumn, ManyToOne } from "typeorm"

import { Option } from "../../entities/option"
import { Question } from "../../entities/question"
import { BaseModel } from "./baseModel"
import { OrmQuestion } from "./question"


@Entity("options")
export class OrmOption extends BaseModel implements Option {
	@Column()
	number!: number

	@Column()
	name!: string

	@ManyToOne(() => OrmQuestion, question => question.options)
	@JoinColumn()
	question!: Question
}