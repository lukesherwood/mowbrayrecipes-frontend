import React from 'react'
import moment from "moment";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Comment(props) {
    const { comment } = props;
    return (
        <div className="comment-card">
            <Row sm={1} >
                <Col sm={1}>{comment.name}</Col>
                <Col md={4} className="blockquote-footer">{moment(comment.updated_at).format(
                    "MMMM Do YYYY, h:mm a"
                    )}
                </Col>
                <Col md={2}>{comment.rating} stars</Col>
            </Row>
            <br></br>
            <p>{comment.content}</p>
        </div>
    )
}
