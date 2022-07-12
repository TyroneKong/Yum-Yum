import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../..";
import "./RecipePage.scss";
import { Link } from "react-router-dom";

const RecipePage: FC = () => {
  const recipedata: any = useSelector<RootState>(
    (state) => state.recipe.recipe
  );
  console.log(recipedata);

  const video = recipedata[0]?.original_video_url;
  const thumbnail = recipedata[0]?.thumbnail_url;
  const name = recipedata[0]?.name;


  return (
    <div className="recipePage">
      <Link to="/">Back</Link>
      <h1>{name}</h1>
      <img className="recipePage__img" src={thumbnail} alt="foodimg"></img>
      {video !== null ? (
        <video className="recipePage__video" controls>
          <source src={video} type="video/mp4"></source>
        </video>
      ) : (
        "no video available"
      )}
    </div>
  );
};

export default RecipePage;
