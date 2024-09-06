 
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTags } from "./tagsApi"

const initialState ={

    tags:[], 
    isLoading:false,
    isError:false,
    error:""  // eta error message er jnno 
}

// creating the async thunk and export it 

export const fetchTags = createAsyncThunk("tags/fetchTags" , async() => {
    const tags = await getTags()
    return tags;
})

// now I need to create the slice 

const tagsSlice = createSlice({
    name : "tags",
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchTags.pending , (state )=> 
        { state.isError = false
          state.isLoading = true
        }).addCase(fetchTags.fulfilled, ( state, action ) => 
        {
            state.isLoading = false,
            state.tags = action.payload
        }).addCase(fetchTags.rejected, (state, action) => {
            state.isLoading = false
            state.tags =[]
            state.isError = true
            state.error = action.error?.message;
        })
    }
})

export default tagsSlice.reducer
