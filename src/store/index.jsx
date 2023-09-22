import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { usersReducer, addUser } from "./slices/usersSlice";
import { modalReducer, openModal } from "./slices/modalSlice";
import { checkoutReducer, setAmount } from "./slices/checkoutSlice";
import { setRegister } from "./auth/registerSlice";
import { usersApi } from "./api/usersAPI";
import { authApi } from "./auth/authAPI";
import { registerReducer } from "./auth/registerSlice";
import { stripeApi } from "./api/stripeAPI";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        modal: modalReducer,
        register: registerReducer,
        checkout: checkoutReducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [stripeApi.reducerPath]: stripeApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(usersApi.middleware)
            .concat(authApi.middleware)
            .concat(stripeApi.middleware);
    },
});

setupListeners(store.dispatch);

export { addUser, openModal, setRegister, setAmount };
export { useAddUserMutation, useFetchUsersQuery } from "./api/usersAPI";
export { useAuthenticateMutation, useVerifyQuery } from "./auth/authAPI";
export { usePaymentMutation } from "./api/stripeAPI";
