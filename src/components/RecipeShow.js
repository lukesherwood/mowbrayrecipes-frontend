import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import moment from "moment";
import UserButtons from "./UserButtons";
import Comments from "./Comments";
import Jumbotron from "react-bootstrap/Jumbotron";
import {Clock} from 'react-bootstrap-icons'

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
          <Jumbotron className="header-theme">
            <div className="display-4">{recipe.attributes.name}</div>
            <div className="lead">By: {recipe.attributes.user.name}</div>
            <hr class="my-4" />
            <Row xs={1} md={2} lg={2}>
              <Col className="text-left">
                <Row>
                  <Col className="col-4">
                    <h6>
                      <div>Total <Clock/> </div>
                      <div>
                        {recipe.attributes.prep_time +
                          recipe.attributes.cook_time}{" "}
                        mins
                      </div>
                    </h6>
                  </Col>
                  <Col className="col-4">
                    <h6>
                     <div>Prep <Clock/> </div>
                      <div>{recipe.attributes.prep_time} mins </div>
                    </h6>
                  </Col>
                  <Col className="col-4">
                    <h6>
                      <div>Cook <Clock/> </div>
                      <div>{recipe.attributes.cook_time} mins </div>
                    </h6>
                  </Col>
                  <div className="w-100 d-none d-md-block"></div>
                  <Col className="col-4">
                    <h6>
                      <div>Servings: </div>
                      <div>{recipe.attributes.serves}</div>
                    </h6>
                  </Col>
                  <Col className="col-4">
                    <div>
                      <div>Cuisine: </div>
                      {recipe.attributes.cuisine}
                    </div>
                  </Col>
                  <Col className="col-4">
                    <div>
                      <div>Course: </div>
                      {recipe.attributes.course}
                    </div>
                  </Col>
                  <div className="w-100 d-none d-md-block"></div>
                  <Col>
                  <hr class="my-4" />
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
          </Jumbotron>
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
