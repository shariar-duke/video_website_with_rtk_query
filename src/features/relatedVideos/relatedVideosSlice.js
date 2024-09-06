import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideos } from "./relatedVideosApi.js";

const initialState = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  error: "", // eta error message er jnno
};

// creating the async thunk and export it

export const fetchRelatedVideo = createAsyncThunk(
  "relatedVideos/fetchVideo",
  async ({ tags, id }) => {
    const relatedVideos = await getRelatedVideos({ tags, id });
    return relatedVideos;
  }
);

// now I need to create the slice

const relatedVideoSlice = createSlice({
  name: "relatedVideos",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedVideo.fulfilled, (state, action) => {
        (state.isLoading = false), (state.relatedVideos = action.payload);
      })
      .addCase(fetchRelatedVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default relatedVideoSlice.reducer;
