import React from 'react'
import CreateCommentForm from '../containers/CreateCommentForm'
import Comment from './Comment';

export default function Comments(props) {
    const recipe = props.recipe
    const comments = recipe.attributes.comments || {}
    if (comments) {
        const commentsList = comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        });

    return (
        <div>
            <h3>Comments/Reviews</h3>
            <div>{commentsList}</div>
            <CreateCommentForm recipe={recipe}/>
        </div>
         )
    }
}
