import React from "react";
import Recipe from "./Recipe";
import Row from 'react-bootstrap/Row'

export default function Recipes(props) {
  let { recipes } = props;
  if (recipes) {
    const recipesList = recipes.map((recipe) => {
      return <Recipe key={recipe.id} recipe={recipe} deleteRecipe={props.deleteRecipe} />;
    });
    return <Row xs={1} sm ={2} md={3} lg={4} className="justify-content-center">{recipesList}</Row>;
  }
}
