"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetModulesUseCase = void 0;
const option_1 = require("../../../entities/option");
const question_1 = require("../../../entities/question");
class GetModulesUseCase {
    async execute(data) {
        return [
            new question_1.Question({
                number: 1, name: "pergunta 1", options: [
                    new option_1.Option({ number: 1, name: "Opção A" }),
                    new option_1.Option({ number: 2, name: "Opção B" }),
                    new option_1.Option({ number: 3, name: "Opção C" }),
                ]
            }),
            new question_1.Question({
                number: 2, name: "pergunta 2", options: [
                    new option_1.Option({ number: 1, name: "Opção A" }),
                    new option_1.Option({ number: 2, name: "Opção B" }),
                    new option_1.Option({ number: 3, name: "Opção C" }),
                ]
            }),
            new question_1.Question({
                number: 3, name: "pergunta 3", options: [
                    new option_1.Option({ number: 1, name: "Opção A" }),
                    new option_1.Option({ number: 2, name: "Opção B" }),
                    new option_1.Option({ number: 3, name: "Opção C" }),
                ]
            }),
            new question_1.Question({
                number: 4, name: "pergunta 4", options: [
                    new option_1.Option({ number: 1, name: "Opção A" }),
                    new option_1.Option({ number: 2, name: "Opção B" }),
                    new option_1.Option({ number: 3, name: "Opção C" }),
                ]
            }),
            new question_1.Question({
                number: 5, name: "pergunta 5", options: [
                    new option_1.Option({ number: 1, name: "Opção A" }),
                    new option_1.Option({ number: 2, name: "Opção B" }),
                    new option_1.Option({ number: 3, name: "Opção C" }),
                ]
            }),
        ];
    }
}
exports.GetModulesUseCase = GetModulesUseCase;
