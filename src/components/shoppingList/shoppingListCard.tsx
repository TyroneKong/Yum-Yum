import React, {useState, useEffect, useRef} from "react";
import './shoppingListCard.scss'
import {List} from './listInterface'
import {AiFillDelete} from 'react-icons/ai'
import {AiFillEdit} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'


interface Props{
  lists:List[]
  name:string
  list:List[]
  id:number;
setLists:any;
isDone:boolean;
setIsDone:any
  
}



const ShoppingListCard:React.FC<Props> = ({lists,list, name, id, setLists, isDone, setIsDone}) => {
  const [edit, setEdit] = useState(false)
  const [alterList, setalterList] = useState<string>(name)
  const [done, setDone] = useState(false)
const inputRef = useRef(null)


const deleteList=(id:number)=>{
const newList = lists.filter((list:any)=>
  list.id !== id)
setLists(newList)
  console.log(newList)

}



const editList=()=>{
  setEdit(true)
  
}

const setToDone=()=>{
!done? setDone(true):setDone(false)
console.log("done")

}


useEffect(()=>{

},[edit])

const handleEdit=(e:React.FormEvent<HTMLFormElement>, id:number)=>{
  e.preventDefault()
setLists(lists.map(list=> list.id === id?{...list, list:alterList}:list ))
setEdit(false)
}




  return <div className="shoppingListCard">

  <form onSubmit={(e)=>handleEdit(e, id)} ref={inputRef} className="form">
{edit ?(
<input value={alterList} onChange={(e)=>{setalterList(e.currentTarget.value)}}/>
):done ? (
<div className="name__container">

<s className="name">{name}</s>
</div>


):(<div className="name__container"><span className="name">{name}</span></div>
)}

  </form>
  
<div className="icons-container">
<span   onClick={()=> deleteList(id)} className="icon">

<AiFillDelete/>
</span>
 
  <span onClick={editList} className="icon"> <AiFillEdit/></span>

  <span onClick={setToDone} className="icon"><MdDone/></span>



</div>

  </div>;
};

export default ShoppingListCard;
