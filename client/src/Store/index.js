import { modalSlice } from "./modals";
import {configureStore} from '@reduxjs/toolkit'
import { questionSlice } from "./question";

const store = configureStore({
    reducer: {
        modal: modalSlice.reducer,
        question: questionSlice.reducer
    }
})


export const modalActions = modalSlice.actions;
export const questionActions = questionSlice.actions;
export default store;