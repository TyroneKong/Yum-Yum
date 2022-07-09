import  React, {FC} from 'react';
import './recipeCards.scss'


export interface cardProps {
img:string
data:any
}

export const RecipeCard:FC<cardProps>= ({img, data})=> {
  return (
    <div className='card'>
   
      <img className='card__img' src={img} alt="food-img"></img>
      <div className='card__name'>
      <h2>{data.name}<br/>  {data?.description ||"no description available"}</h2>

      </div>

    </div>
  );
}
