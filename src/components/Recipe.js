import React from "react";
import Card from "react-bootstrap/Card";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link } from "react-router-dom";
// import UserButtons from "./UserButtons";

export default function Recipe(props) {
  const { recipe } = props;
  let imageUrl = recipe.attributes.image || recipe.attributes.imageUrl
  imageUrl == null ? imageUrl = "https://images.unsplash.com/photo-1495546968767-f0573cca821e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80" : imageUrl = recipe.attributes.imageUrl
  return (
    <Card className="recipe-card col mx-2 mb-3" id={recipe.id + "-recipe-card"}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{recipe.attributes.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          By: {recipe.attributes.user.name}
        </Card.Subtitle>
        <div className="recipe-card-left">
          Course: {recipe.attributes.course}
          <br></br>
          Cuisine: {recipe.attributes.cuisine}
        </div>
        <div className="recipe-card-right">
          Cook Time: {recipe.attributes.cook_time}
          <br></br>
          Prep Time: {recipe.attributes.prep_time}
        </div>
       
      </Card.Body>
      <Link
          className="btn btn-outline-primary btn-sm stretched-link"
          to={`/recipes/${recipe.id}`}
        >
          More information
        </Link>
        {/* <UserButtons recipe={recipe} /> */}
    </Card>
  );
}
