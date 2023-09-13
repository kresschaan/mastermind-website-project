import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const usersApi = createApi({
    reducerPath: "createUsers",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005",
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
                        url: "/users",
                        method: "POST",
                        body: {
                            username: user.username,
                            password: user.password,
                            fullName: user.fullName,
                            email: user.email,
                        },
                    };
                },
            }),
        };
    },
});

export const { useFetchUsersQuery, useAddUserMutation } = usersApi;
export { usersApi };
