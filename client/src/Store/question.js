import { createSlice } from "@reduxjs/toolkit";

const initial = {
  questions: [
    { name: "Question 1", type: "text", required: 'true' },
    { name: "Question 2", type: "text", required: 'true' },
    { name: "Question 3", type: "text", required: 'true' },
    { name: "Question 4", type: "text", required: 'true' },
    { name: "Question 5", type: "text", required: 'true' },
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
      });
    },
  },
});
