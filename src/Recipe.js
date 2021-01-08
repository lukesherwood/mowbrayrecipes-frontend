import React from 'react'

export default function Recipe(props) {
        const { recipe } = props;
        console.log(recipe.image_url)
  return (
    <li className="recipe-card card" id={recipe.id + "-recipe-card"}>
      <img src={recipe.image_url} alt={recipe.title} width="600"></img>
      <div className="card-text">
        <h3>{recipe.name}</h3>
        <div className="recipe-card-info">
          <div className="recipe-card-ingredients">{recipe.ingredients}</div>
          <div className="recipe-card-method">{recipe.method}</div>
          <div className="recipe-card-notes">{recipe.notes}</div>
        </div>
      </div>
    </li>
  )
}
