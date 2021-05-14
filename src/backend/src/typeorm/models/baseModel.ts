import { PrimaryColumn, Column } from "typeorm"

import { BaseEntity } from "../../entities/baseEntity"


export class BaseModel implements BaseEntity {
	@PrimaryColumn("uuid")
	id!: string

	@Column("timestamp")
	createdAt!: Date

	@Column("timestamp")
	updatedAt!: Date
}
