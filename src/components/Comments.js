import React from "react";
import CreateCommentForm from "../containers/CreateCommentForm";
import Comment from "./Comment";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Comments(props) {
  const recipe = props.recipe;
  const comments = recipe.attributes.comments || {};
  if (comments) {
    const commentsList = comments.map((comment) => {
      return <Comment key={comment.id} comment={comment} />;
    });

    return (
      <div className="comments-container">
        <h3>Comments/Reviews</h3>
        <div>{commentsList}</div>
        <br></br>
        <Accordion>
          <Accordion.Toggle
            as={Button}
            variant="primary"
            className="btn-custom"
            id="toggle-new-list-form"
            eventKey="0"
          >
            Leave a Comment
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            {props.loggedIn ? (
              <CreateCommentForm recipe={recipe} />
            ) : (
              <div className="border p-4 text-center">
                <div> You need to be logged in to comment</div>
                <Link to="/signIn" className="btn btn-custom btn-sm">
                  {" "}
                  Sign In here{" "}
                </Link>
                <br/>
              </div>
            )}
          </Accordion.Collapse>
        </Accordion>
      </div>
    );
  }
}
