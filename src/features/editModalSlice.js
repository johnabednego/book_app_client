import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}


export const editModalSlice = createSlice({
    name: 'editModal',
    initialState,
    reducers: {
      EditModalTrue:(state)=>{
        state.value=true
      },
      EditModalFalse:(state)=>{
        state.value=false
      },
    },
  })
  
  
  // Action creators are generated for each case reducer function
  export const { EditModalTrue, EditModalFalse} = editModalSlice.actions
  
  export default editModalSlice.reducer