import React from "react";
import BookCard from "../components/BookCard";
import Pagination from "../components/Pagination";

function HomePage() {
  const dummyBooks = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    title: `Curated Book Title ${i + 1}`,
    author: { name: `Author ${i + 1}`, id: i + 1 },
    content: "This is a great book for readers who enjoy learning and exploring.",
  }));

  return (
    <div className="container">
      <h1 className="main-title">📚 Bookify - Your Book Marketplace</h1>
      <p className="subtitle">
        Buy • Sell • Exchange • Discover curated books with reviews, wishlist, and more!
      </p>

      <div className="features">
        <span>📦 Curated Collections</span>
        <span>🔁 Exchange Books</span>
        <span>🎯 Recommendations</span>
        <span>🧾 Verified Reviews</span>
        <span>📲 E-Book Support</span>
        <span>🔔 Wishlist Alerts</span>
        <span>🚚 Nationwide Delivery</span>
      </div>

      {dummyBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}

      <Pagination totalPages={3} />
    </div>
  );
}

export default HomePage;
