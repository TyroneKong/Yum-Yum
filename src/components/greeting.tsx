import axios from 'axios';
import React, {FC, useRef, useContext} from 'react';

import { GreetContext } from '../App';





// passing in the greetingprops using the interface 
export const Greeting:FC =()=> {
    const formRef = useRef<HTMLFormElement>(null)


// using the context 

const value = useContext(GreetContext)




const getRecipeList= async ()=>{
    try {
        const {data} = await axios.get(`http://localhost:8080/recipeList/${value?.input}`)
        console.log(data)
    } catch (error) {
        
    }
}




 
const greetMe=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()

getRecipeList()
 
        formRef.current?.reset()
    
   
}



const handleInput=(e:React.FormEvent<HTMLInputElement>)=>{

value?.setInput(e.currentTarget.value)


}


    return (
    <div>
        <h1>Tasty</h1>
 <form ref={formRef}onSubmit={greetMe}>
 <input  onChange={handleInput} required></input>


<button type='submit'>Greet me!</button>
 </form>
    </div>
  );
}
