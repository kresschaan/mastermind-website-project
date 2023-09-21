import { configureStore, createSlice } from "@reduxjs/toolkit/dist";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isOpen: false,
    },
    reducers: {
        openModal: (state, action) => {
            state.isOpen = action.payload;
        },
    },
});

export const { openModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
