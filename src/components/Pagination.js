import React from "react";

function Pagination({ totalPages }) {
  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => (
        <button key={i} className="page-btn">{i + 1}</button>
      ))}
    </div>
  );
}

export default Pagination;
