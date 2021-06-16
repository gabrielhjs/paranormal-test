import { Question } from "../entities/question"


export interface IQuestionRepository {
  checkQuestionsAnswers(questions: String[][]): Promise<Boolean>
  saveQuestions(questions: Question[]): Promise<Question[]>
  getAllQuestions(): Promise<Question[]>
}
