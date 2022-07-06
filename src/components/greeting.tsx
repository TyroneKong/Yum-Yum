import React, {FC, useRef, useContext} from 'react';

import { GreetContext } from '../App';





// passing in the greetingprops using the interface 
export const Greeting:FC =()=> {
    const formRef = useRef<HTMLFormElement>(null)


// using the context 

const value = useContext(GreetContext)



 
const greetMe=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()

    value?.setGreet(` ${value.name} how are you today?`)
 
        formRef.current?.reset()
    
   
}



const handleInput=(e:React.FormEvent<HTMLInputElement>)=>{

value?.setName(e.currentTarget.value)


}


    return (
    <div>
        <h1>Tasty</h1>
 <form ref={formRef}onSubmit={greetMe}>
 <input  onChange={handleInput}></input>


<button type='submit'>Greet me!</button>
 </form>
{value?.greet}
    </div>
  );
}
