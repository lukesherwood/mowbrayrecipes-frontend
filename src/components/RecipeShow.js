import React from 'react'

export default function RecipeShow(props) {
    const {recipes, params} = props
    if (recipes) {
            let recipe = recipes.find((r) => r.id === params.match.params.id);
            if (recipe) {
              return (
                <div className="recipe-item">
                  <h2>{recipe.attributes.name}</h2>
                  <p>{recipe.attributes.ingredients}</p>
                  <p>{recipe.attributes.method}</p>
                </div>
              );
            }
          }
          return <div>Sorry that recipe doesn't exist </div>; //better to render an error message
}