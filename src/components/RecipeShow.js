import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from "react-bootstrap/Image";
import moment from 'moment';
import UserButtons from './UserButtons'


export default function RecipeShow(props) {
  const { recipes, params } = props;
  if (recipes) {
    let recipe = recipes.find((r) => r.id === params.match.params.id);
    if (recipe) {
      return (
        <div className="recipe-item-page border">
          <div className="recipe-header">
            <h1>{recipe.attributes.name}</h1>
            <div className='recipe-subhead'>
              <span className='recipe-yield-time'>By: </span>
              {recipe.attributes.user.name}
            </div>
          <br></br>
          <Row xs={1} md={2} lg={2}>
            <Col>
              <Row>
					<Col className='col-4'>
						<h6>
							<span className='recipe-yield-time'>Total Time: </span><br></br>
							<span>{recipe.attributes.prep_time + recipe.attributes.cook_time} mins</span>
						</h6>
					</Col>
					<Col className='col-4'>
						<h6>
							<span className='recipe-yield-time'>Prep Time: </span><br></br>
							<span>{recipe.attributes.prep_time} mins </span>
						</h6>
					</Col>
					<Col className='col-4'>
						<h6>
							<span className='recipe-yield-time'>Cook Time: </span><br></br>
							<span>{recipe.attributes.cook_time} mins </span>
						</h6>
					</Col>
					<div className="w-100 d-none d-md-block"></div>
					<Col className='col-4'>
						<h6>
							<span className='recipe-yield-time'>Servings: </span><br></br>
							<span>{recipe.attributes.serves}</span>
						</h6>
					</Col>
					<Col className='col-4'>
						<div>
							<span className='recipe-yield-time'>Cuisine: </span><br></br> 
							{recipe.attributes.cuisine}
						</div>
					</Col>
					<Col className='col-4'>
						<div>
						<span className='recipe-yield-time'>Course: </span><br></br>
							{recipe.attributes.course}
						</div>
					</Col> 
					<div className="w-100 d-none d-md-block"></div>
					<Col>
						<br></br>
						<p> 
							{recipe.attributes.description}
						</p>
					</Col>
				</Row>
			</Col>    
            <Col>
              <Image
                className="float-right"
                width="600px"
                alt={recipe.attributes.name}
                src={recipe.attributes.image_url}
                fluid
              />
            </Col>              
		</Row>
		</div>
		<br></br>
		<div className="recipe-main">
		<section>
			<h4>Ingredients:</h4>
			<ul>
				{recipe.attributes.ingredients.split(/\n/).map((line) => (
				<li key={Date.now()+Math.random(100)}>{line}</li>
				))}
			</ul>
		</section>
		<br></br>
        <section>
			<h4>Method:</h4>
			<ol>
				{recipe.attributes.method.split(/\n/).map((line) => (
				<li key={Date.now()+Math.random(100)}>{line}</li>
				))}
			</ol>
          </section>
		  <br></br>
			<UserButtons recipe={recipe}/>
		  </div>
		  <div className="recipe-footer">
		  <Row className="justify-content-md-center">
          <Col lg="6">
            <b>Last Updated:</b> {moment(recipe.attributes.updated_at).format("MMMM Do YYYY, h:mm a")}
          </Col>
		  </Row>
		  </div>
        </div>
      );
    }
  }
  return null;
}
