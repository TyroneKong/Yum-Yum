import { createSlice } from "@reduxjs/toolkit";

const initialStateValue:any =[]

export const shoppinglist = createSlice({
  name:'shoppingList',
  initialState:{
    shoppinglist: initialStateValue
  },
  reducers:{
    setlists:(state, {payload})=>{
        state.shoppinglist = payload
    },
    addlist:(state, {payload})=>{
        state.shoppinglist.push(payload)
    },
    deletelist:(state, {payload})=>{
        const id = payload
        state.shoppinglist = state.shoppinglist.filter((item:any)=> item.id !== id )
    }
  }  
})



export const {setlists, deletelist, addlist} = shoppinglist.actions

export default shoppinglist.reducer



