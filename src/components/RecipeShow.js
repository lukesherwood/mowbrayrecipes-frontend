import React from "react";
import Image from "react-bootstrap/Image";
import moment from 'moment';


export default function RecipeShow(props) {
  const { recipes, params } = props;
  if (recipes) {
    let recipe = recipes.find((r) => r.id === params.match.params.id);
    if (recipe) {
      return (
        <div className="recipe-item">
          <h2>{recipe.attributes.name}</h2>
          <br></br>
          <Image
            alt={recipe.attributes.name}
            src={recipe.attributes.image_url}
            fluid
          />
          <div>
            <br></br>
            <div><b>By:</b> {recipe.attributes.user.name}</div>
          <div><b>Created:</b> {moment(recipe.attributes.created_at).format("MMMM Do YYYY, h:mm a")}</div>
          <div><b>Updated:</b> {moment(recipe.attributes.updated_at).format("MMMM Do YYYY, h:mm a")}</div>
          <div ><b>Serves:</b> {recipe.attributes.serves}</div>
            <div ><b>Prep Time:</b> {recipe.attributes.prep_time} mins</div>
            <div><b>Cook Time:</b> {recipe.attributes.cook_time} mins</div>
            <div>
              <b>Total Time: </b>
              {recipe.attributes.prep_time + recipe.attributes.cook_time} mins
            </div>
            <div><b>Cuisine:</b> {recipe.attributes.cuisine}</div>
            <div><b>Course:</b> {recipe.attributes.course}</div>
          </div>
          <br></br>
          <h4>Ingredients:</h4>
          <div>
            {recipe.attributes.ingredients.split(/\n/).map((line) => (
              <div key={Date.now()+Math.random(100)}>{line}</div>
            ))}
          </div>
          {/* /n not rendering as new line, might need to remove later? */}
          <br></br>
          <h4>Method:</h4>
          <div>
            {recipe.attributes.method.split(/\n/).map((line) => (
              <div key={Date.now()+Math.random(100)}>{line}</div>
            ))}
          </div>
          <br></br>
        </div>
      );
    }
  }
  return null; //better to render an error message
}
