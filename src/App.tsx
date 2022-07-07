import React, { FC, useState, createContext } from "react";
import "./App.css";
import { Recipe } from "./components/recipes/recipe";
import Shopping from "./components/shoppingList/shopping"

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
        <Recipe />
        <Shopping/>
      </div>
    </GreetContext.Provider>
  );
};

export default App;
