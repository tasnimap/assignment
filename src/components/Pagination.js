import React, { useState } from "react";

function Pagination({ totalPages }) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;