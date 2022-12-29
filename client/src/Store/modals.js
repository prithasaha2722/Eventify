import { createSlice } from "@reduxjs/toolkit";
const initial = { certificateModal: false };

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState: initial,
  reducers: {
    opencertiModal(state) {
      state.certificateModal = true;
    },
    closecertiModal(state) {
      state.certificateModal = false;
    },
  },
});
