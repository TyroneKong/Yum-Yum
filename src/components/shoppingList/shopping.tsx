import React, { FC, useState, useRef, useEffect } from "react";
import { Button } from "@mui/material";
import "./shopping.scss";
import { List } from "./listInterface";
import ShoppingList from "./shoppingList";
import { useDispatch, useSelector} from "react-redux";
import { incremented, decremented, incrementedByAmount } from "../Redux/quantity";
import {setlists} from "../Redux/shoppingList";

import { RootState } from "../../index"






const Shopping: FC = () => {
  //setting state
  const [input, setInput] = useState<string>("");
  const [lists, setLists] = useState<List[]>([]);
  const [isDone, setIsDone] = useState<boolean>(false);
  const inputRef = useRef<HTMLFormElement>(null);


  const value= useSelector<RootState>(state=> state.quantity.value)


const result:any = useSelector<RootState>(state=> state.shopping.shoppinglist)
console.log(result)






// type AppDispatch = typeof store.dispatch

// const useAppDispatch:()=> AppDispatch = useDispatch
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


const dispatch = useDispatch()






  const item = result.map((list:any) => list.list);

 
 
 
 
 
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (input) {
      // check if item already exists
      if (!item.includes(input)) {
        dispatch(setlists([...result, { id: Date.now(), list: input, isDone: isDone }]));
      } else {
        alert("item axists");
      }

      inputRef.current?.reset();
    }
  };

  useEffect(() => {}, [ isDone]);







  return (
    <div className="main">
      <h2> </h2>
      <h2>
      
        
        You have {result.length === 0 || result.length > 1
          ? result.length + " items"
          : result.length + " item"} 
      </h2>
      <form ref={inputRef} onSubmit={handleSubmit}>
        <input
          type="input"
          placeholder="add to shopping list..."
          onChange={(e) => {
            setInput(e.currentTarget.value);
          }}
          required
        ></input>
        <Button className="button" type="submit" variant="contained">
          Add to list
        </Button>
      </form>
      <ShoppingList />

      {result.length > 0 && (
        <table>
          <tbody>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
            </tr>

            {result.map((item:any, idx:number) => (
              <tr key={idx}>
                <td>{item.list}</td>
                <td>
                {Number(value)}
                  <div className="btn__container">
                    <Button
                      variant="contained"
                      onClick={() => dispatch(incremented())}
                    >
                      +
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => dispatch(decremented())}
                    >
                      -
                    </Button>
                    <Button variant="contained" onClick={()=> dispatch(incrementedByAmount(10))}>increment by 10</Button>


                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Shopping;
