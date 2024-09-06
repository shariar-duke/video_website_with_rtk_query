 
import { createSlice } from "@reduxjs/toolkit"

const initialState ={

    tags:[], // ekhne selected tags gula thakbe 
    search:"" // and ekhne searchBox a j text ta lkehbo seta thakbe 
}


// now I need to create the slice 

const filterSlice = createSlice({
    name : "filter",
    initialState: initialState,
    reducers:{
        tagSelected: (state, action) => {
            state.tags.push(action.payload)
        },

        tagRemoved: (state, action) => 
        {
          const indexToRemove = state.tags.indexOf(action.payload)
          if(indexToRemove !==-1)
          {
            state.tags.splice(indexToRemove,1)
          }
        },

       searched: (state, action) => 
       {
        state.search = action.payload;
       }
    }
      
})

export default filterSlice.reducer;
export const {tagRemoved, tagSelected, searched} = filterSlice.actions
