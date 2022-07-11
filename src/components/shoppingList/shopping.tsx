import React, { FC, useState, useRef, useEffect } from "react";
import { Button } from "@mui/material";
import "./shopping.scss";
import ShoppingList from "./shoppingList";
import { useDispatch, useSelector } from "react-redux";
import {

  decremented,
  incrementedByAmount,
} from "../Redux/quantity";
import { setlists, increaseQuantity, decreaseQuantity} from "../Redux/shoppingList";
import { RootState } from "../../index";

const Shopping: FC = () => {
  //setting state
  const [input, setInput] = useState<string>("");
  const [isDone, setIsDone] = useState<boolean>(false);
  const inputRef = useRef<HTMLFormElement>(null);


  const listArr: any = useSelector<RootState>(
    (state) => state.shopping.shoppinglist
  );
 

  // type AppDispatch = typeof store.dispatch

  // const useAppDispatch:()=> AppDispatch = useDispatch
  // const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

  const dispatch = useDispatch();

  const item = listArr.map((list: any) => list.list);
  console.log(listArr)


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (input) {
      // check if item already exists
      if (!item.includes(input)) {
        dispatch(
          setlists([...listArr, { id: Date.now(), list: input, isDone: isDone, quantity:0 }])
          
        );
      } else {
        alert("item axists");
      }

      inputRef.current?.reset();
    }
  };

  useEffect(() => {}, [isDone]);

  return (
    <div className="main">
      <h2> </h2>
      <h2>
        You have{" "}
        {listArr.length === 0 || listArr.length > 1
          ? listArr.length + " items"
          : listArr.length + " item"}
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

      {listArr.length > 0 && (
        <table>
          <tbody>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
            </tr>

            {listArr.map((item: any, idx: number) => (
              <tr key={idx}>
                <td>{item.list}</td>
                <td>
                  {item.quantity}
                  <div className="btn__container">
                    <Button
                      variant="contained"
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      +
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      -
                    </Button>
              
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
