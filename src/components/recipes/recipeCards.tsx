import  React, {FC} from 'react';
import './recipeCards.scss'


export interface cardProps {
data:string

}

export const RecipeCard:FC<cardProps>= ({data})=> {
  return (
    <div className='card'>
      <img className='card__img' src={data} alt="food-img"></img>
    </div>
  );
}
