import { createSlice } from "@reduxjs/toolkit";

const initial = {
  questions: [
    { name: "Name", type: "text", required: 'true', placeholder: 'Your Name' },
    { name: "Email", type: "email", required: 'true', placeholder: 'Your Email' },
    { name: "Phone", type: "text", required: 'true', placeholder: 'Your Phone Number' },
    { name: "Wallet Address", type: "text", required: 'true', placeholder: 'Your Wallet Address' },
    { name: "Address", type: "text", required: 'true', placeholder: 'Your Address' },
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
