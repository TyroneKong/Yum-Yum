import React, { FC } from "react";
import "./recipeCards.scss";
import { Link } from "react-router-dom";

export interface cardProps {
  img: string;
  data: any;
  videoData: string;
}

export const RecipeCard: FC<cardProps> = ({ img, data, videoData }) => {
  return (
    <div className="card">

      <Link to="/recipes">
        <img className="card__img" src={img} alt="food-img"></img>
      </Link>

      <div className="card__name">
        <h2 className="card__description">
        <span>{data.name}</span>

        </h2>
          <h2>{data?.description || "no description available"}
        </h2>

      </div>
{/* {videoData !== null &&

      <video className="card__video" controls>
        <source src={videoData} type="video/mp4" />
      </video> } */}
    </div>
  );
};
