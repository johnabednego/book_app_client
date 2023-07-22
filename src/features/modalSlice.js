import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}


export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
      ModalTrue:(state)=>{
        state.value=true
      },
      ModalFalse:(state)=>{
        state.value=false
      },
    },
  })
  
  
  // Action creators are generated for each case reducer function
  export const { ModalTrue, ModalFalse} = modalSlice.actions
  
  export default modalSlice.reducer