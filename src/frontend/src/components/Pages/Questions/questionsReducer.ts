import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IQuestionAnswers } from "../../../entities/questionAnswer"

interface IQuestionAnswer {
  id: string
  option: string
}

const questionsSlice = createSlice({
  name: "questionReducer",
  initialState: {
    answers: {} as IQuestionAnswers,
    enabled: 1
  },
  reducers: {
    insertAnswer: (state, action: PayloadAction<IQuestionAnswer>) => {
      state.answers[action.payload.id] = action.payload.option
      state.enabled += 1
    }
  }
})

export const insertAnswer = questionsSlice.actions
export const questionsReducer = questionsSlice.reducer