import { createSlice } from "@reduxjs/toolkit";


const initialStateValue:any = []


export const recipe = createSlice({
    name: "recipe",
    initialState: {
        recipe:initialStateValue
    },
    reducers:{
        setrecipedata:(state, {payload})=>{
         state.recipe = payload
        },
        setChosenRecipe:(state, {payload})=>{
            const id = payload
       state.recipe =  state.recipe.filter((item:any)=> item.id === id)

        }
    }

})


export const {setrecipedata, setChosenRecipe} = recipe.actions


export default recipe.reducer


