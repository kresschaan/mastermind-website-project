import { createSlice } from "@reduxjs/toolkit/dist";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
    reducersPath: "auth",
    baseQuery: fetchBaseQuery({
        // baseUrl: "http://localhost:3010",
        baseUrl: "https://mastermind-server.onrender.com/",
    }),
    endpoints(builder) {
        return {
            authenticate: builder.mutation({
                query: (credentials) => {
                    return {
                        url: "/authenticate",
                        method: "POST",
                        body: credentials,
                    };
                },
            }),
            verify: builder.query({
                query: (token) => {
                    return {
                        url: "/verify",
                        method: "GET",
                        headers: {
                            Authorization: `${token}`,
                        },
                    };
                },
            }),
        };
    },
});

export const { useAuthenticateMutation, useVerifyQuery } = authApi;
export { authApi };
