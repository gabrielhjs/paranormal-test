import { GetModulesController } from "./getModulesController"
import { GetModulesUseCase } from "./getModulesUseCase"


const getModulesUseCase = new GetModulesUseCase()
const getModuleController = new GetModulesController(
	getModulesUseCase
)


export { getModuleController }