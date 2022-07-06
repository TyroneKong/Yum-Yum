import axios from 'axios';
import React, {FC, useRef, useContext, useEffect, useState} from 'react';

import { GreetContext } from '../App';





// passing in the greetingprops using the interface 
export const Recipe:FC =()=> {
    const formRef = useRef<HTMLFormElement>(null)


// using the context 

const value = useContext(GreetContext)
const [recipeName, setRecipeName] = useState<string>("")



const getRecipeList= async ()=>{
    try {
        const {data} = await axios.get(`http://localhost:8080/recipeList/${value?.input}`)
        console.log(data.results)
        setRecipeName(data.results[1].name)
    } catch (error) {
        
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
 <input  onChange={handleInput} required></input>


<button type='submit'>Find Recipe!</button>
 </form>
 {recipeName}
    </div>
  );
}
