import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
      SelectedBook:(state, id)=>{
        state.value=id
      },
    },
  })
  
  
  // Action creators are generated for each case reducer function
  export const { SelectedBook} = bookSlice.actions
  
  export default bookSlice.reducer