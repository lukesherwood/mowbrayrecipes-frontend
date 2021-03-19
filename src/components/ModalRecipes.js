import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Recipe from './Recipe'

export default function ModalRecipes(props) {
  let recipes = props.recipes || []
    const recipeList = recipes.map((recipe) => {
        return <Recipe key={recipe.id} recipe={recipe} picture={"150"}/>;
    })

    return (
        <Modal
          {...props}
          size="md"
          centered
        >
          <Modal.Body>
            <h3>Results for '{props.keyword.keyword}'</h3>
            {recipeList}
            {recipes.length === 0 ? "Sorry no recipes found" : null}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}
