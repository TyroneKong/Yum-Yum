import React, {FC, useState, createContext} from 'react';
import './App.css';
import { Greeting } from './components/greeting';



export interface greetingProps {

  name:string;
  setName:(value:string | ((prevName:string)=> string))=>void;
  greet:string;
  setGreet:(value:string | ((prevGreet:string)=> string))=>void;
  
  } 


  export const GreetContext = createContext<greetingProps|null>(null)



  
  

const App: FC =()=> {
const [name, setName] = useState<string>("")
const [greet, setGreet] = useState<string>("")



// state object with interface to define types
const value: greetingProps ={
  name,
  setName,
  greet,
  setGreet
  
  }

  

  return (
  // passing state object to context 
  <GreetContext.Provider value={value}>

<div className="App">
 <Greeting />
    </div>



    </GreetContext.Provider>

  );
}

export default App;
