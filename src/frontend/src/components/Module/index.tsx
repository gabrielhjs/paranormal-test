import React from "react"
import { Link } from "react-router-dom"


interface Props {
	number: number
}


export const Module = (props: Props) => {

	return (
		<li>
			<Link to={{
				pathname: `/${props.number}`,
			}}>
				Modulo ({props.number})
				</Link>
		</li>
	)
}