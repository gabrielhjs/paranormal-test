import { IQuestionRepository } from "../../../repositories/IQuestionRepository"
import { IUseCase, IUseCaseResponse } from "../../interfaces/IUseCase"
import { PostModuleAnswersDto } from "./postModuleAnswersDto"


export class PostModuleAnswersUseCase implements IUseCase<PostModuleAnswersDto, String> {
  constructor(
    private questionRepository: IQuestionRepository
  ) { }
  async execute(data: PostModuleAnswersDto): Promise<IUseCaseResponse<String>> {
    if (!await this.questionRepository.checkQuestionsAnswers(data.answers)) {
      return { error: "invalid question or option id" }
    }

    return { error: false, data: "Success" }
  }
}