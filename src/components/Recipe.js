import React from 'react'

export default function Recipe(props) {
        const { recipe } = props;
  return (
    <li className="recipe-card card" id={recipe.id + "-recipe-card"}>
      <img src={recipe.attributes.image_url} alt={recipe.attributes.name} width="600"></img>
      <div className="card-text">
        <h3>{recipe.attributes.name}</h3>
        <div className="recipe-card-info">
          <div className="recipe-card-ingredients">{recipe.attributes.ingredients}</div>
          <div className="recipe-card-method">{recipe.attributes.method}</div>
          <div className="recipe-card-notes">{recipe.attributes.notes}</div>
        </div>
      </div>
    </li>
  )
}
