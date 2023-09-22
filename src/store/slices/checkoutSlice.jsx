import { configureStore, createSlice } from "@reduxjs/toolkit/dist";

const checkoutSlice = createSlice({
    name: "checkout",
    initialState: {
        amount: "",
    },
    reducers: {
        setAmount: (state, action) => {
            state.amount = action.payload;
        },
    },
});

export const { setAmount } = checkoutSlice.actions;
export const checkoutReducer = checkoutSlice.reducer;
