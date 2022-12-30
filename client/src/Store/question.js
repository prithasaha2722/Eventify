import { createSlice } from "@reduxjs/toolkit";

const initial = {
  questions: [
    { name: "Question 1", type: "text", required: 'true', placeholder: 'Question1' },
    { name: "Question 2", type: "text", required: 'true', placeholder: 'Question2' },
    { name: "Question 3", type: "text", required: 'true', placeholder: 'Question3' },
    { name: "Question 4", type: "text", required: 'true', placeholder: 'Question4' },
    { name: "Question 5", type: "text", required: 'true', placeholder: 'Question5' },
  ],
};

export const questionSlice = createSlice({
  name: "questionSlice",
  initialState: initial,
  reducers: {
    add(state, action) {
      state.questions.push({
        name: action.payload.question,
        type: action.payload.type,
        required: action.payload.required,
        placeholder: action.payload.placeholder
      });
    },
  },
});
