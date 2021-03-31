import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import moment from "moment";
import UserButtons from "./UserButtons";
import Comments from "./Comments";

export default function RecipeShow(props) {
  const { recipes, params } = props;

  if (recipes) {
    let recipe = recipes.find((r) => r.id === params.match.params.id);
    if (recipe) {
      const imageUrl =
        recipe.attributes.image ||
        recipe.attributes.image_url ||
        "https://images.unsplash.com/photo-1495546968767-f0573cca821e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80";
      return (
        <div className="recipe-container">
          <div className="recipe-header">
            <h1>{recipe.attributes.name}</h1>
            <div className="recipe-subhead">
              <span className="recipe-yield-time">By: </span>
              {recipe.attributes.user.name}
            </div>
            <br></br>
            <Row xs={1} md={2} lg={2}>
              <Col className="recipe-header-body">
                <Row>
                  <Col className="col-4">
                    <h6>
                      <span className="recipe-yield-time">Total Time: </span>
                      <br></br>
                      <span>
                        {recipe.attributes.prep_time +
                          recipe.attributes.cook_time}{" "}
                        mins
                      </span>
                    </h6>
                  </Col>
                  <Col className="col-4">
                    <h6>
                      <span className="recipe-yield-time">Prep Time: </span>
                      <br></br>
                      <span>{recipe.attributes.prep_time} mins </span>
                    </h6>
                  </Col>
                  <Col className="col-4">
                    <h6>
                      <span className="recipe-yield-time">Cook Time: </span>
                      <br></br>
                      <span>{recipe.attributes.cook_time} mins </span>
                    </h6>
                  </Col>
                  <div className="w-100 d-none d-md-block"></div>
                  <Col className="col-4">
                    <h6>
                      <span className="recipe-yield-time">Servings: </span>
                      <br></br>
                      <span>{recipe.attributes.serves}</span>
                    </h6>
                  </Col>
                  <Col className="col-4">
                    <div>
                      <span className="recipe-yield-time">Cuisine: </span>
                      <br></br>
                      {recipe.attributes.cuisine}
                    </div>
                  </Col>
                  <Col className="col-4">
                    <div>
                      <span className="recipe-yield-time">Course: </span>
                      <br></br>
                      {recipe.attributes.course}
                    </div>
                  </Col>
                  <div className="w-100 d-none d-md-block"></div>
                  <Col>
                    <br></br>
                    <h4>Description/Notes:</h4>
                    <ul>
                      {recipe.attributes.description.split(/\n/).map((line) => (
                        <li key={Date.now() + Math.random(100)}>{line}</li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Image
                  className="float-right"
                  width="600px"
                  alt={recipe.attributes.name}
                  src={imageUrl}
                  secure="true"
                  fluid
                />
              </Col>
            </Row>
          </div>
          <div className="recipe-footer">
            <Row className="justify-content-left">
              <Col lg="8">
                <b>Last Updated:</b>{" "}
                {moment(recipe.attributes.updated_at).format(
                  "MMMM Do YYYY, h:mm a"
                )}
              </Col>
              <Col>
                <UserButtons recipe={recipe} />
              </Col>
            </Row>
          </div>
          <br></br>
          <div className="recipe-main">
            <section>
              <h4>Ingredients:</h4>
              <ul>
                {recipe.attributes.ingredients.split(/\n/).map((line) => (
                  <li key={Date.now() + Math.random(100)}>{line}</li>
                ))}
              </ul>
            </section>
            <br></br>
            <section>
              <h4>Method:</h4>
              <ol>
                {recipe.attributes.method.split(/\n/).map((line) => (
                  <li key={Date.now() + Math.random(100)}>{line}</li>
                ))}
              </ol>
            </section>
            <br></br>
          </div>
          <br></br>
          <Comments recipe={recipe} />
        </div>
      );
    }
  }
  return null;
}
