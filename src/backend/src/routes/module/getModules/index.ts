import { TypeormQuestionRepository } from "../../../repositories/implements/typeorm/TypeormQuestionRepository"
import { GetModulesController } from "./getModulesController"
import { GetModulesUseCase } from "./getModulesUseCase"


const getModulesUseCase = new GetModulesUseCase(
  new TypeormQuestionRepository()
)
const getModuleController = new GetModulesController(
  getModulesUseCase
)


export { getModuleController }