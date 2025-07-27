import React from "react";

function CommentSection() {
  return (
    <div className="comment-section">
      <input type="text" placeholder="Write a comment..." className="comment-box" />
      <div className="comment-display">
        <p><strong>User123:</strong> This book looks amazing!</p>
      </div>
    </div>
  );
}

export default CommentSection;
