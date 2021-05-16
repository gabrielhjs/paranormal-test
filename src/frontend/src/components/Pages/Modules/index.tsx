import React from "react"
import { Link } from "react-router-dom"
import { Module } from "../../Module"


export const PageModules = () => {
	return (
		<>
			<ul>
				<Module number={1} />
				<Module number={2} />
				<Module number={3} />
				<Module number={4} />
			</ul>
			<Link to="/">Home</Link>
		</>
	)
}