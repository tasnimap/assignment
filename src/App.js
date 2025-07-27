import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthorProfile from "./pages/AuthorProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/author/:id" element={<AuthorProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
