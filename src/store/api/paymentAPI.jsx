import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const paymentApi = createApi({
    reducerPath: "confirmPayment",
    baseQuery: fetchBaseQuery({
        // baseUrl: "http://localhost:3010",
        baseUrl: "https://mastermind-server.onrender.com/",
    }),
    endpoints(builder) {
        return {
            payment: builder.mutation({
                query: (amount) => {
                    return {
                        url: "/create-payment-intent",
                        method: "POST",
                        body: amount,
                    };
                },
            }),
        };
    },
});

export const { usePaymentMutation } = paymentApi;
export { paymentApi };
