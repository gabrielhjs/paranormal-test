import { Entity, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm"

import { Module } from "../../entities/module"
import { Option } from "../../entities/option"
import { Question } from "../../entities/question"
import { BaseModel } from "./baseModel"
import { OrmModule } from "./module"
import { OrmOption } from "./option"


@Entity("questions")
export class OrmQuestion extends BaseModel implements Question {
	@Column()
	number!: number

	@Column()
	name!: string

	@OneToMany(() => OrmOption, product => product.question, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
		cascade: true
	})
	options?: Option[]

	@ManyToOne(() => OrmModule, module => module.questions)
	@JoinColumn()
	module!: Module
}