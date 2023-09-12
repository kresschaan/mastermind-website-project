import { configureStore, createSlice, nanoid } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            // const { username, password, fullName, email } = action.payload;
            // state.username = username;
            // state.password = password;
            // state.fullName = fullName;
            // state.email = email;
            console.log(state);

            // state.push(action.payload);

            state.push({
                id: nanoid(),
                username: action.payload.username,
                password: action.payload.password,
                fullName: action.payload.fullName,
                email: action.payload.email,
            });
        },
    },
});

// const store = configureStore({
//     reducer: {
//         users: usersSlice.reducer,
//     },
// });

// export { store };

export const { addUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
