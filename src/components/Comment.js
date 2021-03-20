import React from 'react'

export default function Comment(props) {
    const { comment } = props;
    return (
        <div className="comment-card">
            <h3>{comment.name}</h3>
            <p>{comment.content}</p>
        </div>
    )
}
