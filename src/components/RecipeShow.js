import React from "react";
import Image from "react-bootstrap/Image";

export default function RecipeShow(props) {
  const { recipes, params } = props;
  if (recipes) {
    let recipe = recipes.find((r) => r.id === params.match.params.id);
    if (recipe) {
      return (
        <div className="recipe-item">
          <h2>{recipe.attributes.name}</h2>
          <Image
            alt={recipe.attributes.name}
            src={recipe.attributes.image_url}
            fluid
          />
          <div>
            <div ><b>Prep Time:</b> {recipe.attributes.prep_time} mins</div>
            <div><b>Cook Time:</b> {recipe.attributes.cook_time} mins</div>
            <div>
              <b>Total Time: </b>
              {recipe.attributes.prep_time + recipe.attributes.cook_time} mins
            </div>
            <div><b>Cuisine:</b> {recipe.attributes.cuisine}</div>
            <div><b>Course:</b> {recipe.attributes.course}</div>
          </div>
          <h4>Ingredients:</h4>
          <div>
            {recipe.attributes.ingredients.split(/\n/).map((line) => (
              <div>{line}</div>
            ))}
          </div>
          {/* /n not rendering as new line, might need to remove later? */}
          <h4>Method:</h4>
          <div>
            {recipe.attributes.method.split(/\n/).map((line) => (
              <div>{line}</div>
            ))}
          </div>
        </div>
      );
    }
  }
  return <div>Sorry that recipe doesn't exist </div>; //better to render an error message
}
