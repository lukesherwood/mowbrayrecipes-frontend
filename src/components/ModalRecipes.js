import React from "react";
import Modal from "react-bootstrap/Modal";
import Recipe from "./Recipe";
import * as Icon from 'react-bootstrap-icons';

export default function ModalRecipes(props) {
  let recipes = props.recipes || [];
  const recipeList = recipes.map((recipe) => {
    return <Recipe key={recipe.id} recipe={recipe} picture={"150"} />;
  });

  return (
    <Modal {...props} size="md" centered>
      <Modal.Body>
        
        <h3>
          Results for '{props.keyword.keyword}'
          <Icon.XSquare as="button" className="btn-danger float-right" onClick={props.onHide}/>
        </h3>
        {recipeList}
        {recipes.length === 0 ? "Sorry no recipes found" : null}
      </Modal.Body>
    </Modal>
  );
}
