import React from "react"
import { formatWithOptions } from "util"
import { IQuestion } from "../../entities/question"


export const Question = (props: IQuestion) => {
	return (
		<li key={props.id}>
			<div>({props.number}): {props.name}</div>
			{props.options?.map(option => (
				<div>({option.number}): {option.name}</div>
			))}
		</li>
	)
}