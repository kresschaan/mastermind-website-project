import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { usersReducer, addUser } from "./slices/usersSlice";
import { usersApi } from "./api/usersAPI";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(usersApi.middleware);
    },
});

setupListeners(store.dispatch);

export { addUser };
export { useAddUserMutation, useFetchUsersQuery } from "./api/usersAPI";
