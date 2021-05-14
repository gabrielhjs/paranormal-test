import { Entity, Column, OneToMany } from "typeorm"

import { Module } from "../../entities/module"
import { Question } from "../../entities/question"
import { BaseModel } from "./baseModel"
import { OrmQuestion } from "./question"


@Entity("modules")
export class OrmModule extends BaseModel implements Module {
	@Column()
	number!: number

	@Column()
	name!: string

	@OneToMany(() => OrmQuestion, question => question.module, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
		cascade: true
	})
	questions?: Question[]
}