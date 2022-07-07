import React, {FC, FormEvent, useState, useRef} from "react";
import { Button } from "@mui/material";
import './shopping.scss'
import {List} from './listInterface'

const Shopping:FC = () => {
const [list, setList] = useState<string>("")
const [lists, setLists] = useState<List[]>([])

console.log(lists)


const inputRef= useRef<HTMLFormElement>(null)



const handleSubmit=(e:React.FormEvent)=>{
e.preventDefault()

if(list){
  setLists([...lists, {id:Date.now(),list:list, isDone:false}])
}
inputRef.current?.reset()

}




return ( 
<div>
<h2>Shopping List</h2>
    <form ref={inputRef}  onSubmit={handleSubmit}>

      <input  type="input" onChange={(e)=>{setList(e.currentTarget.value)}}>
      </input>
      <Button className="button"  type="submit" variant="contained">Add to list</Button>
    </form>

  </div>

) 
};

export default Shopping;
