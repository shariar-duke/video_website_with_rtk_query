import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filter/filterSlice";
import relatedVideoReducer from "../features/relatedVideos/relatedVideosSlice";
import tagReducer from "../features/tags/tagsSlice";
import singleVideoReducer from "../features/video/videoSlice";
import videoReducer from "../features/videos/videosSlice";

export const store = configureStore({
    reducer: {
        videos: videoReducer,
        tags: tagReducer,
        video: singleVideoReducer,
        relatedVideos: relatedVideoReducer,
        filters : filterReducer
    }
})