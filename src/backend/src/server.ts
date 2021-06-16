import "reflect-metadata"
import dotenv from "dotenv"

import { typeormConnection } from "./typeorm/connect"
import { app } from "./app"


dotenv.config()


typeormConnection.create(process.env.NODE_ENV || "default")

app.listen(3333)
