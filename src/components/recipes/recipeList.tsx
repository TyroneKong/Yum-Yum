import React, {FC} from 'react';
import {RecipeCard} from './recipeCards'
import './recipeList.scss'


export interface recipeProps {

recipedata:any

}

export const RecipeList:FC<recipeProps> = ({recipedata})=> {
  return (
    <div className='card__container'>
{ recipedata?.map((data: any, index:number)=>{
 return  <RecipeCard key={index} img={data.thumbnail_url} data={data} videoData={data.original_video_url}/>
})}
    </div>
  );
}
