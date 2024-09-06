 
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideo } from "./videoApi"

const initialState ={

    video:{}, 
    isLoading:false,
    isError:false,
    error:""  // eta error message er jnno 
}

// creating the async thunk and export it 

export const fetchVideo = createAsyncThunk("video/fetchVideo" , async(id) => {
    const video = await getVideo(id)
    return video;
})

// now I need to create the slice 

const singleVideoSlice = createSlice({
    name : "video",
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchVideo.pending , (state )=> 
        { state.isError = false
          state.isLoading = true
        }).addCase(fetchVideo.fulfilled, ( state, action ) => 
        {
            state.isLoading = false,
            state.video = action.payload
        }).addCase(fetchVideo.rejected, (state, action) => {
            state.isLoading = false
            state.video = {}
            state.isError = true
            state.error = action.error?.message;
        })
    }
})

export default singleVideoSlice.reducer
