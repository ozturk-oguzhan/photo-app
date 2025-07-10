import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    credentials: "include",
  }),
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
        url: `users/auth/${username}`,
      }),
    }),

    getComments: builder.query({
      query: ({ postId }) => ({
        url: "comments",
        method: "GET",
        params: { postId },
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: "/users/auth/register",
        method: "POST",
        body: userData,
      }),
    }),
    login: builder.mutation({
      query: (userData) => ({
        url: "/users/auth/login",
        method: "POST",
        body: userData,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/users/auth/logout",
        method: "POST",
      }),
    }),
    verifyToken: builder.mutation({
      query: (user) => ({
        url: "/users/auth/verifyToken",
        method: "POST",
        body: user,
      }),
    }),
    addComment: builder.mutation({
      query: (commentData) => ({
        url: "/comments/add",
        method: "POST",
        body: commentData,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/users/auth/update/${id}`,
        method: "PATCH",
        body: formData,
      }),
    }),
    createPost: builder.mutation({
      query: (formData) => ({
        url: `/pins/create`,
        method: "POST",
        body: formData,
      }),
    }),
    isLikePin: builder.query({
      query: ({ id }) => ({
        url: `/like/${id}`,
        method: "GET",
      }),
    }),
    likePin: builder.mutation({
      query: ({ id }) => ({
        url: `/like/like-post/${id}`,
        method: "POST",
      }),
    }),
    isSavePin: builder.query({
      query: ({ id }) => ({
        url: `/save/${id}`,
        method: "GET",
      }),
    }),
    savePin: builder.mutation({
      query: ({ id }) => ({
        url: `/save/save-post/${id}`,
        method: "POST",
      }),
    }),
    getAllSavedPin: builder.query({
      query: () => ({
        url: `/save/get-all-saved`,
        method: "GET",
      }),
    }),
    isFollowing: builder.query({
      query: ({ id }) => ({
        url: `/follow/${id}`,
        method: "GET",
      }),
    }),
    followUser: builder.mutation({
      query: ({ id }) => ({
        url: `/follow/follow-user`,
        method: "POST",
        body: { id },
      }),
    }),
    followInfo: builder.query({
      query: () => ({
        url: `/follow/follow-info`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLazyGetPinsQuery,
  useLazyGetPinQuery,
  useLazyGetUserQuery,
  useLazyGetCommentsQuery,
  useVerifyTokenMutation,
  useAddCommentMutation,
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useUpdateUserMutation,
  useCreatePostMutation,
  useLazyIsLikePinQuery,
  useLikePinMutation,
  useLazyIsSavePinQuery,
  useLazyGetAllSavedPinQuery,
  useLazyIsFollowingQuery,
  useFollowUserMutation,
  useSavePinMutation,
  useLazyFollowInfoQuery,
} = api;
