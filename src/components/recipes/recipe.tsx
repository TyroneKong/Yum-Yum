import axios from "axios";
import React, { FC, useRef, useContext, useState } from "react";
import { Button } from "@mui/material";
import { GreetContext } from "../../App";
import { RecipeList } from "./recipeList";
import "./recipe.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../..";
import { setrecipedata } from "../Redux/recipe";

// passing in the greetingprops using the interface
export const Recipe: FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  // using the context

  const value = useContext(GreetContext);

  const dispatch = useDispatch();

  const recipedata: any = useSelector<RootState>(
    (state) => state.recipe.recipe
  );
  console.log(recipedata);

  const getRecipeList = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/recipeList/${value?.input}`
      );

      const { results } = data;

      console.log(results);
      dispatch(setrecipedata(results));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    getRecipeList();

    formRef.current?.reset();
  };

  return (
    <div>
      <h1>Yum Yum</h1>

      <form ref={formRef} onSubmit={fetchData}>
        <input
          className="input"
          placeholder="search for recipe,,,"
          onChange={(e) => {
            value?.setInput(e.currentTarget.value);
          }}
          required
        ></input>

        <Button variant="contained" type="submit">
          Find Recipe
        </Button>
      </form>

      <RecipeList recipedata={recipedata} />
    </div>
  );
};
