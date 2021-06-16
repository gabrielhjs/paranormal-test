import { TypeormQuestionRepository } from "../../../repositories/implements/typeorm/TypeormQuestionRepository"
import { PostModuleAnswersController } from "./postModuleAnswersController"
import { PostModuleAnswersUseCase } from "./postModuleAnswersUseCase"


const postModuleAnswersUseCase = new PostModuleAnswersUseCase(
  new TypeormQuestionRepository()
)
const postModuleAnswersController = new PostModuleAnswersController(
  postModuleAnswersUseCase
)


export { postModuleAnswersController }