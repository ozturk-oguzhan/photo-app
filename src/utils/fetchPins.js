import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getPins: builder.query({
      query: ({ skip, search, userId }) => ({
        url: "pins",
        method: "GET",
        params: { skip, search, userId },
      }),
    }),
    getPin: builder.query({
      query: ({ id }) => ({
        url: `pins/${id}`,
        method: "GET",
      }),
    }),
    getUser: builder.query({
      query: ({ username }) => ({
        url: `users/${username}`,
      }),
    }),
    getBoards: builder.query({
      query: ({ userId }) => ({
        url: "boards/user-boards",
        method: "GET",
        params: { userId },
      }),
    }),
  }),
});

export const {
  useLazyGetPinsQuery,
  useLazyGetPinQuery,
  useLazyGetUserQuery,
  useLazyGetBoardsQuery,
} = api;
