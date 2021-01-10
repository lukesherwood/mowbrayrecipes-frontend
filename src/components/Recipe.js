import React from 'react'

export default function Recipe(props) {
        const { recipe } = props;
        console.log(recipe)
        // doesn't work when you add a json recipe as props, but does work if direct from server in fast json api serializer format
  return (
    <li className="recipe-card card" id={recipe.id + "-recipe-card"}>
      <img src={recipe.attributes.image_url} alt={recipe.attributes.name} width="600"></img>
      <div className="card-text">
        <h3>{recipe.attributes.name}</h3>
        <div className="recipe-card-info">
          <div className="recipe-card-serves">Serves: {recipe.attributes.serves}</div>
          <div className="recipe-card-ingredients">Ingredients: {recipe.attributes.ingredients}</div>
          <div className="recipe-card-method">Method: {recipe.attributes.method}</div>
        </div>
      </div>
    </li>
  )
}
