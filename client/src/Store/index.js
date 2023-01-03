import { modalSlice } from "./modals";
import {configureStore} from '@reduxjs/toolkit'
import { questionSlice } from "./question";
import {authSlice} from './auth'

const store = configureStore({
    reducer: {
        modal: modalSlice.reducer,
        question: questionSlice.reducer,
        auth: authSlice.reducer
    }
})


export const modalActions = modalSlice.actions;
export const questionActions = questionSlice.actions;
export const authActions = authSlice.actions;
export default store;