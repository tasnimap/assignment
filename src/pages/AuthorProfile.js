import React from "react";
import { useParams } from "react-router-dom";

function AuthorProfile() {
  const { id } = useParams();

  return (
    <div className="author-page">
      <h2>👤 Author Profile</h2>
      <p><strong>Name:</strong> Author {id}</p>
      <p><strong>Bio:</strong> This is a fictional author profile to show routing works.</p>
      <p><strong>Books Written:</strong> {Math.floor(Math.random() * 10 + 1)}</p>
    </div>
  );
}

export default AuthorProfile;
