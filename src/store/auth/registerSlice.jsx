import { configureStore, createSlice } from "@reduxjs/toolkit/dist";

const registerSlice = createSlice({
    name: "register",
    initialState: {
        isRegistered: false,
    },
    reducers: {
        setRegister: (state, action) => {
            state.isRegistered = action.payload;
        },
    },
});

export const { setRegister } = registerSlice.actions;
export const registerReducer = registerSlice.reducer;
