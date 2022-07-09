import React, {FC, useState, useRef, useEffect} from "react";
import { Button } from "@mui/material";
import './shopping.scss'
import {List} from './listInterface'
import ShoppingList from './shoppingList'

const Shopping:FC = () => {
const [input, setInput] = useState<string>("")
const [lists, setLists] = useState<List[]>([])
const [isDone, setIsDone] = useState<boolean>(false)


const inputRef= useRef<HTMLFormElement>(null)



const handleSubmit=(e:React.FormEvent)=>{
e.preventDefault()

if(input){
  const item = lists.map(list => list.list)
  // check if item already exists
if(!item.includes(input)){
  setLists([...lists, {id:Date.now(),list:input, isDone:isDone}])

} else{
  alert('item axists')
}

  
inputRef.current?.reset()

}
}

useEffect(()=>{

},[lists, isDone])


return ( 
<div>
<h2>Shopping List</h2>
<h2> You have {lists.length ===0 || lists.length >1?lists.length + ' items':lists.length + ' item'}</h2>
    <form ref={inputRef}  onSubmit={handleSubmit}>

      <input  type="input" placeholder="add to shopping list..." onChange={(e)=>{setInput(e.currentTarget.value)}} required>
      </input>
      <Button className="button"  type="submit" variant="contained">Add to list</Button>
    </form>
<ShoppingList lists={lists} setLists={setLists} />
  </div>

) 
};

export default Shopping;
