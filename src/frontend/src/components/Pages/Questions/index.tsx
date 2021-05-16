import { Link } from "react-router-dom"
import { Question } from "../../Question"
import axios from "axios"
import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import { IModule } from "../../../entities/module"


interface Params {
	id: string
}


export const PageQuestions = () => {
	const { id } = useParams<Params>()

	const [questions, setQuestions] = useState([] as IModule[])

	useEffect(() => {
		axios.get<IModule[]>("http://localhost:3333/module/", {})
			.then(response => {
				setQuestions(response.data)
			})
			.catch(console.log)
	}, [])

	return (
		<>
			<ul>
				{questions.map(question => Question(question))}
			</ul>
			<Link to="/">Home</Link>
		</>
	)
}