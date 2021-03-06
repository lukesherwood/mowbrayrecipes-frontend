import React from "react";
import Card from "react-bootstrap/Card";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link } from "react-router-dom";
// import UserButtons from "./UserButtons";

export default function Recipe(props) {
  const { recipe } = props;

  const imageUrl = recipe.attributes.image || recipe.attributes.image_url || "https://images.unsplash.com/photo-1495546968767-f0573cca821e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80"
  return (
    <Card className="recipe-card col mx-2 mb-3" id={recipe.id + "-recipe-card"}>
      <Card.Img variant="top" src={imageUrl} secure="true"/>
      <Card.Body>
        <Card.Title>{recipe.attributes.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          By: {recipe.attributes.user.name}
        </Card.Subtitle>
        <div className="float-left">
          Course: {recipe.attributes.course}
          <br></br>
          Cuisine: {recipe.attributes.cuisine}
        </div>
        <div className="float-right">
          Cook Time: {recipe.attributes.cook_time}
          <br></br>
          Prep Time: {recipe.attributes.prep_time}
        </div>
       
      </Card.Body>
      <Link
          className="btn btn-custom btn-sm stretched-link"
          to={`/recipes/${recipe.id}`}
        >
          More information
        </Link>
        {/* <UserButtons recipe={recipe} /> */}
    </Card>
  );
}
