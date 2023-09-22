import { createSlice } from "@reduxjs/toolkit/dist";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const stripeApi = createApi({
    reducersPath: "stripe",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3010",
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

export const { usePaymentMutation } = stripeApi;
export { stripeApi };
