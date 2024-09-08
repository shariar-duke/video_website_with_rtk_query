import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  tagTypes:["Videos"],
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => "/videos",
      keepUnusedDataFor: 5,
      providesTags:["Videos"]
    }),
    getVideo: builder.query({
      query: (videoId) => `/videos/${videoId}`,
    }),
    getRelatedVideos: builder.query({
      query: ({ id, title }) => {
        // Split the title into tags
        const tags = title.split(" ");

        // Construct the query string with title_like for each tag and exclude the current video by id
        const likes = tags.map((tag) => `title_like=${tag}`);
        const queryString = `/videos?${likes.join("&")}&id_ne=${id}&_limit=4`;

        return queryString;
      },
    }),
    addVideo:builder.mutation({
        query:(data)=> ({
            url: "/videos",
        method: "POST",
        body: data,
        }),
        invalidatesTags:["Videos"]
    }),
    editVideo:builder.mutation({
        query:({id, data})=> ({
            url: `/videos/${id}`,
        method: "PATCH",
        body: data,
        }),
        invalidatesTags:["Videos"]
    })
  }),
});

// Export the hooks for the queries and mutation
// Export the hooks for the queries and mutation
export const { useGetVideosQuery, useGetVideoQuery, useGetRelatedVideosQuery, useAddVideoMutation , useEditVideoMutation} = apiSlice;
