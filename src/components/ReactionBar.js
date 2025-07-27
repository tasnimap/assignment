import React, { useState } from "react";

function ReactionBar() {
  const [selected, setSelected] = useState("");

  const icons = ["👍", "❤️", "😡", "😢"];

  return (
    <div className="reaction-bar">
      {icons.map((icon) => (
        <button
          key={icon}
          className={`reaction-btn ${selected === icon ? "active" : ""}`}
          onClick={() => setSelected(icon)}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}

export default ReactionBar;
