import React from "react";

export default function CommentsList({ comments }) {
  return (
    <>
      <h3>Comments:</h3>

      {comments.map((comment, key) => (
        <div key={key}>
          <h4>A comment here</h4>
          <h4>{comment.username}</h4>
          <p>{comment.text}</p>
        </div>
      ))}
    </>
  );
}
