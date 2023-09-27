import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const contactApi = createApi({
    reducerPath: "createUsers",
    baseQuery: fetchBaseQuery({
        // baseUrl: "http://localhost:3010",
        baseUrl: "https://mastermind-server.onrender.com/",
    }),
    endpoints(builder) {
        return {
            addMessage: builder.mutation({
                query: (data) => {
                    return {
                        url: "/api/create-message",
                        method: "POST",
                        body: data,
                    };
                },
            }),
        };
    },
});

export const { useAddMessageMutation } = contactApi;
export { contactApi };
