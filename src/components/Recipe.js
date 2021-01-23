import React from "react";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup"
import { Link } from "react-router-dom";
import UserButtons from "./UserButtons";


export default function Recipe(props) {
  
  const { recipe } = props;

  return (
    <Card className="recipe-card col mx-2 mb-3" id={recipe.id + "-recipe-card"}>
      <Card.Img variant="top" src={recipe.attributes.image_url} />
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
        <ButtonGroup>
        <Link className="btn btn-outline-primary btn-sm" to={`/recipes/${recipe.id}`}>
          More information
        </Link>        
        <UserButtons recipe={recipe} />
        </ButtonGroup>
    </Card>
  );
}
