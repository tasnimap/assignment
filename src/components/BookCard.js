import React from "react";
import { Link } from "react-router-dom";
import ReactionBar from "./ReactionBar";
import CommentSection from "./CommentSection";

function BookCard({ book }) {
  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <p>
        by{" "}
        <Link to={`/author/${book.author.id}`} className="author-link">
          {book.author.name}
        </Link>
      </p>
      <p className="book-desc">{book.content}</p>
      <ReactionBar />
      <CommentSection />
    </div>
  );
}

export default BookCard;
