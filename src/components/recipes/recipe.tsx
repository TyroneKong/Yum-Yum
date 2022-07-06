import axios from 'axios';
import React, {FC, useRef, useContext, useState} from 'react';
import { Button } from '@mui/material';
import { GreetContext } from '../../App';
import { RecipeList } from './recipeList';
import './recipe.scss'



// passing in the greetingprops using the interface 
export const Recipe:FC =()=> {
    const formRef = useRef<HTMLFormElement>(null)


// using the context 

const value = useContext(GreetContext)
const [recipeData, setRecipeData] = useState<string |null>(null)



const getRecipeList= async ()=>{
    try {
        const {data} = await axios.get(`http://localhost:8080/recipeList/${value?.input}`)
        console.log(data.results)
        setRecipeData(data.results)
    } catch (error) {
        console.log(error)
    }
}

const fetchData=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()

getRecipeList()
 
formRef.current?.reset()
    
   
}




const handleInput=(e:React.FormEvent<HTMLInputElement>)=>{

value?.setInput(e.currentTarget.value)


}






    return (
    <div>
        <h1>Yum Yum</h1>
 <form ref={formRef}onSubmit={fetchData}>
 <input className='input'  onChange={handleInput} required></input>


<Button variant='contained' type='submit'>Find Recipe</Button>
 </form>
 <RecipeList recipedata={recipeData}  /> 
    </div>
  );
}