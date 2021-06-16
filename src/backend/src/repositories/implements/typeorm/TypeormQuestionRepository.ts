import { getRepository } from "typeorm"
import { Question } from "../../../entities/question"
import { OrmQuestion } from "../../../typeorm/models/question"
import { IQuestionRepository } from "../../IQuestionRepository"


export class TypeormQuestionRepository implements IQuestionRepository {
  async checkQuestionsAnswers(questions: String[][]): Promise<Boolean> {
    const repository = getRepository(OrmQuestion, process.env.NODE_ENV)

    const validQuestions = await repository.find({ relations: ["options"], order: { id: "ASC" } })

    if (validQuestions.length !== questions.length) {
      return false
    }

    questions = questions.sort((item, nextItem) => {
      return item[0] > nextItem[0] ? 1 : -1
    })

    const invalidOption = validQuestions.some((question, index) => {
      if (!question.options?.some(option => {
        if (option.id === questions[index][1]) return true
      })) return true
    })

    if (invalidOption) return false

    return true
  }

  async saveQuestions(questions: Question[]): Promise<Question[]> {
    const repository = getRepository(OrmQuestion, process.env.NODE_ENV)

    const newQuestions = await Promise.all(questions.map(async (question) => {
      return repository.create(question)
    }))

    return await repository.save(newQuestions)
  }

  async getAllQuestions(): Promise<Question[]> {
    const repository = getRepository(OrmQuestion, process.env.NODE_ENV)

    return await repository.find({ relations: ["options"] })
  }
}