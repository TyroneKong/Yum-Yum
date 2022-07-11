import React, { FC } from "react";
import ShoppingListCard from "./shoppingListCard";
import "./shoppingList.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../index";

// interface Props {
//   lists:any;
//   setLists:any;
// }

const ShoppingList: FC = () => {
  const listArr: any = useSelector<RootState>(
    (state) => state.shopping.shoppinglist
  );

  return (
    <div className="shoppingList">
      {listArr.map((list: any, index: number) => {
        return (
          <ShoppingListCard
            key={index}
            lists={listArr}
            list={list}
            name={list.list}
            id={list.id}
          />
        );
      })}
    </div>
  );
};

export default ShoppingList;
