import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { usersReducer, addUser } from "./slices/usersSlice";
import { modalReducer, openModal } from "./slices/modalSlice";
import { setRegister } from "./auth/registerSlice";
import { usersApi } from "./api/usersAPI";
import { authApi } from "./auth/authAPI";
import { registerReducer } from "./auth/registerSlice";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        modal: modalReducer,
        register: registerReducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(usersApi.middleware)
            .concat(authApi.middleware);
    },
});

setupListeners(store.dispatch);

export { addUser, openModal, setRegister };
export { useAddUserMutation, useFetchUsersQuery } from "./api/usersAPI";
export { useAuthenticateMutation, useVerifyQuery } from "./auth/authAPI";
