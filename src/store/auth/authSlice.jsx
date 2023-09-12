import { configureStore, createSlice } from "@reduxjs/toolkit";

// const authSlice = createSlice({
//     name: "auth",
//     initialState: {
//         user: null,
//         token: null,
//     },
//     reducers: {
//         setCredentials: (state, action) => {
//             const { users, accessToken } = action.payload;
//             state.user = users;
//             state.token = accessToken;
//         },
//         logOut: (state, action) => {
//             state.user = null;
//             state.token = null;
//         },
//     },
// });

// const storeAuth = configureStore({
//     reducer: {
//         auth: authSlice.reducer,
//     },
// });

// export { storeAuth };
// export const { setCredentials, logOut } = authSlice.actions;

// export const { setCredentials, logOut } = authSlice.actions;

// export default authSlice.reducer;

// export const selectCurrentUser = (state) => state.auth.user;
// export const selectCurrentToken = (state) => state.auth.token;
