import React, { useState } from "react";

function CommentSection() {
  const [dummyComments] = useState([
    { id: 1, text: "This book looks amazing!", author: "User123" },
    { id: 2, text: "Has anyone read this before?", author: "BookLover22" }
  ]);
  const [selectedReaction, setSelectedReaction] = useState("");

  const icons = ["👍", "❤️", "😡", "😢"];

  return (
    <div className="comment-section">
      <div className="comment-reaction-bar">
        {icons.map((icon) => (
          <button
            key={icon}
            type="button"
            className={`comment-reaction-btn ${
              selectedReaction === icon ? "comment-reaction-active" : ""
            }`}
            onClick={() => setSelectedReaction(icon)}
          >
            {icon}
          </button>
        ))}
      </div>
      <div className="comment-display">
        {dummyComments.map((comment) => (
          <div key={comment.id} className="comment">
            <p><strong>{comment.author}:</strong> {comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentSection;