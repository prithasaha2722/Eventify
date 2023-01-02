import {createSlice} from '@reduxjs/toolkit'
const initial = { eventModal: false };

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState: initial,
  reducers: {
    openEventModal(state){
      state.eventModal = true
    },
    closeEventModal(state){
      state.eventModal = false
    }
  },
});
