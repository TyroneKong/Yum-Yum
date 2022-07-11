import { createSlice } from "@reduxjs/toolkit";


const initialStateValue:any  = 0


// create the slice 
const quantitySlice = createSlice({
    name:'quantity',
    initialState:{
        value:initialStateValue
    },
 
    reducers:{
      incremented: (state) =>{
        state.value +=1
      },
      decremented:state=>{
        state.value -=1
      },
      incrementedByAmount:(state, {payload})=>{
        state.value += payload
      }
    }
  })
  

//destructure the actions and export 
export const {incremented, decremented, incrementedByAmount} = quantitySlice.actions


  export default quantitySlice.reducer