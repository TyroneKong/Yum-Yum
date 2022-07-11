import { createSlice } from "@reduxjs/toolkit";

const initialStateValue: any = [];

export const shoppinglist = createSlice({
  name: "shoppingList",
  initialState: {
    shoppinglist: initialStateValue,
  },
  reducers: {
    setlists: (state, { payload }) => {
      state.shoppinglist = payload;
    },

    deletelist: (state, { payload }) => {
      const id = payload;
      state.shoppinglist = state.shoppinglist.filter(
        (item: any) => item.id !== id
      );
    },
    increaseQuantity: (state, { payload }) => {
      const id = payload;
      state.shoppinglist.forEach((item: any) => {
        if (item.id === id) {
          item.quantity++;
        }
      });
    },
    decreaseQuantity: (state, { payload }) => {
      const id = payload;
      state.shoppinglist.forEach((item: any) => {
        if (item.id === id) {
          if(item.quantity >0){
          
          item.quantity--;

          }if (item.quantity === 0){
              state.shoppinglist = state.shoppinglist.filter((item:any)=> item.id !== id)  
          }
        }
      });
    },
  },
});

export const { setlists, deletelist, increaseQuantity, decreaseQuantity } =
  shoppinglist.actions;

export default shoppinglist.reducer;
