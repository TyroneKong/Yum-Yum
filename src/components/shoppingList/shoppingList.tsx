import React, {FC} from "react";
import ShoppingListCard from './shoppingListCard'
import './shoppingList.scss'


interface Props {
  lists:any;
  setLists:any;
}




const ShoppingList:FC<Props> = ({lists, setLists}) => {
  console.log(lists)
  return <div className="shoppingList">
{lists.map((list:any, index:number)=>{
return (

<ShoppingListCard key={index} lists={lists} list={list} name={list.list} id={list.id} setLists={setLists} />
)
})}



  </div>;
};

export default ShoppingList;
