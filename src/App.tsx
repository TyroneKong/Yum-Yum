import React, { FC, useState, createContext, useEffect } from "react";
import "./App.css";
import { Recipe } from "./components/recipes/recipe";
import Shopping from "./components/shoppingList/shopping"
import { Button } from "@mui/material";
import Switch from "react-switch";

export interface greetingProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>
  greet: string;
  setGreet: React.Dispatch<React.SetStateAction<string>>
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>
}

export const GreetContext = createContext<greetingProps | null>(null);

const App: FC = () => {
  const [name, setName] = useState<string>("");
  const [greet, setGreet] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [light, setLight] = useState(true)

  // state object with interface to define types
  const value: greetingProps = {
    name,
    setName,
    greet,
    setGreet,
    setInput,
    input,
  };








  return (
    // passing state object to context
    <GreetContext.Provider value={value}>
      <div className="App">
    
        <div className={light?"lightTheme":"darkTheme"}>
          <Switch onChange={()=>setLight((prevTheme)=>(prevTheme===true?false:true)) } checked={light === true }/>
        <h3>{light?"Light Theme":"Dark Theme"}</h3>
        <Recipe  />
        <Shopping/>

        </div>
       
      </div>
    </GreetContext.Provider>
  );
};

export default App;
