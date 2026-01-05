import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  }),
  tagTypes: ["Job"],
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: ({ page = 1, limit = 6 }) =>
        `/jobs?page=${page}&limit=${limit}`,
      providesTags: ["Job"],
    }),

    getJobById: builder.query({
      query: (id) => `/jobs/${id}`,
      providesTags: ["Job"],
    }),
  }),
});

export const {
  useGetJobsQuery,
  useGetJobByIdQuery,
} = apiSlice;
