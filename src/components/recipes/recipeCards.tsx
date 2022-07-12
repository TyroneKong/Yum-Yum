import React, { FC } from "react";
import "./recipeCards.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setChosenRecipe } from "../Redux/recipe";

export interface cardProps {
  img: string;
  data: any;
  videoData: string;
}

export const RecipeCard: FC<cardProps> = ({ img, data, videoData }) => {
  const dispatch = useDispatch();

  const getChosenRecipe = (id: number) => {
    dispatch(setChosenRecipe(id));
  };

  return (
    <div className="card">
      <Link to="/recipes">
        <img
          className="card__img"
          src={img}
          alt="food-img"
          onClick={() => getChosenRecipe(data.id)}
        ></img>
      </Link>

      <div className="card__name">
        <h2 className="card__description">
          <span>{data.name}</span>
        </h2>
        <h2>{data?.description || "no description available"}</h2>
      </div>
    </div>
  );
};
