import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { usersReducer, addUser } from "./slices/usersSlice";
import { modalReducer, openModal } from "./slices/modalSlice";
import { checkoutReducer, setAmount } from "./slices/checkoutSlice";
import { setRegister, registerReducer } from "./auth/registerSlice";
import { usersApi } from "./api/usersAPI";
import { authApi } from "./auth/authAPI";
import { paymentApi } from "./api/paymentAPI";
import { contactApi } from "./api/contactAPI";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        modal: modalReducer,
        register: registerReducer,
        checkout: checkoutReducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [paymentApi.reducerPath]: paymentApi.reducer,
        [contactApi.reducerPath]: contactApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(usersApi.middleware)
            .concat(authApi.middleware)
            .concat(paymentApi.middleware);
    },
});

setupListeners(store.dispatch);

export { addUser, openModal, setRegister, setAmount };
export { useAddUserMutation, useFetchUsersQuery } from "./api/usersAPI";
export { useAuthenticateMutation, useVerifyQuery } from "./auth/authAPI";
export { useAddMessageMutation } from "./api/contactAPI";
export { usePaymentMutation } from "./api/paymentAPI";
