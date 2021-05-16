import "reflect-metadata"
import cors from "cors"
import dotenv from "dotenv"

import { typeormConnection } from "./typeorm/connect"
import { app } from "./app"


dotenv.config()


typeormConnection.create(process.env.NODE_ENV || "default")


app.use(cors({
	origin: [
		`${process.env.HOST}`,
	]
}))
app.listen(3333)
