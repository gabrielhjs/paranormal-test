"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetModulesController = void 0;
class GetModulesController {
    constructor(getModulesUseCase) {
        this.getModulesUseCase = getModulesUseCase;
    }
    async handle(request, response) {
        try {
            const data = await this.getModulesUseCase.execute({});
            return response.status(200).send(data);
        }
        catch (error) {
            console.log(error.message);
            return response.status(400).send({ error: "Unexpected error." });
        }
    }
}
exports.GetModulesController = GetModulesController;
