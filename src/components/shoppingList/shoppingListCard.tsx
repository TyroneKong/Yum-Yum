import React, { useState, useEffect, useRef } from "react";
import "./shoppingListCard.scss";
import { List } from "./listInterface";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../index";
import { deletelist, setlists } from "../Redux/shoppingList";

interface Props {
  lists: List[];
  name: string;
  list: List[];
  id: number;
  // setLists: any
}

const ShoppingListCard: React.FC<Props> = ({ lists, name, id }) => {
  const [edit, setEdit] = useState(false);
  const [userInput, setUserInput] = useState<string>(name);
  const [done, setDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  

  const dispatch = useDispatch();


  // shoppinglist state
  const listArr: any = useSelector<RootState>(
    (state) => state.shopping.shoppinglist
  );


  
  const setToDone = () => {
    !done ? setDone(true) : setDone(false);
    console.log("done");
  };

  useEffect(() => {}, [edit]);

  //edit note
  const handleEdit = (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();
    inputRef.current?.focus();
    dispatch(
      setlists(
    listArr.map((list: any) =>
          list.id === id ? { ...list, list: userInput } : list
        )
      )
    );
    setEdit(false);
  };

  return (
    <div className="shoppingListCard">
      <form onSubmit={(e) => handleEdit(e, id)} className="form">
        {edit ? (
          <input
            className="listInput"
            value={userInput}
            ref={inputRef}
            onChange={(e) => {
              setUserInput(e.currentTarget.value);
            }}
          />
        ) : done ? (
          <div className="name__container">
            <s className="name">{name}</s>
          </div>
        ) : (
          <div className="name__container">
            <span className="name">{name}</span>
          </div>
        )}
      </form>

      <div className="icons-container">
        <span onClick={() => dispatch(deletelist(id))} className="icon">
          <RiDeleteBin6Line />
        </span>

        <span onClick={()=>setEdit(true)} className="icon">
          <AiFillEdit />
        </span>

        <span onClick={setToDone} className="icon">
          <MdDone />
        </span>
      </div>
    </div>
  );
};

export default ShoppingListCard;
