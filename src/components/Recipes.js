import React from "react";
import Recipe from "./Recipe";

export default function Recipes(props) {
  const { recipes } = props;
  if (recipes){
    const recipesList = recipes.map((recipe) => {
    return <Recipe key={recipe.id} recipe={recipe} />;
  });
  return <ul className="cards">{recipesList}</ul>;
}
}
