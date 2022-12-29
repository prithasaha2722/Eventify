import { modalSlice } from "./modals";
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        modal: modalSlice.reducer
    }
})


export const modalActions = modalSlice.actions;
export default store;