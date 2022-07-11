import React, {FC} from "react";
import ShoppingListCard from './shoppingListCard'
import './shoppingList.scss'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../index"


// interface Props {
//   lists:any;
//   setLists:any;
// }




const ShoppingList:FC = () => {


  const result:any = useSelector<RootState>(state=> state.shopping.shoppinglist)
  console.log(result)



  return <div className="shoppingList">
{result.map((list:any, index:number)=>{
return (

<ShoppingListCard key={index} lists={result} list={list} name={list.list} id={list.id} />
)
})}



  </div>;
};

export default ShoppingList;
