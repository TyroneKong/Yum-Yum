import React, {FC, FormEvent, useState, useRef, useEffect} from "react";
import { Button } from "@mui/material";
import './shopping.scss'
import {List} from './listInterface'
import ShoppingList from './shoppingList'

const Shopping:FC = () => {
const [list, setList] = useState<string>("")
const [lists, setLists] = useState<List[]>([])
const [isDone, setIsDone] = useState<boolean>(false)


const inputRef= useRef<HTMLFormElement>(null)



const handleSubmit=(e:React.FormEvent)=>{
e.preventDefault()

if(list){
  setLists([...lists, {id:Date.now(),list:list, isDone:isDone}])
}
inputRef.current?.reset()

}

useEffect(()=>{

},[lists, isDone])


return ( 
<div>
<h2>Shopping List</h2>
    <form ref={inputRef}  onSubmit={handleSubmit}>

      <input  type="input" placeholder="add to shopping list..." onChange={(e)=>{setList(e.currentTarget.value)}}>
      </input>
      <Button className="button"  type="submit" variant="contained">Add to list</Button>
    </form>
<ShoppingList lists={lists} setLists={setLists} setIsDone={setIsDone}/>
  </div>

) 
};

export default Shopping;
