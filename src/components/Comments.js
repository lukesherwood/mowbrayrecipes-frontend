import React from "react";
import CreateCommentForm from "../containers/CreateCommentForm";
import Comment from "./Comment";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

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
            id="toggle-new-list-form"
            eventKey="0"
          >
            Leave a Comment
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <CreateCommentForm recipe={recipe} />
          </Accordion.Collapse>
        </Accordion>
      </div>
    );
  }
}
