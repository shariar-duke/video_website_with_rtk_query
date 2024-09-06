 
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideos } from "./videosApi"

const initialState ={

    videos:[], 
    isLoading:false,
    isError:false,
    error:""  // eta error message er jnno 
}

// creating the async thunk and export it 

export const fetchVideos = createAsyncThunk("videos/fetchVideos" , async({tags, search}) => {
    const videos = await getVideos(tags, search)
    return videos;
})

// now I need to create the slice 

const videoSlice = createSlice({
    name : "videos",
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchVideos.pending , (state )=> 
        { state.isError = false
          state.isLoading = true
        }).addCase(fetchVideos.fulfilled, ( state, action ) => 
        {
            state.isLoading = false,
            state.videos = action.payload
        }).addCase(fetchVideos.rejected, (state, action) => {
            state.isLoading = false
            state.videos =[]
            state.isError = true
            state.error = action.error?.message;
        })
    }
})

export default videoSlice.reducer
