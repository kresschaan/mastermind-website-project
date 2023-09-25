import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const usersApi = createApi({
    reducerPath: "createUsers",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3010",
        // baseUrl: "https://mastermind-server.onrender.com/",
    }),
    endpoints(builder) {
        return {
            fetchUsers: builder.query({
                query: (user) => {
                    return {
                        url: "/users",
                        method: "GET",
                        params: {
                            userId: user,
                        },
                    };
                },
            }),
            addUser: builder.mutation({
                query: (user) => {
                    return {
                        url: "/api/create-user",
                        method: "POST",
                        body: user,
                    };
                },
            }),
        };
    },
});

export const { useFetchUsersQuery, useAddUserMutation } = usersApi;
export { usersApi };
