import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: null,
    },
    reducers: {
        setCredentials: (state, action) => {
            const { users, accessToken } = action.payload;
            state.user = users;
            state.token = accessToken;
        },
        logOut: (state, action) => {
            state.user = null;
            state.token = null;
        },
    },
});

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    },
});

console.log(store);

const startingState = store.getState();
console.log(JSON.stringify(startingState));

store.dispatch({
    type: "auth/setCredentials",
    payload: {
        users: "Chris",
        accessToken: "123qweiwhie",
    },
});

const finalState = store.getState();
console.log(finalState);

// export const { setCredentials, logOut } = authSlice.actions;

// export default authSlice.reducer;

// export const selectCurrentUser = (state) => state.auth.user;
// export const selectCurrentToken = (state) => state.auth.token;
