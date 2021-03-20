import React from 'react'
import moment from "moment";

export default function Comment(props) {
    const { comment } = props;
    return (
        <div className="comment-card">
            <div className="row">
                <h5 className="col-1">{comment.name}</h5>
            <div className="blockquote-footer col-4">{moment(comment.updated_at).format(
                  "MMMM Do YYYY, h:mm a"
                )}
            </div>
                <div className="col-2">{comment.rating} stars</div>
            </div>

            <p>{comment.content}</p>
        </div>
    )
}
